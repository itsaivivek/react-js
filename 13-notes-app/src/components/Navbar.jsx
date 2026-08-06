import React from 'react'
import { Search, Menu, User, NotebookPen } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-between px-10 py-6 items-center border-b border-neutral-200'>
            <div className="logo flex items-center text-xl font-bold gap-1">
                <NotebookPen />
                <h1>My Notes</h1>
            </div>
            <div className="nav2 flex gap-10 max-[600px]:gap-4">
                <div className='flex items-center opacity-70 gap-1 bg-gray-200 max-[650px]:bg-white max-[400px]:hidden rounded-2xl px-4 py-1'>
                    <Search size={20} color='#6a6a6a' />
                    <input className='max-[650px]:hidden outline-none text-sm' type="search" name="" id="" placeholder='Search Notes' />
                </div>
                <div className='flex items-center text-sm font-medium gap-1 text-neutral-700'>
                    <h2>Vivek Bhatt</h2>
                    <User className='bg-purple-500 text-white p-0.5 rounded-full'/>
                </div>
                <div>
                <Menu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
