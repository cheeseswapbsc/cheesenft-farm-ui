// import React, { useCallback, useEffect, useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import React, { Suspense, useEffect, lazy, useState, useCallback } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import CnftProvider from './contexts/CnftProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Farms from './views/Farms'
import Home from './views/Home'
import About from './views/About'
import Stake from './views/Stake'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import styled from 'styled-components'



const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Suspense fallback={null}>
 
    <Providers>
      <HashRouter>
      
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Spacer size="lg" />
        <Spacer />
     <Footer />
      </HashRouter>
      <Disclaimer />
    </Providers>
    </Suspense>
  )
}

//bsc testnet chainID 97
//bsc mainnet chainID 56
const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={56}
        connectors={{
          walletconnect: { rpcUrl: 'https://bsc-dataseed1.defibit.io' },
        }}
      >
        <CnftProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </CnftProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}



export default App
