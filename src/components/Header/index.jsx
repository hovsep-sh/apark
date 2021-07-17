import React from "react";
import styled from 'styled-components'

export default function Header() {
    return (<HeaderCont>
        <span>logo</span>
        <span>avatar</span>
    </HeaderCont>)
}
const HeaderCont = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`