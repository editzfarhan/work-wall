import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-5 p-6 bg-red-300'>
 <Link href='\'>Home </Link>    
 <Link href='\about'>About </Link>  
 <Link href='\address'>Address </Link>   
 <Link href='\contact'>Contact </Link> 
    </div>
  )
}

export default Header