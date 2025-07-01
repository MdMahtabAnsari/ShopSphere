"use client";

import { Sheet, SheetTrigger, SheetContent } from "@workspace/ui/components/sheet"
import { Button } from "@workspace/ui/components/button";
import Link from "next/link"
import {useState, useEffect, useCallback} from "react";

import {
    UserButton,
} from '@clerk/nextjs'


import { cn } from "@workspace/ui/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@workspace/ui/components/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@workspace/ui/components/popover"

import { Check, ChevronsUpDown,Mountain,Menu } from "lucide-react"

import { Skeleton } from "@workspace/ui/components/skeleton"
import { getUserAllStores } from "@/lib/api/store/store";
import { StoreSchema } from "@workspace/api-response/admin/store";
import { ErrorFallback } from "@/components/error/error-fallback";
import { useParams, useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from 'react'
import { Settings,Presentation } from 'lucide-react';
import {useReloadNav} from "@/hooks/store/use-reload-nav";
import {TooltipWrapper} from "@/components/tooltip-wrapper";




export function StoreNavbar() {
    const params = useParams();
    const [storeId, setStoreId] = useState<string | null>(null);
    useEffect(() => {
        if( params.storeId) {
            setStoreId(params.storeId as string);
        }
    }, [params?.storeId]);

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 ">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                        <Mountain className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6">
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <Suspense fallback={<StoreMenuSkeleton />}>
                                <StoreMenu />
                            </Suspense>
                        </ErrorBoundary>
                        <Link href={`/dashboard/${storeId}/settings`} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            <Settings />Store Setting
                        </Link>
                        <Link href={`/dashboard/${storeId}/billboards`} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            <Presentation />Billboards
                        </Link>
                        <div className="flex w-full items-center py-2 text-lg font-semibold">
                            <UserButton />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                <Mountain className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto hidden lg:flex gap-6">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<StoreMenuSkeleton />}>
                        <StoreMenu />
                    </Suspense>
                </ErrorBoundary>
                <TooltipWrapper text="Store Settings">
                <Link href={`/dashboard/${storeId}/settings`} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                    <Settings />
                </Link>
                </TooltipWrapper>
                <TooltipWrapper text="Billboards">
                <Link href={`/dashboard/${storeId}/billboards`} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                    <Presentation />
                </Link>
                </TooltipWrapper>
                <UserButton />

            </nav>
        </header>
    )

}



export function StoreMenu() {
    const [open, setOpen] = useState<boolean>(false);
    const [storesData, setStoresData] = useState<StoreSchema[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [value, setValue] = useState<string>("");
    const params = useParams();
    const router = useRouter();
    const reload = useReloadNav((state) => state.reload);
    const setReload = useReloadNav((state) => state.setReload);

    useEffect(() => {
        if (params.storeId) {
            setValue(params.storeId as string);
        }
    }, [params?.storeId]);

    const fetchAllStores = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUserAllStores();
            if (response.status === "success") {
                setStoresData(response.data);
            }
            else {
                throw new Error(response.message || "Failed to fetch stores");
            }

        } catch (err) {
            setError(err as Error);
        }finally {
            setReload(false);
            setLoading(false);
        }

    }, [setReload]);
    useEffect(() => {
        if (value) {
            fetchAllStores();
        }
    }, [fetchAllStores, value]);

    useEffect(() => {
        if( reload) {
            fetchAllStores();
        }
    }, [reload]);

    if (loading) return <StoreMenuSkeleton />;
    if (error) return <ErrorFallback error={error} resetErrorBoundary={() => fetchAllStores()} />;
    if (!storesData) return null;
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? storesData.find((store) => store.id === value)?.name
                        : "Select stores..."
                    }
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search stores..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No stores found.</CommandEmpty>
                        <CommandGroup>
                            {storesData.map((store) => (
                                <CommandItem
                                    key={store.id}
                                    value={store.name} // <-- use store.name for search
                                    onSelect={(currentValue) => {
                                        // Find the store by name to get its id
                                        const selectedStore = storesData.find(s => s.name === currentValue);
                                        if (selectedStore) {
                                            setValue(selectedStore.id);
                                            setOpen(false);
                                            router.push(`/dashboard/${selectedStore.id}`);
                                        }
                                    }}
                                >
                                    {store.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === store.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )

}

export function StoreMenuSkeleton() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-[200px] justify-between">
                    <Skeleton className="h-4 w-32" />
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CommandItem key={index}>
                                    <Skeleton className="h-4 w-full" />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}