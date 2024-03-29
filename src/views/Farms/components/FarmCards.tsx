import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue, {
  StakedValue,
} from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useCnft from '../../../hooks/useCnft'
import { getEarned, getMasterChefContract } from '../../../cnft/utils'
import { bnToDec } from '../../../utils'
import Cnft from '../../../assets/img/cnft.svg'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const FarmCards: React.FC = () => {
  const [farms] = useFarms()
  const { account } = useWallet()
  const stakedValue = useAllStakedValue()

  const cnftIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'CNFT',
  )

  const cnftPrice =
    cnftIndex >= 0 && stakedValue[cnftIndex]
      ? stakedValue[cnftIndex].tokenPriceInWbnb
      : new BigNumber(0)

  const BLOCKS_PER_YEAR = new BigNumber(10512000)
  const CNFT_PER_BLOCK = new BigNumber(1)

  const rows = farms.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {
      const farmWithStakedValue = {
        ...farm,
        ...stakedValue[i],
  apy: stakedValue[i]
          ? cnftPrice
              .times(CNFT_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .div(stakedValue[i].totalWbnbValue)
          : null,
      }
      const newFarmRows = [...farmRows]
      if (newFarmRows[newFarmRows.length - 1].length === 3) {
        newFarmRows.push([farmWithStakedValue])
      } else {
        newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      }
      return newFarmRows
    },
    [[]],
  )

  return (
    <StyledCards>
      {!!rows[0].length ? (
        rows.map((farmRow, i) => (
          <StyledRow key={i}>
            {farmRow.map((farm, j) => (
              <React.Fragment key={j}>
                <FarmCard farm={farm} />
                {(j === 0 || j === 1) && <StyledSpacer />}
              </React.Fragment>
            ))}
          </StyledRow>
        ))
      ) : (
        <StyledLoadingWrapper>
          <Loader text="Making CNFT ..." />
        </StyledLoadingWrapper>
      )}
    </StyledCards>
  )
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const cnft = useCnft()

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    )
  }

  useEffect(() => {
    async function fetchEarned() {
      if (cnft) return
      const earned = await getEarned(
        getMasterChefContract(cnft),
        lpTokenAddress,
        account,
      )
      setHarvestable(bnToDec(earned))
    }
    if (cnft && account) {
      fetchEarned()
    }
  }, [cnft, lpTokenAddress, account, setHarvestable])

  const poolActive = true // startTime * 1000 - Date.now() <= 0

  return (
    <StyledCardWrapper>
      {farm.tokenSymbol === 'CNFT' && <StyledCardAccent />}
      <Card>
        <CardContent>
          <StyledContent>
          <StyledTopIcon>
            {farm.isHot && <StyledHotIcon>HOT</StyledHotIcon>}
            {farm.isNew && <StyledNewIcon>NEW</StyledNewIcon>}
          </StyledTopIcon>
          <div style={{display: 'flex'}}>
            <CardIcon><img src={farm.icon} alt="" height="80"/></CardIcon>
          </div>
              <StyledTitle>{farm.name}</StyledTitle> <p><StyledTitle>______________________</StyledTitle></p>
          <StyledInsight><span><b>Deposit</b></span> <span>{farm.name}</span></StyledInsight>
            <StyledInsight>
              <span><b>Reward</b></span>
              <span>
               <img src={Cnft} height="12" /> {farm.rewardValue}
              </span>
            </StyledInsight>
            <StyledInsight>
              <span><b>APY</b></span>
              <span style={{fontWeight: 'bold', color: '#4caf50'}}>
                {farm.apyValue}%
              </span>
            </StyledInsight>
            <StyledInsight>
              <span><b>Pair</b></span>
              <span style={{fontWeight: 'bold', color: '#4caf50'}}>
                {farm.name}
              </span>
            </StyledInsight>
            <StyledInsight>
              <span><b>Earning</b></span>
              <span style={{fontWeight: 'bold', color: '#4caf50'}}>
                {farm.tokenSymbol}
              </span>
            </StyledInsight>
            <Spacer />
            <Button
              disabled={!poolActive}
              text={poolActive ? 'Select' : undefined}
              to={`/farms/${farm.id}`}
            >
              {!poolActive && (
                <Countdown
                  date={new Date(startTime * 1000)}
                  renderer={renderer}
                />
              )}
            </Button>
            <br/>
          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>

  )
}

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const StyledCards = styled.div`
  width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.white};
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledTopIcon = styled.div`
  // position: relative;
`

const StyledHotIcon = styled.div`
  position: absolute;
  padding: 18px 40px 4px;
  background-color: #00b6a5;
  top: -5px;
  left: -40px;
  font-weight: bold;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #151719;
`

const StyledNewIcon = styled.div`
  position: absolute;
  padding: 18px 40px 4px;
  background-color: ${(props) => props.theme.color.primary.main};
  top: -5px;
  left: -40px;
  font-weight: bold;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #151719;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  margin: ${(props) => props.theme.spacing[3]}px 0 ${(props) => props.theme.spacing[3]}px;
  text-align: center;
`

const StyledDetail = styled.div`
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 10px;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  color: #aaaaaa;
  width: 100%;
  line-height: 25px;
  font-size: 13px;
  border: 0px solid #e6dcd5;
  text-align: center;
`

export default FarmCards
