import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import useCnft from '../../hooks/useCnft'
import { getMasterChefContract } from '../../cnft/utils'
import { getContract } from '../../utils/erc20'
import Harvest from './components/Harvest'
import Stake from './components/Stake'

const Farm: React.FC = () => {
  const { farmId } = useParams()
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    tokenSymbol,
    token2Symbol,
    earnToken,
    name,
    icon,
    description,
    symbolShort,
    protocal,
    iconProtocal,
    pairLink,
    addLiquidityLink
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    symbolShort: '',
    tokenSymbol: '',
    token2Symbol: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
    symbol: '',
    protocal: '',
    iconProtocal: '',
    pairLink: '',
    addLiquidityLink: ''
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cnft = useCnft()
  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const { onRedeem } = useRedeem(getMasterChefContract(cnft))

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  return (
    <>
  <PageHeader
    icon={
      <div style={{display: 'flex'}}>
        <img src={icon} height="80" />
      </div>
    }
    subtitle={`Deposit ${lpTokenName}  Tokens and earn ${earnTokenName}`}
    title={name}
  />
  <StyledFarm>
    <StyledCardsWrapper>
      <StyledCardWrapper>
        <Harvest pid={pid} />
      </StyledCardWrapper>
      <Spacer />
      <StyledCardWrapper>
        <Stake
          lpContract={lpContract}
          pid={pid}
          tokenName={lpToken.toUpperCase()}
        />
      </StyledCardWrapper>
    </StyledCardsWrapper>
    <Spacer size="lg" />
    <StyledCardsWrapper>
</StyledCardsWrapper>

<Spacer size="md" />
  </StyledFarm>
</>
  )
}

const StyledApyWrap = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  @media (max-width: 767px) {
    text-align: left;
    br {
        display: none;
    }
  }
`

const StyledHeading = styled.h2`
  color: ${(props) => props.theme.color.white};
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`

const StyledInfoLP = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #130A0C;
  border-radius: 12px;
`

export default Farm
