import { UserButton } from "@clerk/nextjs";


const page = () => {
  return (
    <main>
       <UserButton afterSignOutUrl="/"/>
    </main>
  )
}

export default page