'use client'

interface Iprops {
user: {
    id: string,
    objectId: string,
    username: string,
    name:string,
    bio: string,
    image:string
};
btnTitle: string
}



const AccountProfile = ({user, btnTitle}: Iprops) => {

  return (
    <main>
        
    </main> 
  )
}

export default AccountProfile