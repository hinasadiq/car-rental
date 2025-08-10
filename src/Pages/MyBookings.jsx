import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../assets/assets'
import Title from '../Components/Title'

const MyBookings = () => {

  const[bookings,setBookings] = useState([])
 
 
  const fetchMyBookings = async ()=>{
    setBookings(dummyMyBookingsData)

    }
    useEffect(()=>{
      fetchMyBookings()
    },[])
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>
      <Title title='My Bookings'subTitle='View and manage all car booking'align='left'/>
     <div>
      {bookings.map((bookings,index)=>(
        <div key={bookings._id}className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12'>
           {/* car Image + Info */}

           <div className='md:col-span-1'>
           <div className='rounded-md overflow-hidden mb-3'>
            <img src={bookings.car.image}alt=""className='w-full h-auto aspect-video object-cover'></img>
           </div>
           <p className='text-lg font-medium mt-2'>{bookings.car.brand}{bookings.car.model}</p>
           <p className='text-gray-500'>{bookings.car.year}.{bookings.car.category}.{bookings.car.locaion}</p>
           </div>

           {/* Booking info */}
           <div className='md:col-span-2'>
            <div className='flex items-center gap-2'>
              <p className='px-3 py-1.5 bg-light rounded'>Booking #{index+1}</p>
              <p className={`px-3 py-1 text-xs rounded-full ${bookings.status ===`confirmed` ?'bg-green-400/15 text-green-600': 'bg-red-400/15 text-red-400/15 text-red-600'}`}>{bookings.status}</p>
           </div>
           </div>
           </div>
      ))}
     </div>
    </div>
  )
}

export default MyBookings;