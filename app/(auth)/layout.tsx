import { ClerkProvider } from "@clerk/nextjs"
import { PT_Sans } from "next/font/google";
import '../globals.css'

export const metadata = {
    title: 'TalkTrue',
    description: 'A social media platform that allows youths to express themselve, connect and build productive communities'
}

const pt_sans= PT_Sans({ subsets: ["latin"], weight:['400','700'] });
 const RootLayout = ({
    children} : 
    {
        children: React.ReactNode
    }
 ) => {
   return(
    <ClerkProvider>
         <html lang="en">
             <body className={`${pt_sans.className} bg-dark-1`}>
               {children}
              </body>
         </html>
    </ClerkProvider>
   )
}


export default RootLayout