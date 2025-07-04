"use client";

import { Sheet, SheetTrigger, SheetContent } from "@workspace/ui/components/sheet"
import { Button } from "@workspace/ui/components/button";
import Link from "next/link"
import {useState, useEffect} from "react";

import {
    UserButton,
} from '@clerk/nextjs'
import {Mountain,Menu,Store } from "lucide-react"

import { ErrorFallback } from "@/components/error/error-fallback";
import { useParams} from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from 'react'
import {Presentation } from 'lucide-react';
import { StoreMenu, StoreMenuSkeleton } from "@/components/navbar/store-navbar";
import {TooltipWrapper} from "@/components/tooltip-wrapper";


export function StoreSettingNavbar() {
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
                            <Suspense fallback={<StoreMenu />}>
                                <StoreMenu />
                            </Suspense>
                        </ErrorBoundary>
                        <Link href={`/dashboard/${storeId}`} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            <Store/>Store
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
                <TooltipWrapper text="Store">
                <Link href={`/dashboard/${storeId}`} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                <Store/>
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



