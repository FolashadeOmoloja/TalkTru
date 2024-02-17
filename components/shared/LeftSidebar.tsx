import { sidebarLinks } from '@/constants'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar leftsidebar">
         <div className="flex wfull flex-1 flex-col gap-6 px-6">
            {
              sidebarLinks.map((link)=>(
                <div>
                    Link
                </div>
              )
              )
            }
         </div>
    </section>
  )
}

export default LeftSidebar