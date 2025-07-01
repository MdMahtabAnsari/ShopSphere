import {ConfirmDialog} from "@/components/dialog"
import {deleteStore} from "@/lib/api/store/store";
import {useRouter} from "next/navigation";
import {useCallback, useState} from "react";
import {ErrorFallback} from "@/components/error/error-fallback";
import {Button} from "@workspace/ui/components/button";
import {AlertDialogAction} from "@workspace/ui/components/alert-dialog";
import {useDeleteStoreDialog} from "@/hooks/store/use-delete-store-dialog";
import {Loader} from "lucide-react";


export function StoreDeleteConformationDialog({storeId}: { storeId: string }) {
    const [error, setError] = useState<Error | null>(null);
    const router = useRouter();
    const isOpen = useDeleteStoreDialog((state) => state.isOpen);
    const onClose = useDeleteStoreDialog((state) => state.onClose);
    const onOpen = useDeleteStoreDialog((state) => state.onOpen);
    const [loading, setLoading] = useState<boolean>(false);
    const handleDeleteStore = useCallback(async () => {
        setLoading(true);
        try {
            const response = await deleteStore(storeId);
            if (response.status === 'success') {
                onClose();
                router.push('/dashboard');
            } else {
                throw new Error(response.message || "Failed to delete store");
            }
        } catch (error) {
            console.error("Error deleting store:", error);
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }, [storeId, router, onClose]);

    if (error) {
        return <ErrorFallback error={error} resetErrorBoundary={handleDeleteStore}/>;
    }
    return (
        <ConfirmDialog
            trigger={<Button variant="destructive" className="cursor-pointer" onClick={onOpen}>delete store</Button>}
            title="Delete Store"
            description="Are you sure you want to delete this store? This action cannot be undone."
            onConfirm={handleDeleteStore}
            data={storeId}
            renderConfirmButton={
                (defaultProps) => (
                        <Button variant="destructive" className="cursor-pointer" {...defaultProps} disabled={loading}>
                            {defaultProps.children}{loading && <Loader className="animate-spin ml-2"/>}
                        </Button>

                )
            }
            isOpen={isOpen}
            action={onClose}
        />
    );


}