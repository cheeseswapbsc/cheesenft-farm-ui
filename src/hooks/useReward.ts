import { useCallback } from 'react'

import useCnft from './useCnft'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../cnft/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const cnft = useCnft()
  const masterChefContract = getMasterChefContract(cnft)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, cnft])

  return { onReward: handleReward }
}

export default useReward
