import { useCallback } from 'react'

import useCnft from './useCnft'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../cnft/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const cnft = useCnft()
  const masterChefContract = getMasterChefContract(cnft)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, cnft],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
