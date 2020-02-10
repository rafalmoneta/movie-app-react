import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  display: block;
`



const Header = () => {
  return (
    <header>
      <Logo>There will be a MovieDB logo</Logo>
      <h1>Now showing (4)</h1>
      <p>Lastest movies that you can see in cinema</p>
    </header>
  );
}
 
export default Header;