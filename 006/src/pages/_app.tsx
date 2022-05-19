import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/dashboard-layout'
import IconHeaderToggleProvider from '../contexts/icon-header-toggle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.light}>
      <IconHeaderToggleProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </IconHeaderToggleProvider>
    </ThemeProvider>
  )
}

export default MyApp
