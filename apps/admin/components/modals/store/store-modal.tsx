"use client";
import {Modal} from "@/components/modal";
import {useStoreModal} from "@/hooks/store/use-store-modal";
import {StoreForm} from "@/components/form/store/store-form";
export const StoreModal = () => {
    const isOpen = useStoreModal((state) => state.isOpen);
    const onClose = useStoreModal((state) => state.onClose);

  return (
    <Modal
      title="Create Store"
      description="Create a new store to manage your products and categories."
      action={onClose}
      isOpen={isOpen}
    >
        <StoreForm />
    </Modal>
  );
}