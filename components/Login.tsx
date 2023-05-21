'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
      src='https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/277811536_342407874575411_151168286882711915_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J4Hf6W8Ko2MAX80v8qU&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&oh=00_AfBoGGoF80MWBuo_XJ9HuCUr6HTnThg9YIBlJuLRTya5uA&oe=646D4E3F'
      width={300}
      height={300}
      alt="logo"
      />
      <button onClick={() => signIn("google")} 
      className="text-white font-bold text-3xl animate-pulse">Sign In to LouisGPT</button>
    </div>
  )
}

export default Login;
