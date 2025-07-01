import { ReactNode } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard for managing stores, products, and categories.",
}

export default function RootLayout({ children, }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <div className="w-full h-full items-center justify-center">
                <Navbar />
                {children}
            </div>
        </>
    )
}