"use client";
import { CreateBillboardSchema, createBillboardSchema } from "@workspace/schema/admin/billboard";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";
import { createBillboard } from "@/lib/api/billboard/billboard";
import { useBillboardModal } from "@/hooks/billboard/use-billboard-modal";
import { useBillboardAvailable } from "@/hooks/billboard/use-billboard-available";
import { CardContent, Card } from "@workspace/ui/components/card";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'


export const BillboardForm = ({ storeId }: { storeId: string }) => {
    const onClose = useBillboardModal((state) => state.onClose);
    const setIsAvailable = useBillboardAvailable((state) => state.setIsAvailable);
    const [mediaUrl, setMediaUrl] = useState<string | null>(null);

    const form = useForm<CreateBillboardSchema>({
        resolver: zodResolver(createBillboardSchema),
        defaultValues: {
            storeId: storeId,
            label: '',
            description: '',
            media: undefined
        },
        mode: 'onChange'
    });
    const media = form.watch('media');

    useEffect(() => {
        if (media) {
            const url = URL.createObjectURL(media);
            setMediaUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        else {
            setMediaUrl(null);
        }

    }, [media])



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
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Billboard Label" {...field} disabled={form.formState.isSubmitting} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Billboard Description" {...field} disabled={form.formState.isSubmitting} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {mediaUrl && (
                        <Card>
                            <CardContent className="flex justify-center items-center">
                                {
                                    media?.type?.startsWith('image/') ? (
                                        <Image
                                            src={mediaUrl}
                                            alt="Billboard Media"
                                            className="object-cover rounded-lg"
                                        />) : (
                                        <ReactPlayer
                                            src={mediaUrl}
                                            style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
                                            controls={true}
                                        />

                                    )
                                }
                            </CardContent>
                        </Card>
                    )
                    }
                    <FormField
                        control={form.control}
                        name="media"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Media</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*,video/*"
                                        placeholder="Upload Media"
                                        onChange={e => {
                                            const file = e.target.files?.[0];
                                            field.onChange(file);
                                        }}
                                        disabled={form.formState.isSubmitting}
                                        className="cursor-pointer"
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