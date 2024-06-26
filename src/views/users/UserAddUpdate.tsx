import React from 'react'
import UserDetailsTable from './UserDetailsTable'
import { Container } from '@mui/material'
import { DiEnvato } from 'react-icons/di'


const UserAddUpdate = (userData: any) => {
  return (
    <div className='bg-white p-10 m-5 rounded-xl'>
      <UserDetailsTable
      user={userData}
      hideControls={false}
      disabled={false} />
    </div>
  
 
  )
}

export default UserAddUpdate