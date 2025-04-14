import React from 'react'
import Column from './column'

const Loader = () => {
  return (
   <Column className='h-screen justify-center items-center bg-transparent' >
         <div className="animate-spin rounded-full border-t-2 h-8 w-8 border-primary "></div>
         </Column>
  )
}

export default Loader