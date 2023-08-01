import Link from "next/link";

export default function RestaurantDetails(){
  return(
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* NAVBAR */}
        <nav className='bg-white p-2 flex justify-between'>
          <Link href="/" className='font-bold text-gray-700 text-2xl'>
            OpenTable
          </Link>
          <div>
            <div className='flex'>
              <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>Sign In</button>
              <button className='border p-1 px-4 rounded'>Sign Up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        {/* HEADER */}
        <div className='h-96 overflow-hidden'>
          <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
            <h1 className='text-7xl text-white capitalize text-shadow text-center'>
              Millestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            {/* RESTAURANT NAVBAR */}
            <nav className='flex text-reg border-b pb-2'>
              <Link href="/restaurant/restaurantName" className='mr-7'>Overview</Link>
              <Link href="/restaurant/restaurantName/menu" className='mr-7'>Menu</Link>
            </nav>
            {/* RESTAURANT NAVBAR */}
            {/* TITLE */}
            <div className='mt-4 border-b pb-6'>
              <h1 className='font-bold text-6xl'>Millestones Grill</h1>
            </div>
            {/* TITLE */}
            {/* RATING */}
            <div className='flex items-end'>
              <div className='ratings mt-2 flex items-center'>
                <p>*****</p>
                <p className='text-reg ml-3'>4.9</p>
              </div>
              <div>
                <p className='text-reg ml-4'>600 Reviews</p>
              </div>
            </div>
            {/* RATING */}
            {/* DESCRIPTION */}
            <div className='mt-4'>
              <p className='text-lg font-light'>
              Apprendre un petit peu chaque jour est une méthode efficace. 
              Des études ont montré que les participants qui ont établi une routine apprentissage sont plus 
              susceptibles atteindre leurs objectifs. Programmez-vous du temps pour apprendre et recevez des 
              rappels grâce à votre planificateur apprentissage.
              </p>
            </div>
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <div>
              <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
                5 photos
              </h1>
              <div className='flex flex-wrap'>
                <img className='w-56 h-44 mr-1 mb-1' src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <img className='w-56 h-44 mr-1 mb-1' src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                <img className='w-56 h-44 mr-1 mb-1' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <img className='w-56 h-44 mr-1 mb-1' src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <img className='w-56 h-44 mr-1 mb-1' src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
            </div>
            {/* IMAGES */}
            {/* REVIEWS */}
            <div>
              <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className='flex'>
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">MJ</h2>
                      </div>
                      <p className='text-center'>Michael Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">
                          *****
                        </div>
                      </div>
                      <div className="mt-5">
                        <p className='text-lg font-light'>
                        The course is excellent. I wanted to learn more about using TypeScript in React and 
                        Next.js. My expectations were met to a large extent. However, I wanted to use 
                        typescript-eslint/ESLINT which the instructor did not want to do. My feeling is you are 
                        wasting your time if you use TypeScript and not use eslint; therefore, I am using it and 
                        am learning a lot more!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          {/* RESERVATION CARD PORTION */}
          <div className='w-[27%] relative text-reg'>
            <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
              <div className='text-center border-b pb-2 font-blod'>
                <h4 className='text-lg mr-7'>
                  Make a Reservation
                </h4>
              </div>
              <div className='my-3 flex flex-col'>
                <label htmlFor="">Party siza</label>
                <select name="" className='py-3 border-b font-light' id="">
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className='flex flex-col w-[48%]'>
                  <label htmlFor="">
                    Date
                  </label>
                  <input type="text" className='py-3 border-b font-light w-28' />
                </div>
                <div className='flex flex-col w-[48%]'>
                  <label htmlFor="">
                    Time
                  </label>
                  <select name="" id="" className='py-3 border-b font-light'>
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>
              <div className='mt-5'>
                <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>Find a Time</button>
              </div>
            </div> 
          </div>
          {/* RESERVATION CARD PORTION */}
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  )
}