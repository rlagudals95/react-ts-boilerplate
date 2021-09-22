import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <React.Fragment>
        <Banner>
            <Logo>Memento mori</Logo>
            {/* <h1 className="banner_title">Memento mori</h1> */}
            <Menus >
                <Menu>Image</Menu>
                <Menu>Video</Menu>
                <Menu>Note</Menu>
                <Menu>Todo</Menu>
            </Menus> 
            </Banner>
            <FooterContainer>
                Copyright by HMK1022. All rights reserved.
            </FooterContainer>
        </React.Fragment>
    )
}

export default Header

const Banner = styled.header`
    background-color: transparent;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0; 
    display: flex;
    justify-content: space-between;
    cursor: pointer;
   
`
const Logo = styled.div`
    font-size: 2rem;
    padding-left:18px;
    margin-top: 7px;
    font-weight: 600;
`

const Menus = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 400px;
    padding-right: 50px;
    
`

const Menu = styled.li`
    list-style: none;
    cursor: pointer;
`

const FooterContainer = styled.div`
    
    position: fixed;
    bottom: 0;
    left: 50%;
    padding-bottom: 20px;
    transform: translate(-50%, -50%);
    background-color: none;
`