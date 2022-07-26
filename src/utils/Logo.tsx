import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return (
    <div className='flex items-center my-2'>
      <Image src="/assets/icons/Desertswap Logo.png" className='object-contain select-none' height={50} width={120} alt="DesertSwap" />
    </div>
  )
}
