'use client'

// MUI Imports
import IconButton from '@mui/material/IconButton'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const NavSearch = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return isBreakpointReached ? (
    <IconButton className='text-textPrimary'>
      <i className='ri-search-line' />
    </IconButton>
  ) : (
    <div className='flex items-center cursor-pointer gap-2'>
      <div className='whitespace-nowrap select-none text-textDisabled ml-1'>
        <input
          type='text'
          placeholder='Search'
          className='border-none focus:border-none outline-none bg-gray-50 rounded-md p-2'
        />
         <IconButton className='text-textPrimary'>
        <i className='ri-search-line' />
      </IconButton>
      </div>
    </div>
  )
}

export default NavSearch
