import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../cnft/utils'
import useCnft from './useCnft'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const cnft = useCnft()
  const farms = getFarms(cnft)
  const masterChefContract = getMasterChefContract(cnft)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, cnft])

  useEffect(() => {
    if (account && masterChefContract && cnft) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, cnft])

  return balances
}

export default useAllEarnings
