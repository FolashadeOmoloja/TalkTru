import Link from 'next/link'
import Image   from 'next/image'
import {OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'

const Topbar = () => {
  return (
    <nav className='topbar'>
        <Link href='/' className='flex flex-col items-center '>
                <Image src='/logo.png' alt={'logo'} width={32} height={32} className='w-auto h-auto'/>  
                <p className={` text-heading3-bold text-[#f3f3f5] max-xs:hidden mt-[-7px]`}>TalkTrue</p>
        </Link>
        <div className='flex items-center gap-1'>
            <div className='block md:hidden'>
                 <SignedIn>
                     <SignOutButton>
                           <Image src={'/assets/logout.svg'} alt={'logout'} width={28} height={28}/>
                     </SignOutButton>
                 </SignedIn>
            </div>
            <OrganizationSwitcher/>
        </div>
    </nav>
  )
}

export default Topbar