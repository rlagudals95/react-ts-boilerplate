import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
            <FooterContainer>
                Copyright by HMK1022. All rights reserved.
            </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200px;
    background-color: red;
`
