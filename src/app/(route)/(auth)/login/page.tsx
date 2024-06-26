// Component Imports
import Login from '@/views/auth/Login'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const LoginPage = () => {
  // Vars
  const mode = getServerMode()

  return <Login />
}

export default LoginPage
