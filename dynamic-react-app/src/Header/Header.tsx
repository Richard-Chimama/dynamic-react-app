import React from 'react'
import Logo from '../assets/cinema-logo.png'
import * as S from './styled'


 const Header = () => {
  return (
    <S.HeaderContainer>
        <img src={Logo} />
        <h2>OMDB API</h2>
        
        </S.HeaderContainer>
  )
}

export default Header
