import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/dashboard-layout'
import IconHeaderToggleContextProvider from '../contexts/icon-header-toggle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconHeaderToggleContextProvider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </IconHeaderToggleContextProvider>
  )
}

export default MyApp
