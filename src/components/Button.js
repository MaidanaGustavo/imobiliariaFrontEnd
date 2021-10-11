import styled,{css} from "styled-components";


export const Button = styled.button`
  padding: 10px 25px;
  background: ${({theme})=>theme.colors.buttonBackground};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 11pt;
  opacity: 0.9;
  :hover{
    opacity: 1;
    box-shadow:
    2px 3.9px 4.5px rgba(0, 0, 0, 0.028),
    5.9px 11.4px 12.5px rgba(0, 0, 0, 0.042),
    14.8px 28.5px 30.1px rgba(0, 0, 0, 0.054),
    40px 77px 100px rgba(0, 0, 0, 0.07);
    transition: all ease-in 0.5s;
  }
  @media(max-width:${({theme})=>theme.screen.ipadPro}){
    opacity:1;
  }
  @media(max-width:${({theme})=>theme.screen.pixel3}){
    max-width: 150px;
  }
  ${({theme,dark}) => dark && css`
      background : #000;
      color: ${theme.colors.textColor};
  `}
`;