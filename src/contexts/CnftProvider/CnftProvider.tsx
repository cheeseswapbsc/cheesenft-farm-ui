import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Cnft } from '../../cnft'

export interface CnftContext {
  cnft?: typeof Cnft
}

export const Context = createContext<CnftContext>({
  cnft: undefined,
})

declare global {
  interface Window {
    cnftsauce: any
  }
}

const CnftProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [cnft, setCnft] = useState<any>()

  // @ts-ignore
  window.cnft = cnft
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = 56;
      const cnftLib = new Cnft(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '500000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setCnft(cnftLib)
      window.cnftsauce = cnftLib
    }
  }, [ethereum])

  return <Context.Provider value={{ cnft }}>{children}</Context.Provider>
}

export default CnftProvider
