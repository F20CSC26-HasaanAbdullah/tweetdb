"use server";



import { formSchema } from "@/components/twitterform";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const Createtweet = async (values: z.infer<typeof formSchema>) => {
    console.log(values);


    const Tweet = await prisma.tweet.create({
        data: {
            Tweet: values.Tweet
        }
    })
    console.log(Tweet)
}