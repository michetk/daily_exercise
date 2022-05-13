import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/dashboard-layout'
import IconHeaderToggleProvider from '../contexts/icon-header-toggle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconHeaderToggleProvider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </IconHeaderToggleProvider>
  )
}

export default MyApp
