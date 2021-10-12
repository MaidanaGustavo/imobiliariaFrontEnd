import styled,{css} from 'styled-components';


export const Select = styled.select`
  background: ${({theme})=>theme.colors.background};
  color :${({theme})=>theme.colors.textColor};
  padding: 5px 30px;
  border: none;
  @media (max-width:${({theme})=>theme.screen.pixel3}){
    max-width: 150px;
    max-height: 50px;
  }
`;