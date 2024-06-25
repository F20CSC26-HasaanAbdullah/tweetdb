import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Twitterpage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen '>
            <div className='text-5xl  font-semibold'>
                Welcome To Twitter </div>
            <Button asChild>
                <Link href={"/twitter/create"}>
                    Enter
                </Link>

            </Button>
        </div>
    )
}

export default Twitterpage