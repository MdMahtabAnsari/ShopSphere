"use client";
import {Modal} from "@/components/modal";
import {UpdateStoreSchema} from "@workspace/schema/admin/store";
import {UpdateStoreForm} from "@/components/form/store/update-store-form";
import {useUpdateStoreModal} from "@/hooks/store/use-update-store-modal";
import {StoreSchema} from "@workspace/api-response/admin/store";

export function UpdateStoreModal({storeData,setData}: { storeData: UpdateStoreSchema,setData: (data: StoreSchema) => void }) {
    const isOpen = useUpdateStoreModal((state) => state.isOpen);
    const onClose = useUpdateStoreModal((state) => state.onClose);
    return (
        <Modal
            title="Update Store"
            description="Update your store details."
            action={onClose}
            isOpen={isOpen}
        >
            <UpdateStoreForm storeData={storeData} setData={setData} />
        </Modal>
    );
}