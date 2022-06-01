import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/dashboard-layout'
import IconHeaderToggleContextProvider from '../contexts/icon-header-toggle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.light}>
      <IconHeaderToggleContextProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </IconHeaderToggleContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
