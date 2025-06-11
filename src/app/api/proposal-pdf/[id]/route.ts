import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";

export const runtime = "nodejs";

function wrapText(
  text: string,
  font: any,
  fontSize: number,
  maxWidth: number
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? currentLine + " " + word : word;
    const width = font.widthOfTextAtSize(testLine, fontSize);
    if (width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const proposalId = (await params).id;
  if (!proposalId) {
    return new Response(
      JSON.stringify({ status: "Failed", message: "Proposal Not found" }),
      {
        status: 404,
      }
    );
  }

  const { title, price, date, status, details, includes, note, logoBase64 } =
    await req.json();

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size
  const fontNormal = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 40;
  let y = 780;

  // === Load Logo from /public/logo.png ===
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "secondary-logo.png"
  );
  const logoBuffer = fs.readFileSync(logoPath);

  // === 1. LOGO ===
  y -= 40;
  const logoImage = await pdfDoc.embedPng(logoBuffer);
  page.drawImage(logoImage, {
    x: margin,
    y,
    width: 180,
    height: 80,
  });

  // === 2. TITLE & META ===
  y -= 60;
  page.drawText(title, {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  y -= 30;
  page.drawText(`Harga: ${price}`, {
    x: margin,
    y,
    size: 12,
    font: fontNormal,
    color: rgb(0.4, 0.4, 0.4),
  });

  page.drawText(`Tanggal: ${date}`, {
    x: 300,
    y,
    size: 12,
    font: fontNormal,
    color: rgb(0.4, 0.4, 0.4),
  });

  // Status box (top-right)
  const statusWidth = fontNormal.widthOfTextAtSize(status, 12) + 20;
  page.drawRectangle({
    x: 595 - margin - statusWidth,
    y: y - 6,
    width: statusWidth,
    height: 20,
    color: rgb(1, 0.92, 0.6),
    borderColor: rgb(0.8, 0.5, 0.2),
    borderWidth: 1,
  });
  page.drawText(status, {
    x: 595 - margin - statusWidth + 10,
    y,
    size: 12,
    font: fontNormal,
    color: rgb(0.5, 0.3, 0.1),
  });

  // === 3. DESCRIPTION ===
  y -= 40;
  const description =
    "Proposal lengkap untuk pendirian PT termasuk akta notaris, SK Kemenkumham, dan dokumen pendukung lainnya.";
  const descLines = wrapText(description, fontNormal, 12, 595 - 2 * margin);
  descLines.forEach((line) => {
    page.drawText(line, {
      x: margin,
      y,
      size: 12,
      font: fontNormal,
      color: rgb(0, 0, 0),
    });
    y -= 18;
  });

  // === 4. DETAILS SECTION ===
  y -= 20;
  page.drawText("Detail Layanan:", {
    x: margin,
    y,
    size: 14,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  details.forEach((item: string, index: number) => {
    const line = `${index + 1} - ${item}`;
    const lines = wrapText(line, fontNormal, 12, 500);
    lines.forEach((l) => {
      page.drawText(l, {
        x: margin + 10,
        y,
        size: 12,
        font: fontNormal,
        color: rgb(0, 0, 0),
      });
      y -= 16;
    });
  });

  // === 5. INCLUDES SECTION ===
  y -= 20;
  page.drawText("Yang Termasuk:", {
    x: margin,
    y,
    size: 14,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 20;

  includes.forEach((item: string, index: number) => {
    const line = `${index + 1} - ${item}`;
    const lines = wrapText(line, fontNormal, 12, 500);
    lines.forEach((l) => {
      page.drawText(l, {
        x: margin + 10,
        y,
        size: 12,
        font: fontNormal,
        color: rgb(0, 0, 0),
      });
      y -= 16;
    });
  });

  // === 6. NOTE BOX ===
  y -= 80;
  page.drawRectangle({
    x: margin,
    y,
    width: 595 - 2 * margin,
    height: 60,
    color: rgb(0.9, 0.98, 0.95),
    borderColor: rgb(0.7, 0.9, 0.8),
    borderWidth: 1,
  });

  const noteLines = wrapText(`Catatan: ${note}`, fontNormal, 12, 515);
  let noteY = y + 25;
  noteLines.forEach((line) => {
    page.drawText(line, {
      x: margin + 10,
      y: noteY,
      size: 12,
      font: fontNormal,
      color: rgb(0.05, 0.4, 0.3),
    });
    noteY -= 16;
  });

  // === 7. FOOTER ===
  page.drawText(
    "© 2025 Mitra Jasa Legalitas | Semua hak dilindungi undang-undang",
    {
      x: margin,
      y: 30,
      size: 10,
      font: fontNormal,
      color: rgb(0.5, 0.5, 0.5),
    }
  );

  const pdfBytes = await pdfDoc.save();

  return new Response(pdfBytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=proposal-${proposalId}.pdf`,
    },
  });
}
