"use client";
import {useStoreModal} from "@/hooks/use-store-modal";
import {useEffect} from "react";


export default function Page() {
    const isOpen = useStoreModal((state) => state.isOpen);
    const onOpen = useStoreModal((state) => state.onOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-lg">Welcome to the admin dashboard!</p>
      </div>
    </div>
  )
}