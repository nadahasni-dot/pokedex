import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className='flex items-center justify-center min-h-96'><Image className='animate-spin' src="/icons/pokeball.svg" alt="loading icon" width={40} height={40} /></div>
    )
}
