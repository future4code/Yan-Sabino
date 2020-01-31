import styled from 'styled-components'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
`

export const StyledButton = styled(Button) `
    cursor: pointer;
    color: black;
    width: auto;
    border: 1px solid black;
    :hover {
        border: 1px solid black;
        background-color: rgb(237, 127, 97);
    }
`

export const StyledTextField = styled(TextField)`
    color: black;
    background-color: #FAFAFA;
`

export const StyledWeekDaysContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;
`

export const StyledDayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid black;
    width: 200px;
    height:500px;
`