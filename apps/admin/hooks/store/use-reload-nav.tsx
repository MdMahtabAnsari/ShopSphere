import {create} from 'zustand';

interface UseReloadNavState {
    reload: boolean;
    setReload: (value: boolean) => void;
}
export const useReloadNav = create<UseReloadNavState>((set) => ({
    reload: false,
    setReload: (value: boolean) => set({reload: value}),
}));