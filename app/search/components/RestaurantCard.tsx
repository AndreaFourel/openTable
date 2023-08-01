import Link from "next/link";

export default function RestaurantCard(){
  return(
    <div className="border-b flex pb-5">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="" 
          className='w-44 rounded' 
        />
        <div className='pl-5'>
          <h2 className='text-3xl'>Aiana Restaurant Collective</h2>
          <div className="flex items-start">
            <div className='flex mb-2'>*****</div>
            <p className='ml-2 text-sm'>Awesome</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4">$$$</p>
              <p className="mr-4">Mexican</p>
              <p className="mr-4">Ottawa</p>
            </div>
          </div>
          <div className='text-red-600'>
            <Link href='/restaurant/restaurantName'>View more informations</Link>
          </div>
        </div>
    </div>
  )
}