import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useCnft from '../../hooks/useCnft'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../cnft/utils'
import { getFarms } from '../../cnft/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const cnft = useCnft()
  const { account } = useWallet()

  const farms = getFarms(cnft)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
