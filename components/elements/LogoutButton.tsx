import Image   from 'next/image'
import { SignOutButton, SignedIn } from '@clerk/nextjs'

const LogoutButton = () => {
  return (
    <SignedIn>
        <SignOutButton>
              <Image src={'/assets/logout.svg'} alt={'logout'} width={28} height={28}/>
        </SignOutButton>
    </SignedIn>
  )
}

export default LogoutButton