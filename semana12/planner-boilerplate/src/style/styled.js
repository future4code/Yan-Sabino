import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const StyledButton = styled(Button) `
    cursor: pointer;
    color: black;
    width: auto;
    
    :hover {
        border: 1px solid white;
        background-color: rgb(237, 127, 97);
    }
`

export const StyledTextField = styled(TextField)`
    color: black;
    background-color: white;
`