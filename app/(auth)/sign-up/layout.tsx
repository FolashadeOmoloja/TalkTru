import { ClerkProvider } from "@clerk/nextjs"
import { PT_Sans } from "next/font/google";

export const metadata = {
    title: 'TalkTru',
    description: 'A social media platform that allows youths to express themselve, connect and build productive communities'
}

const pt_sans= PT_Sans({ subsets: ["latin"], weight:['400','700'] });
 const RootLayout = ({
    children} : 
    {
        children: React.ReactNode
    }
 ) => {
           <ClerkProvider>
              <html lang="en">
                  <body className={pt_sans.className}>
                    {children}
                   </body>
              </html>
           </ClerkProvider>
}


export default RootLayout