import React from 'react'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div className='flex h-[98vh] gap-4 mt-20'>
      <div className=' w-1/6 border rounded-xl p-4 border-gray-400 '>
        <Sidebar />
      </div>
      <div className=' w-5/6 border rounded-xl p-4 border-gray-400'>hello2</div>
    </div>
  )
}

export default Home