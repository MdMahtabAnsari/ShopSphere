"use client";
import {ReactNode} from "react";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@workspace/ui/components/dialog";

interface ModalProps {
    title: string;
    description: string;
    children?: ReactNode;
    action: () => void;
    isOpen: boolean;
}

export const Modal = ({ title, description, children, action, isOpen }: ModalProps) => {
    const onChange=(open: boolean) => {
        if (!open) {
            action();
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )

}

