import Link from 'next/link'
import Image   from 'next/image'
import {OrganizationSwitcher } from '@clerk/nextjs'
import LogoutButton from '../elements/LogoutButton'

const Topbar = () => {
  return (
    <nav className='topbar'>
        <Link href='/' className='flex flex-col items-center '>
                <Image src='/logo.png' alt={'logo'} width={32} height={32} className='w-auto h-auto'/>  
                <p className={` text-heading3-bold text-[#f3f3f5] max-xs:hidden mt-[-7px]`}>TalkTrue</p>
        </Link>
        <div className='flex items-center gap-1'>
            <div className='block md:hidden'>
                <LogoutButton display={false}/>
            </div>
            <OrganizationSwitcher/>
        </div>
    </nav>
  )
}

export default Topbar