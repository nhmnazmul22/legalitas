import type React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export const metadata = {
  title: "Admin Panel | Mitra Jasa Legalitas Surabaya",
  description: "Mitra Jasa Legalitas Surabaya",
};
