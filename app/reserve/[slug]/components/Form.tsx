export default function Form() {
  return (
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
  )
}
