import { StoreNavbar } from "@/components/dashboard/navbar";
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <StoreNavbar />
            <div className="w-full h-full items-center justify-center">
                {children}
            </div>
        </>
    );
}