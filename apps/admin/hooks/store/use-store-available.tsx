import {create} from "zustand"

interface UseStoreAvailableState {
    isAvailable: boolean;
    setIsAvailable: (isAvailable: boolean) => void;
}

export const useStoreAvailable = create<UseStoreAvailableState>((set) => ({
    isAvailable: false,
    setIsAvailable: (isAvailable) => set({ isAvailable }),
}));