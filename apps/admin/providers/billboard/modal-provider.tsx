"use client";
import { useState, useEffect, useCallback } from "react";
import {BillboardModal} from "@/components/modals/billboard/billboard-modal";
import {isStoreHaveBillboard} from "@/lib/api/billboard/billboard";
import {useBillboardModal} from "@/hooks/billboard/use-billboard-modal";
import {useBillboardAvailable} from "@/hooks/billboard/use-billboard-available";
import {useModalControl} from "@/providers/use-modal-control";

export const ModalProvider = ({storeId}:{storeId:string}) => {
    const [isClient, setIsClient] = useState(false);
    const isOpen = useBillboardModal((state) => state.isOpen);
    const onOpen = useBillboardModal((state) => state.onOpen);
    const onClose = useBillboardModal((state) => state.onClose);
    const setIsAvailable = useBillboardAvailable((state) => state.setIsAvailable);
    const isAvailable = useBillboardAvailable((state) => state.isAvailable);
    const isManualOpen = useBillboardModal((state) => state.isManualOpen);
    const [loading, setLoading] = useState(false);
    const { shouldRender } = useModalControl({isClient, isAvailable, isOpen, isManualOpen, loading, onOpen, onClose,});

    // Only run effects on client
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Check if user has a store on mount
    const checkStoreBillboard = useCallback(async () => {
        setLoading(true);
        const response = await isStoreHaveBillboard(storeId);
        if (response.status === "success") {
            setIsAvailable(true);
        } else {
            setIsAvailable(false);
        }
        setLoading(false);
    }, [setIsAvailable, storeId]);

    useEffect(() => {
        if (isClient) {
            checkStoreBillboard();
        }
    }, [checkStoreBillboard, isClient]);

    if(!shouldRender) {
        return null;
    }

    return <BillboardModal storeId={storeId} />;
};