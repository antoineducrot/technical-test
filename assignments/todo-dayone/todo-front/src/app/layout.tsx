import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import type { Metadata } from 'next'

import { ApolloWrapper } from '@/technical/apollo/ApolloWrapper'

export const metadata: Metadata = {
  title: 'Todo App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <CssBaseline />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
