import { useContext } from 'react'
import { Context } from '../contexts/CnftProvider'

const useCnft = () => {
  const { cnft } = useContext(Context)
  return cnft
}

export default useCnft
