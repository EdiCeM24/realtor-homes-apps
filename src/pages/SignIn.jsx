import { useState } from 'react';


export default function SignIn() {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(e) {
    // console.log(e.target.value);
    setFormdata((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, 
    }))
  }

  return (
    <section>
        <h1 className="text-3xl text-center text-rose-300 mt-6 font-bold">Sign In</h1>
        
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
          <div className='w-full md:w-[67%] lg:w-[40%] mb-12 md:mb-6'>
            <img src='https://media.istockphoto.com/id/882354884/photo/locking-door-with-a-key.jpg?s=1024x1024&w=is&k=20&c=wbzPywhw-6E61A4KM_MwPlyQocgVospvZUQZP4trMdc=' alt='Key' className='w-full rounded-2xl'/>
          </div>

          <div className='w-ful md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form>
              <input type='email' id='email' value={email} onChange={onChange} placeholder='Enter email' className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>

              <input type='password' id='password' value={password} onChange={onChange} placeholder='Enter password' className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>
            </form>
          </div>
        </div>
    </section>
  )
}
