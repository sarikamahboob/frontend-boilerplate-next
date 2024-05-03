
import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import myImage from "@/public/images/wallpaper.jpg"

const Mission = () => {
  return (
    <div>Mission Page
      <div style={{width: '200px'}}>
        <Image src={myImage} alt='my-image' quality={100} placeholder='blur'/>
      </div>
      <Button />
    </div>
  )
}

export default Mission