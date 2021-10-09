import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../cnft/utils'
import useCnft from './useCnft'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const cnft = useCnft()
  const masterChefContract = getMasterChefContract(cnft)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, cnft])

  useEffect(() => {
    if (account && masterChefContract && cnft) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, cnft])

  return balance
}

export default useEarnings
