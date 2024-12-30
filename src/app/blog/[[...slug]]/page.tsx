'use server'
import React from 'react'
import Post1 from './welcome.mdx'

const Page = () => {



  return (
    <div>
      Page

      {/* its wrong bc it need to be generate on builder process */}
       <Post1/>
    </div>
  )
}

export default Page