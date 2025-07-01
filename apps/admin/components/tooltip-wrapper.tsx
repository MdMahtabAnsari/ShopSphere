// components/ui/tooltip-wrapper.tsx
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { ReactNode } from "react";

type TooltipWrapperProps = {
    children: ReactNode;
    text: string;
};

export function TooltipWrapper({ children, text }: TooltipWrapperProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    );
}
