import { ReactNode } from "react";
import { Navbar } from "@/components/dashboard/navbar";

export default function RootLayout({ children, }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <Navbar />
            <div className="w-full h-full items-center justify-center">
                {children}
            </div>
        </>
    )
}