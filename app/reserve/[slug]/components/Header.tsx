export default function Header() {
  return (
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
  )
}
