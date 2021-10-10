import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'
import cnft from '../../assets/img/cnft-supply.svg'
import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'
const tvl = Math.floor(Math.random() * 199375) + 118600;
const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
            <br /> <br /> <br />
            <Container>
            <TitleTvl>
           <b> 💰💰 Total Value Locked (TVL): {tvl}&nbsp;$ </b>
            </TitleTvl>
               </Container>
               <Spacer size="lg" />
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

const StyledInfoLP = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #292d31;
  border-radius: 10px;
  text-align: center;
`
const TitleTvl = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  max-width: 100%;
  height: 45px;
  background: #130A0C;
  padding: ${(props) => props.theme.spacing[2]}px;
  margin-top: 25px;
  border-radius: 10px;
  font-weight: 700;
  color: #DF922B;
  font-size: 24px;
`

export default Farms
