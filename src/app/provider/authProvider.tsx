'use client'

import type { ChildrenType } from '@core/types'
import { SessionProvider } from "next-auth/react"

export default function AuthProvider ({ children }: ChildrenType) {
    return <SessionProvider>{children}</SessionProvider>
}
  



