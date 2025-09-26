import React from 'react'

const Footer = () => {
  return (
    <div className='text-[#737373] md:px-10'>
            <div className='py-20'>
            <p className=''>Developed By John Doe</p>
            <p className=''>Read About CineSith Tv Shows and Movies and Watch bonus video on Tudu.com.</p>
            </div>
            <p className='pb-5'>Question? Contact Us</p>
            
            <div className='grid grid-cols-2 md:grid-cols-4 text-sm pb-10 max-w-5xl'>
                <ul className='flex flex-col space-y-2'>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Speed Test</li>
                </ul>
                <ul className='flex flex-col space-y-2'>
                    <li>Help Center</li>
                    <li>Jops</li>
                    <li>Cookie Preference</li>
                    <li>Legal Movies</li>
                </ul>
                <ul className='flex flex-col space-y-2'>
                    <li>Account</li>
                    <li>May to Match</li>
                    <li>Comparate Information</li>
                    <li>Only on CineSith</li>
                </ul>
                <ul className='flex flex-col space-y-2'>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact US</li>
                </ul>
                
            </div>
    </div>
  )
}

export default Footer