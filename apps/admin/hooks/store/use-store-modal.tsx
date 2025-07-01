import {create} from 'zustand';

interface UserStoreModalState {
    isOpen: boolean;
    isManualOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onManualOpen: () => void;
    onManualClose: () => void;
}

export const useStoreModal = create<UserStoreModalState>(
    (set) => ({
        isOpen: true,
        isManualOpen: false,
        onOpen: () => set({isOpen: true}),
        onClose: () => set({isOpen: false}),
        onManualOpen: () => set({isManualOpen: true,isOpen:true}),
        onManualClose: () => set({isManualOpen: false,isOpen:false}),
    })
)