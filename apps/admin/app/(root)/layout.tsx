import {ModalProvider} from "@/providers/modal-provider";
import {ReactNode} from "react";

export default function RootLayout({children,}: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <ModalProvider/>
            {children}
        </>
    )
}