"use client";
import { FallbackProps } from "react-error-boundary";
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert";
import { Button } from "@workspace/ui/components/button";
import { AlertTriangle } from "lucide-react";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <Alert
            variant="destructive"
            className="flex flex-col justify-center items-center h-full w-full gap-4 p-8"
        >
            <AlertTriangle className="w-12 h-12 text-red-500 mb-2" />
            <AlertTitle className="text-xl font-bold">Something went wrong</AlertTitle>
            <AlertDescription className="text-center text-base text-red-700 mb-4">
                {error.message || "An unexpected error occurred."}
            </AlertDescription>
            <Button onClick={resetErrorBoundary} variant="destructive" className="cursor-pointer">
                Try again
            </Button>
        </Alert>
    );
}