"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const params = useParams();
    console.log(params.machine);
    
  return (
    <section>
        <h1>machine </h1>
    </section>
  )
}

export default Page
