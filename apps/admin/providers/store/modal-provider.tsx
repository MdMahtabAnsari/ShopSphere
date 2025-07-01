"use client";
import { useState, useEffect, useCallback } from "react";
import { StoreModal } from "@/components/modals/store/store-modal";
import { isUserHaveStore } from "@/lib/api/store/store";
import { useStoreModal } from "@/hooks/store/use-store-modal";
import { useStoreAvailable } from "@/hooks/store/use-store-available";
import {useModalControl} from "@/providers/use-modal-control";

export const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false);
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);
  const onClose = useStoreModal((state) => state.onClose);
  const setIsAvailable = useStoreAvailable((state) => state.setIsAvailable);
  const isAvailable = useStoreAvailable((state) => state.isAvailable);
  const isManualOpen = useStoreModal((state) => state.isManualOpen);
  const [loading, setLoading] = useState(false);
  const { shouldRender } = useModalControl({isClient, isAvailable, isOpen, isManualOpen, loading, onOpen, onClose,});
  // Only run effects on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if user has a store on mount
  const checkUserStore = useCallback(async () => {
    setLoading(true);
    const response = await isUserHaveStore();
    if (response.status === "success") {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
    setLoading(false);
  }, [setIsAvailable]);

  useEffect(() => {
    if (isClient) {
      checkUserStore();
    }
  }, [checkUserStore, isClient]);

    if (!shouldRender) {
        return null;
    }

  return <StoreModal />;
};