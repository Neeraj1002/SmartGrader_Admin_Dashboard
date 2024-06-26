// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { FiUsers } from 'react-icons/fi'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
        className='mt-1'
      >
        <SubMenu
          label='Dashboards'
          icon={<i className='ri-home-smile-line' />}
          // suffix={<Chip label='5' size='small' color='error' />}
        >
          <MenuItem icon={  <IconContext.Provider value={{ color: '#0ea5e9' }}>
              <FiUsers className='text-primary'/>
            </IconContext.Provider>}
            href='/users'>
            {/* <Link href='/users' className='link text-black'>
              Users
            </Link> */}
            Users
          </MenuItem>
          <MenuItem>Categories</MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/ecommerce`} target='_blank'>
            eCommerce
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/academy`} target='_blank'>
            Academy
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/logistics`} target='_blank'>
            Logistics
          </MenuItem>
        </SubMenu>
        {/* <SubMenu label='Front Pages' icon={<i className='ri-file-copy-line' />}>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/landing-page`} target='_blank'>
            Landing
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/pricing`} target='_blank'>
            Pricing
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/payment`} target='_blank'>
            Payment
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/checkout`} target='_blank'>
            Checkout
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/help-center`} target='_blank'>
            Help Center
          </MenuItem>
        </SubMenu> */}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
