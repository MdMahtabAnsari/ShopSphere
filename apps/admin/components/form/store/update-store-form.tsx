import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@workspace/ui/components/input";
import {Button} from "@workspace/ui/components/button";
import {UpdateStoreSchema,updateStoreSchema} from "@workspace/schema/admin/store";
import {Loader} from "lucide-react";
import {Form,FormField,FormItem,FormLabel,FormControl,FormMessage} from "@workspace/ui/components/form";
import {useUpdateStoreModal} from "@/hooks/store/use-update-store-modal";
import {toast} from "sonner";
import {updateStore} from "@/lib/api/store/store";
import {useReloadNav} from "@/hooks/store/use-reload-nav";
import {StoreSchema} from "@workspace/api-response/admin/store";

export const UpdateStoreForm = ({storeData,setData}:{storeData:UpdateStoreSchema,setData: (data: StoreSchema) => void}) => {
    const {id,name} = storeData;
    const onClose = useUpdateStoreModal((state) => state.onClose);
    const setReload = useReloadNav((state) => state.setReload);

    const form = useForm<UpdateStoreSchema>({
        resolver: zodResolver(updateStoreSchema),
        defaultValues: {
            name: name || "",
            id: id || "",
        },
        mode: "onChange",
    });

    const onSubmit = async (data: UpdateStoreSchema) => {
        try {
            const response = await updateStore(data);
            if (response.status === "success") {
                toast.success("Store updated successfully");
                setData(response.data);
                setReload(true);
                onClose();
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error("Failed to update store");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Name"
                                    disabled={form.formState.isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end items-center gap-2">
                    {/*    cancel button*/}
                    <Button
                        type="button"
                        variant="outline"
                        disabled={form.formState.isSubmitting}
                        size="lg"
                        className="cursor-pointer"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    {/* update button */}
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting || !form.formState.isValid}
                        size="lg"
                        className="cursor-pointer"
                    >
                        {form.formState.isSubmitting ? <Loader className="animate-spin" /> : 'Continue'}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

