
'use client'

import React from 'react'
import * as z from "zod"
import { useForm } from "react-hook-form"
import Link from 'next/link'

import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import { singInSchema } from '@/schemas/singInSchema'

// Import zodResolver correctly from @hookform/resolvers/zod
import { zodResolver } from '@hookform/resolvers/zod'

// Correct way to infer the form data type from your Zod schema
type SignInFormData = z.infer<typeof singInSchema>

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

function Page() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const { toast } = useToast()
    const router = useRouter()

    // zod validation
    const form = useForm<SignInFormData>({
        resolver: zodResolver(singInSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const onSubmit = async (data: SignInFormData) => {
        setIsSubmitting(true)
        const result = await signIn('credentials', { username: data.username, password: data.password, redirect: false })

        if (result?.error) {
            toast({
                title: 'Login failed',
                description: result.error,
                variant: 'destructive'
            })
            setIsSubmitting(false)
        }

        if (result?.url) {
            toast({
                title: 'Login successful',
                description: "You are logged in",
                variant: 'default'
            })
            router.replace("/dashboard")
        }
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">Join Mistry</h1>
                <p className="text-gray-600 text-lg">Sign In to start your journey</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {/* Username Field */}
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-medium text-gray-700">Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="username"
                                        {...field}
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </FormControl>
                                <FormDescription className="text-sm text-gray-500">
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password Field */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-medium text-gray-700">Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...field}
                                        className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </FormControl>
                                <FormDescription className="text-sm text-gray-500">
                                    Enter your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Sign In
                    </Button>
                </form>
            </Form>

            {/* GitHub Sign-In Button */}
            <div className="mt-4">
                <Button
                    onClick={() => signIn('github', { redirect: false })}
                    className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    Sign in with GitHub
                </Button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                    Don&apos;t have an account?{' '}
                    <Link href="/sign-up" className="text-indigo-600 hover:text-indigo-800">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Page
