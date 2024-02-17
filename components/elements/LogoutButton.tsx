import Image   from 'next/image'
import { SignOutButton, SignedIn } from '@clerk/nextjs'

const LogoutButton = ({display, attr}:{display:boolean, attr?:any}) => {
  return (
    <SignedIn>
        <SignOutButton signOutCallback={attr}>
           <div className='flex cursor-pointer gap-4 p-4'>
              <Image src={'/assets/logout.svg'} alt={'logout'} width={28} height={28}/>
              {display && <p className='text-light-2 max-lg:hidden'>Logout</p>}
           </div>
        </SignOutButton>
    </SignedIn>
  )
}

export default LogoutButton