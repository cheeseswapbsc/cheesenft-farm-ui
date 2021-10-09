import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import cnft from '../../assets/img/cnft-supply.svg'
import Farms from '../Farms'
import Footer from '../../components/Footer'


const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={cnft} height={128} />}
        title="Make CNFT on Binance Smart Chain"
        subtitle="Stake CNFT LP tokens to Buy more NFT with CNFT!"
      />

      <Container>
        <Balances />
      </Container>
      <Container>
      <Farms />
      </Container>
      <Spacer size="lg" />
      <Spacer />
     <Footer />
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

const StyledInfoLP = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #292d31;
  border-radius: 10px;
  text-align: center;
`

export default Home
