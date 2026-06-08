import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

import CustomCursor from "@/components/CustomCursor";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}


