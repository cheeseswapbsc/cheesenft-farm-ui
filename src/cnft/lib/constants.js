import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
 cheeseswapFactory: '0xdd538E4Fd1b69B7863E1F741213276A6Cf1EfB3B',
 cheeseswapRouter: '0x3047799262d8D2EF41eD2a222205968bC9B0d895',
 pancakeswapFactory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
 pancakeswapRouter: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
 WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
 CNFT: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
 CHS: '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',
 USDT: '0x55d398326f99059fF775485246999027B3197955',
 BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
 }

export const contractAddresses = {
  cnft: {
    56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
  },
  masterChef: {
    56: '0xdC4E6ce3e35f1BC83EDA4eFA54A5F589Cae783Ce',
  },
  wbnb: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
}

//BELOW ARE LISTED POOLS
export const supportedPools = [

    {
      pid: 4,
      lpAddresses: {
        56: '0x41d3D273D342733799F106F76912526b6C49613f',
      },
      tokenAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      name: 'CNFT-WBNB',
      symbol: 'CNFT-WBNB LP',
      symbolShort: 'CNFT-WBNB',
      tokenSymbol: 'CNFT',
      token2Symbol: 'WBNB',
      icon: 'https://cheesemaker.farm/cnft-wbnb.svg',
      isHot: true,
      isNew: true,
      rewardValue: '0.45 CNFT',
      apyValue: '6752%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://cheesemaker.farm/cheeseswap.svg',
      pairLink: 'https://info.cheeseswap.app/#/pair/0x41d3D273D342733799F106F76912526b6C49613f',
      addLiquidityLink: 'https://info.cheeseswap.app/#/pair/0x41d3D273D342733799F106F76912526b6C49613f'
    },

     {
      pid: 1,
      lpAddresses: {
        56: '0xd1bAbB2dA509eA5d13dBD66d9a3fbae347A04578',
      },
      tokenAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      name: 'CNFT-CHS',
      symbol: 'CNFT-CHS LP',
      symbolShort: 'CNFT-CHS',
      tokenSymbol: 'CNFT',
      token2Symbol: 'CHS',
      icon: 'https://cheesemaker.farm/cnft-chs.svg',
      isHot: true,
      isNew: true,
      rewardValue: '0.25 CNFT',
      apyValue: '2517%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://cheesemaker.farm/cheeseswap.svg',
      pairLink: 'https://info.cheeseswap.app/#/pair/0xd1bAbB2dA509eA5d13dBD66d9a3fbae347A04578',
      addLiquidityLink: 'https://info.cheeseswap.app/#/pair/0xd1bAbB2dA509eA5d13dBD66d9a3fbae347A04578'
    },

    {
      pid: 2,
      lpAddresses: {
        56: '0xc57F2a63cf2014E739126770f4094432ef4f852E',
      },
      tokenAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      name: 'CNFT-BUSD',
      symbol: 'CNFT-BUSD LP',
      symbolShort: 'CNFT-BUSD',
      tokenSymbol: 'CNFT',
      token2Symbol: 'BUSD',
      icon: 'https://cheesemaker.farm/cnft-busd.svg',
      isHot: true,
      isNew: true,
      rewardValue: '0.25 CNFT',
      apyValue: '1270%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://cheesemaker.farm/cheeseswap.svg',
      pairLink: 'https://info.cheeseswap.app/#/pair/0xc57F2a63cf2014E739126770f4094432ef4f852E',
      addLiquidityLink: 'https://info.cheeseswap.app/#/pair/0xc57F2a63cf2014E739126770f4094432ef4f852E'
    },

    {
      pid: 3,
      lpAddresses: {
        56: '0x33c3bd0bd6071d12190538185364dF4c8877f49e',
      },
      tokenAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      name: 'CNFT-USDT',
      symbol: 'CNFT-USDT LP',
      symbolShort: 'CNFT-USDT',
      tokenSymbol: 'CNFT',
      token2Symbol: 'USDT',
      icon: 'https://cheesemaker.farm/cnft-usdt.svg',
      isHot: true,
      isNew: true,
      rewardValue: '0.25 CNFT',
      apyValue: '2010%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://cheesemaker.farm/cheeseswap.svg',
      pairLink: 'https://info.cheeseswap.app/#/pair/0x33c3bd0bd6071d12190538185364dF4c8877f49e',
      addLiquidityLink: 'https://info.cheeseswap.app/#/pair/0x33c3bd0bd6071d12190538185364dF4c8877f49e'
    },

    {
      pid: 5,
      lpAddresses: {
        56: '0xBCB2bA4Cf88E9108185EF6A82d49E3150942f518',
      },
      tokenAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      name: 'Cake-LP',
      symbol: 'Cake-LP',
      symbolShort: 'Cake-LP',
      tokenSymbol: 'CNFT',
      token2Symbol: 'USDT',
      icon: 'https://cheesemaker.farm/cnft-usdt-pck.svg',
      isHot: true,
      isNew: true,
      rewardValue: '0.22 CNFT',
      apyValue: '1677%',
      protocal: 'PancakeSwap',
      iconProtocal: 'https://cheesemaker.farm/pancake.svg',
      pairLink: 'https://pancakeswap.finance/info/pool/0xbcb2ba4cf88e9108185ef6a82d49e3150942f518',
      addLiquidityLink: 'https://pancakeswap.finance/add/0x55d398326f99059ff775485246999027b3197955/0xc6d866628b5a1c63e196557c1ba189211b779f64'
    },

         {
      pid: 0,
      lpAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      tokenAddresses: {
        56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
      },
      name: 'CNFT',
      symbol: 'CNFT LP',
      symbolShort: 'CNFT',
      tokenSymbol: 'CNFT',
      token2Symbol: 'CNFT',
      icon: 'https://cheesemaker.farm/cnft.svg',
      isHot: true,
      isNew: true,
      rewardValue: '0.15 CNFT',
      apyValue: '910%',
      protocal: 'CheeseSwap',
      iconProtocal: 'https://cheesemaker.farm/cheeseswap.svg',
      pairLink: '#',
      addLiquidityLink: '#'
    },


]
