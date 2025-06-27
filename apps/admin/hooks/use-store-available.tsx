import {create} from "zustand"

interface StoreAvailableState {
    isAvailable: boolean;
    setIsAvailable: (isAvailable: boolean) => void;
}

export const useStoreAvailable = create<StoreAvailableState>((set) => ({
    isAvailable: false,
    setIsAvailable: (isAvailable) => set({ isAvailable }),
}));