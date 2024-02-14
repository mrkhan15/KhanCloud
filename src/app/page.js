import Image from "next/image";
import { SessionProvider,  } from "next-auth/react"
import { UserButton, useUser } from "@clerk/nextjs";
import Navbar from "../components/navbar/Navbar"



export default function Home() {
  return (
    <div>
      <div><Navbar/>
      
      </div>
      <div>
        Chai aur code!!
        <button className='bg-blue-400 p-2 rounded-xl px-3 text-white'>Login</button>
        <UserButton/>
      </div>

     
    </div>
  );
}




//className="flex min-h-screen flex-col items-center justify-between p-24"

// export default function Home({ Component, pageProps}) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <Component{...pageProps}/>
//     </SessionProvider>
//   );
// }



