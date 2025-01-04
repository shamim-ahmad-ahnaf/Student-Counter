import React from 'react'

export default function Navbar({data}) {
  return (
    <div className='flex items-center justify-between w-full px-4 py-2 mt-32 mb-5'>
        <h2 className='px-3 py-2 rounded'>Orange</h2>
        <div className='flex gap-2 p-2 font-bold text-white bg-orange-600 rounded'>
            <h3>Favourites</h3>
            <h3>{data.filter(item => item.added) .length}</h3>
        </div>

    </div>
  )
};
