import {create} from 'zustand';

interface UseUpdateStoreModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useUpdateStoreModal = create<UseUpdateStoreModalState>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

