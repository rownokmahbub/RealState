import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='container mx-auto mt-5 flex flex-col md:flex-row md:justify-between '>
        <Link href='/' className='flex  items-center'>
            <p className='text-3xl font-medium'>R</p> <span className='text-3xl font-medium text-blue-500'>E</span></Link>
            <div className="flex gap-4 items-center flex-col md:flex-row">
                <Link href='#' className='text-lg hover:text-blue-500 font-medium '>
                Home
                </Link>
                <Link href='#' className='text-lg hover:text-blue-500 font-medium '>
                Property
                </Link>
                <Link href='#' className='text-lg hover:text-blue-500 font-medium '>
                Blog
                </Link>
                <Link href='#' className='text-lg hover:text-blue-500 font-medium '>
                Contact
                </Link>
                <Link href='#' className='text-lg hover:text-blue-500 font-medium '>
                About Us
                </Link>
                <Link href='#' className='  font-medium btn bg-blue-500 rounded-full border-none'>
                Sign In
                </Link>   <Link href='#' className='text-base font-medium btn btn-outline border-blue-500 rounded-full text-blue-500'>
                Add Listing
                </Link>
                
            </div>

    </div>
  )
}

export default Nav