import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  
  display: flex;
  
  align-items: center;
  justify-content: center;
  
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const SideMenu = styled.div`
    width: 30%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const VideoContainer = styled.div`
    width: 300px;
    height: 400px;
    max-width:300px;
    max-height:400px;
    display: grid;
    grid-template-columns: 1fr;
    background-color: #FAFAFA;
    margin-top: 300px;
`

// loader animado

export const Loading = styled.text`
  font-size: 9px;
  text-align: center;
`;

const dash = keyframes`
    100% { stroke-dashoffset: 136; }
`;

export const Triangle = styled.polygon`
  stroke-dasharray: 17;
  animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
