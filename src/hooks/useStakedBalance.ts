import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../cnft/utils'
import useCnft from './useCnft'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const cnft = useCnft()
  const masterChefContract = getMasterChefContract(cnft)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, cnft])

  useEffect(() => {
    if (account && cnft) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, cnft])

  return balance
}

export default useStakedBalance
