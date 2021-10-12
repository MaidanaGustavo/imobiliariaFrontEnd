import styled,{css} from 'styled-components';


export const InputField = styled.div`

  .InputMask{
  max-width: 250px;
  max-height: 50px;
  background: ${({theme})=>theme.colors.background};
  color : ${({theme})=>theme.colors.textColor};
  padding: 5px 15px;
  border: 1px solid ${({theme})=>theme.colors.background} ;
  border-radius: 4px;
  font-size: 11pt;
  :focus{
    outline: none;
    border-color: ${({theme})=>theme.colors.textColor} ;
  }
  
  @media (max-width:${({theme})=>theme.screen.pixel3}){
    max-width: 150px;
    max-height: 50px;
  }
}
  
 ${({theme,error})=> error && css`
    border-color: #FF0000 !important ;
  `}
`;

