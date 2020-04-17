import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { 
    StyledHeader, 
    StyledImg, 
    LogoContainer, 
    MenuContainer, 
    StyledButton,
    StyledSearchTextField,
    SearchContainer 
} from '../style/header'
import futuretube from '../images/futuretube.png'

function Header (props){
    return(
        <StyledHeader>
            <LogoContainer>
                <StyledImg src={futuretube} alt="logo"/>
            </LogoContainer>
            <SearchContainer>
            <StyledSearchTextField
              variant="outlined"
              margin="normal"
              autoFocus
              placeholder="Pesquisar"
            />
            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>
            </SearchContainer>

            <MenuContainer>
                <StyledButton>login</StyledButton>
                <StyledButton>SignUp</StyledButton>
                <StyledButton>Logout</StyledButton>
            </MenuContainer>
        </StyledHeader>
    )
}

export default Header