import { useEffect } from "react";

interface UseModalControlProps {
    isClient: boolean;
    isAvailable: boolean | undefined;
    isOpen: boolean;
    isManualOpen: boolean | undefined;
    loading: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export function useModalControl({
    isClient,
    isAvailable,
    isOpen,
    isManualOpen,
    loading,
    onOpen,
    onClose,
}: UseModalControlProps) {
    useEffect(() => {
        if (!isClient || isAvailable === undefined || isManualOpen === undefined) return;
        if (!isAvailable && !isOpen && !isManualOpen && !loading) {
            onOpen();
        }
        if (isAvailable && isOpen && !isManualOpen) {
            onClose();
        }
    }, [isClient, isAvailable, isOpen, onOpen, onClose, isManualOpen, loading]);

    const shouldRender = isClient && isAvailable !== undefined && isManualOpen !== undefined;
    return { shouldRender };
}