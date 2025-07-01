
import {CreateBillboardSchema, createBillboardSchema} from "@workspace/schema/admin/billboard";
import {toast} from "sonner";
import {ImageUp, Loader} from "lucide-react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@workspace/ui/components/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Textarea} from "@workspace/ui/components/textarea";
import {Button} from "@workspace/ui/components/button";
import {createBillboard} from "@/lib/api/billboard/billboard";
import {useBillboardModal} from "@/hooks/billboard/use-billboard-modal";
import {useBillboardAvailable} from "@/hooks/billboard/use-billboard-available";
import {CldUploadWidget,CldImage} from 'next-cloudinary';
import {CardContent,Card} from "@workspace/ui/components/card";

export const BillboardForm = ({storeId}: { storeId: string }) => {
    const onClose = useBillboardModal((state) => state.onClose);
    const setIsAvailable = useBillboardAvailable((state) => state.setIsAvailable);
    const form = useForm<CreateBillboardSchema>({
        resolver: zodResolver(createBillboardSchema),
        defaultValues: {
            storeId: storeId,
            label: '',
            description: '',
            imageUrl: ''
        },
        mode: 'onChange'
    });

    const imageUrl = form.watch('imageUrl');

    const onSubmit = async (data: CreateBillboardSchema) => {
        const response = await createBillboard(data);
        if (response.status === 'success') {
            setIsAvailable(true);
            onClose();
            toast.success(response.message);
        } else {
            console.error("Failed to create billboard:", response.message);
            toast.error(response.message || "Failed to create billboard");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="label"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Label</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Billboard Label" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Billboard Description" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {
                    imageUrl && (
                        <Card>
                            <CardContent className="flex justify-center items-center">
                                <CldImage
                                    src={imageUrl}
                                    alt="Billboard Image"
                                    width={500}
                                    height={300}
                                    className="rounded-lg"
                                />
                            </CardContent>
                        </Card>
                    )
                }
                <CldUploadWidget
                    signatureEndpoint={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/cloudinary/signature`}
                    uploadPreset="ShopSphere"
                    options={{
                        maxFiles: 1,
                        cropping: true,
                        multiple: false,
                        sources: ['local', 'url', "camera", "unsplash", "dropbox", "google_drive"],
                    }}
                    onSuccess={(result) => {
                        if (result?.info && typeof result.info !== "string" && "secure_url" in result.info) {
                            const secureUrl = result.info.secure_url;
                            form.setValue('imageUrl', secureUrl);
                            toast.success("Image uploaded successfully");
                        }
                    }}
                    onError={(error) => {
                        console.error("Image upload failed:", error);
                        toast.error("Failed to upload image");
                    }}

                >
                    {({open}) => (
                        <Button type="button" onClick={() => open()} className="w-full cursor-pointer"
                                disabled={form.formState.isSubmitting}>
                            <ImageUp/>
                        </Button>
                    )}
                </CldUploadWidget>
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