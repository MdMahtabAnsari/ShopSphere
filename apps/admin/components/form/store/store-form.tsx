
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@workspace/ui/components/input";
import {Button} from "@workspace/ui/components/button";
import {createStoreSchema,CreateStoreSchema} from "@workspace/schema/admin/store";
import {Loader} from "lucide-react";
import {Form,FormField,FormItem,FormLabel,FormControl,FormMessage} from "@workspace/ui/components/form";
import {useStoreModal} from "@/hooks/store/use-store-modal";
import {createStore} from "@/lib/api/store/store";
import {toast} from "sonner";
import { useStoreAvailable } from "@/hooks/store/use-store-available";

export const StoreForm = ()=> {
    const onClose = useStoreModal((state) => state.onClose);
    const setIsAvailable = useStoreAvailable((state) => state.setIsAvailable);
    const form = useForm<CreateStoreSchema>({
        resolver: zodResolver(createStoreSchema),
        defaultValues: {
            name: ''
        },
        mode:'onChange'
    });

    const onSubmit = async (data: CreateStoreSchema) => {
        const response = await createStore(data);
        if (response.status === 'success') {
            setIsAvailable(true);
            onClose();
            toast.success(response.message);
        } else {
            // Handle error case, e.g., show a toast notification
            console.error("Failed to create store:", response.message);
            toast.error(response.message || "Failed to create store");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                >
                    Cancel
                </Button>
                {/* submit button */}
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
}