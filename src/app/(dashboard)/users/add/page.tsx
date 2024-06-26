import UserAddUpdate from '@/views/users/UserAddUpdate'
import React from 'react'

const AddUser = () => {
  const userData = {
    id: '',
    name: '',
    username: '',
    email: '',
    role: '',
    isVerified: false
  }
  return (
    <UserAddUpdate user={userData}/>
  )
}

export default AddUser