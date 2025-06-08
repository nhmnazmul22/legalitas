import { dbConnect } from "@/lib/config/db";
import InvoiceModel from "@/lib/models/InvoiceModel";
import { getCorsHeaders, generateInvoiceNumber } from "@/lib/utils";
import { NextResponse } from "next/server";

// Load Database
const LoadDataBase = () => {
  dbConnect();
};

LoadDataBase();

export const POST = async (request: Request) => {
  const headers = getCorsHeaders(request);
  try {
    const body = await request.json();
    const { service, amount, dueDate, clientId, paymentId } = body;

    if (!service || !amount || !dueDate || !clientId || !paymentId) {
      return NextResponse.json(
        {
          status: "Failed",
          message: "Missing required fields",
        },
        {
          status: 400,
          headers: headers,
        }
      );
    }

    let generateInvNo = generateInvoiceNumber();

    const prevInvoice = await InvoiceModel.findOne({ invNo: generateInvNo });

    if (prevInvoice) {
      generateInvoiceNumber();
      return NextResponse.json(
        {
          status: "Failed",
          message: "A invoice here in database with this invoice no.",
        },
        {
          status: 400,
          headers: headers,
        }
      );
    }

    const invoiceInfo = await InvoiceModel.create({
      ...body,
      invNo: generateInvNo,
    });
    return NextResponse.json(
      { status: "Successful", data: invoiceInfo },
      {
        status: 201,
        headers: headers,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { status: "Failed", message: err.toString() },
      {
        status: 500,
        headers: headers,
      }
    );
  }
};
