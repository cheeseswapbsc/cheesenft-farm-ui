import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWbnbContract,
  getFarms,
  getTotalLPWbnbValue,
} from '../cnft/utils'
import useCnft from './useCnft'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wbnbAmount: BigNumber
  totalWbnbValue: BigNumber
  tokenPriceInWbnb: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const cnft = useCnft()
  const farms = getFarms(cnft)
  const masterChefContract = getMasterChefContract(cnft)
  const wbnbContact = getWbnbContract(cnft)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWbnbValue(
            masterChefContract,
            wbnbContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, cnft])

  useEffect(() => {
    if (account && masterChefContract && cnft) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, cnft])

  return balances
}

export default useAllStakedValue
