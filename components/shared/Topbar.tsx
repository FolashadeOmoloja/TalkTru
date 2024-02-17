import Link from 'next/link'
import Image   from 'next/image'

const Topbar = () => {
  return (
    <nav className='topbar'>
        <Link href='/' className='flex flex-col items-center '>
                <Image src='/logo2.png' alt={'logo'} width={32} height={32}/>  
                <p className={` text-heading3-bold text-[#f3f3f5] max-xs:hidden mt-[-7px]`}>TalkTrue</p>
        </Link>
    </nav>
  )
}

export default Topbar