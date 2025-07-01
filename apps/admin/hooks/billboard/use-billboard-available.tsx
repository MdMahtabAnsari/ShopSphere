import {create} from "zustand"

interface UseBillboardAvailableState {
    isAvailable: boolean;
    setIsAvailable: (isAvailable: boolean) => void;
}

export const useBillboardAvailable = create<UseBillboardAvailableState>((set) => ({
    isAvailable: false,
    setIsAvailable: (isAvailable) => set({ isAvailable }),
}));