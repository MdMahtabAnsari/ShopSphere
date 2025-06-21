import {create} from 'zustand';

interface UserStoreModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useStoreModal = create<UserStoreModalState>(
    (set) => ({
        isOpen: true,
        onOpen: () => set({isOpen: true}),
        onClose: () => set({isOpen: false}),
    })
)