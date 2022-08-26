import react from "react";
import Image from "next/image"
function Login() {
  return (
    <div className="grid place-items-center">

<Image 
src="https://links.papareact.com/t4i"
height={400}
width={400}
objectFit="contain"
/>

<h1 className="p-5 bg-blue-500 rounded-full texe-center text-white cursor-pointer ">Login With Facebook</h1>


    </div>
  )
}

export default Login