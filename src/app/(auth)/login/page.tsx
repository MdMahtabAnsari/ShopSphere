"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { loginSchema, LoginSchemaType } from "@/schema/auth.schema"
import Link from "next/link"
import { LoaderCircle } from 'lucide-react';
import { useRouter } from "next/navigation"
import { toast } from "sonner"


export default function Page() {
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: undefined,
            password: undefined,
        },
        mode: "onChange"
    })
    const router = useRouter();
    const onSubmit = async (data: LoginSchemaType) => {
        try {
            const response = await signIn("credentials", {
                ...data,
                redirect: false,
            });
            if (response?.error) {
                toast.error(`Login failed: ${response.error}`);
            } else {
                toast.success("Login successful");
                router.push("/dashboard");
            }
        } catch (error) {
            toast.error(`Error logging in: ${error}`);
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full cursor-pointer" disabled={!form.formState.isValid || form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? <LoaderCircle className="animate-spin" /> : "Login"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}