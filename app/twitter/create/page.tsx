import { Formwrapper } from '@/components/form-wrapper'
import { TwitterForm } from '@/components/twitterform'
import React from 'react'

const TwitterCreatePage = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <Formwrapper title="Twitter">
                <TwitterForm/>
            </Formwrapper>
        </div>
    )
}

export default TwitterCreatePage