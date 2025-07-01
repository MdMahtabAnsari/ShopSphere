import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@workspace/ui/components/alert-dialog";
import { ReactNode, ComponentProps } from "react";

type ConfirmDialogProps<T = void> = {
    trigger: ReactNode;
    title: string;
    description: string;
    data?: T;
    renderConfirmButton: (defaultProps: ComponentProps<typeof AlertDialogAction>) => ReactNode;
    isOpen: boolean;
    action: () => void; // Called on open/close
    onConfirm?: (data?: T) => void;
};

export function ConfirmDialog<T = void>({
                                            trigger,
                                            title,
                                            description,
                                            data,
                                            renderConfirmButton,
                                            isOpen,
                                            action,
                                            onConfirm,
                                        }: ConfirmDialogProps<T>) {
    const handleConfirm = () => {
        onConfirm?.(data);
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={(open) => !open && action()}>
            <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
            <AlertDialogContent >
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={action} className="cursor-pointer">Cancel</AlertDialogCancel>
                    {renderConfirmButton(
                        {
                            children: "Confirm",
                            onClick: handleConfirm,
                        }
                    )}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}