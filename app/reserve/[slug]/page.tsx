import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function ReservationPage(){
  return(
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <div>
              <h3 className="font-bold">You are almost done</h3>
              <div className="mt-5 flex">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="" 
                  className='w-32 h-18 rounded'/>
                  <div className="ml-4">
                    <h1 className="text-3xl font-bold">
                      Aiana Restaurant Collective
                    </h1>
                    <div className="flex mt-3">
                      <p className="mr-6">Tues, 22, 2023</p>
                      <p className="mr-6">7:30 PM</p>
                      <p className="mr-6">3 people</p>
                    </div>
                  </div>
              </div>
            </div>
            {/* HEADER */}
            {/* FORM */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input 
                type="text" 
                className='border rounded p-3 w-80 mb-4' 
                placeholder='First name'
              />
              <input 
                type="text" 
                className='border rounded p-3 w-80 mb-4' 
                placeholder='Last name'
              />
              <input 
                type="text" 
                className='border rounded p-3 w-80 mb-4' 
                placeholder='Phone number'
              />
              <input 
                type="text" 
                className='border rounded p-3 w-80 mb-4' 
                placeholder='Email'
              />
              <input 
                type="text" 
                className='border rounded p-3 w-80 mb-4' 
                placeholder='Occasion (optional)'
              />
              <input 
                type="text" 
                className='border rounded p-3 w-80 mb-4' 
                placeholder='Request (optional)'
              />
              <button className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'>
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                By clicking &quot;Complete reservation&quot; you agree to the OpenTable Terms of Use Privacy Policy.
              </p>
            </div>
            {/* FORM */}
          </div>
        </div>
      </main>
    </main>    
  )
}