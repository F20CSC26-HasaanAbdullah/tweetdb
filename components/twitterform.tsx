"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Createtweet } from "@/actions/createtweet";

export const formSchema = z.object({
    Tweet: z.string().min(2, {
        message: "Tweet must be at least 2 characters.",
    }),
});

export const TwitterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Tweet: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        Createtweet(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="Tweet"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tweet-Box</FormLabel>
                            <FormControl>
                                <Input
                                    className="border border-black w-[700px]"
                                    placeholder="Enter Tweet"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Tweet</Button>
            </form>
        </Form>
    );
};
