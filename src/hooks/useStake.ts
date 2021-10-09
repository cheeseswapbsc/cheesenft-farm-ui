import { useCallback } from 'react'

import useCnft from './useCnft'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../cnft/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const cnft = useCnft()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(cnft),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, cnft],
  )

  return { onStake: handleStake }
}

export default useStake
