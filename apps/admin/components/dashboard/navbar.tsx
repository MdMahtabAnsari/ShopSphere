"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@workspace/ui/components/sheet"
import { Button } from "@workspace/ui/components/button";
import Link from "next/link"
import { JSX, SVGProps } from "react";

import {
    UserButton,
} from '@clerk/nextjs'

import { useStoreModal } from "@/hooks/use-store-modal";

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

import { Check, ChevronsUpDown } from "lucide-react"
import { useState, useEffect, useCallback } from "react";

import { Skeleton } from "@workspace/ui/components/skeleton"
import { getUserAllStores } from "@/lib/api/store/store";
import { StoreSchema } from "@workspace/api-response/admin/store";
import { ErrorFallback } from "@/components/error/error-fallback";
import { useParams, useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from 'react'
import { Settings } from 'lucide-react';

export function Navbar() {
    const onManualOpen = useStoreModal((state) => state.onManualOpen);
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 ">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6">
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Services
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Contact
                        </Link>
                        <Button className="flex w-full items-center py-2 px-0 text-lg font-semibold cursor-pointer justify-start" variant="ghost" onClick={onManualOpen}>Add Store</Button>
                        <div className="flex w-full items-center py-2 text-lg font-semibold">
                            <UserButton />
                        </div>

                    </div>
                </SheetContent>
            </Sheet>
            <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto hidden lg:flex gap-6">
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Services
                </Link>
                <Link
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Contact
                </Link>
                <Button className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 cursor-pointer" variant="ghost" onClick={onManualOpen}>Add Store</Button>
                <UserButton />
            </nav>
        </header>
    )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


export function StoreNavbar() {

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 ">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6">
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <Suspense fallback={<MainStoreNavSkeleton />}>
                                <MainStoreNav />
                            </Suspense>
                        </ErrorBoundary>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            <Settings />Store Setting
                        </Link>
                        <div className="flex w-full items-center py-2 text-lg font-semibold">
                        <UserButton />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="ml-auto hidden lg:flex gap-6">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<MainStoreNavSkeleton />}>
                        <MainStoreNav />
                    </Suspense>
                </ErrorBoundary>
                <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                    <Settings />
                </Link>
                <UserButton />
            </nav>
        </header>
    )

}



export function MainStoreNav() {
    const [open, setOpen] = useState<boolean>(false);
    const [storesData, setStoresData] = useState<StoreSchema[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [value, setValue] = useState<string>("");
    const params = useParams();
    const router = useRouter();

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
        }
        setLoading(false);
    }, []);
    useEffect(() => {
        if (value) {
            fetchAllStores();
        }
    }, [fetchAllStores, value]);

    if (loading) return <MainStoreNavSkeleton />;
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

export function MainStoreNavSkeleton() {
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