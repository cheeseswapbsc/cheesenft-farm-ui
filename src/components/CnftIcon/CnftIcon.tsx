import React from 'react'
import cnft from '../../assets/img/cnft.svg'

interface CnftIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const CnftIcon: React.FC<CnftIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
   <img src={cnft} height="64" />
  </span>
)

export default CnftIcon
