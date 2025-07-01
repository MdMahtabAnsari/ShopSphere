import {create} from "zustand";

interface DeleteStoreDialogState {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export const useDeleteStoreDialog = create<DeleteStoreDialogState>((set) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true}),
}));