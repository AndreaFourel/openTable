export default function Reviews() {
  return (
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
  )
}
