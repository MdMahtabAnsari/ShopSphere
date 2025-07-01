import {ModalProvider} from "@/providers/store/modal-provider";
import {ReactNode} from "react";
import {TooltipProvider} from "@workspace/ui/components/tooltip";

export default function RootLayout({ children, }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <div className="w-full h-full items-center justify-center">
                <TooltipProvider>
                    <ModalProvider/>
                    {children}
                </TooltipProvider>
            </div>
        </>
    )
}