import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'

const About: React.FC = () => {
    return (
        <>
        <StyledNav>
       <br /><b>HOTDOG🌭</b><br />
         A hot dog is a grilled or steamed food where a sausage is served in the slit of a partially sliced bun.
      <br />  It can also refer to the sausage itself. The sausage used is the wiener or frankfurter. The names of these
      <br /> sausages also commonly refer to their assembled dish. Hot dog preparation and condiments vary worldwide.
      <br />   Source:<b>Wikipedia</b>
       <br />Origin: <b>United States</b>
       </StyledNav>
        </>
    );
}

const StyledNav = styled.nav`
  align-items: center;
  margin-top: 15%;
  margin-bottom: 15%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
export default About
