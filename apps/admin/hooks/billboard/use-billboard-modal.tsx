import {create} from "zustand"

interface UseBillboardModalState {
    isOpen: boolean;
    isManualOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onManualOpen: () => void;
    onManualClose: () => void;
}

export const useBillboardModal = create<UseBillboardModalState>(
    (set) => ({
        isOpen: true,
        isManualOpen: false,
        onOpen: () => set({isOpen: true}),
        onClose: () => set({isOpen: false}),
        onManualOpen: () => set({isManualOpen: true,isOpen:true}),
        onManualClose: () => set({isManualOpen: false,isOpen:false}),
    })
)