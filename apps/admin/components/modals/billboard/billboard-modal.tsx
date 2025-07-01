"use client";
import {Modal} from "@/components/modal";
import {useBillboardModal} from "@/hooks/billboard/use-billboard-modal";
import {BillboardForm} from "@/components/form/billboard/billboard-form";

export function BillboardModal({storeId}: { storeId: string }) {
    const isOpen = useBillboardModal((state) => state.isOpen);
    const onClose = useBillboardModal((state) => state.onClose);

    return (
        <Modal
            title="Create Billboard"
            description="Create a new billboard to showcase your products."
            action={onClose}
            isOpen={isOpen}
        >
            <BillboardForm storeId={storeId} />
        </Modal>
    );
}