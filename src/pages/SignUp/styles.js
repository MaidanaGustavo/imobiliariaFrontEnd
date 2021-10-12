import styled from 'styled-components';
export const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
 export const Container = styled.div`
  padding: 15px 20px ;
  background: #fff;
  border-radius: 12px;
  width: 90vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2{
    color: #000;
    font-size: 14pt;
    text-align: center;
    margin-bottom: 15px;
  }
  h3{
    font-size: 11pt;
    text-align: center;
    margin-bottom: 15px;
  }
  @media (max-width:${({theme})=>theme.screen.pixel3}){
    padding: 5px 5px;
    h2{
      font-size:12pt
    }
    h3{
      font-size : 10pt;
    }
  }

  @media (max-width:${({theme})=>theme.screen.galaxyS9}){
    padding: 5px 5px;
    h2{
      font-size:10pt
    }
    h3{
      font-size : 9pt;
    }
    height: 90vh;
  }
 `;
 export const ItemsGroup = styled.div`
  width:100%;
  display :flex;
  justify-content: center;
  align-self: center;

 `;

 export const InputGroup = styled.div`
  width: 60%;
  display: flex;
  padding: 15px 15px;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-around;
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px 10px;
    row-gap: 30px;
    padding: 5px 5px;
    label{
      display : flex;
      flex-direction: column;
      color : #FF0000;
    }
    div{
         
      display :flex;
      justify-content:space-between;
      
      
      Input{
        margin-right: 15px;
      }
    }
  }
  Button{
    align-self: center;
    justify-self: center;
  }
  @media (max-width:${({theme})=>theme.screen.ipadPro}){
    width: 100%;
  }
  @media (max-width:${({theme})=>theme.screen.iphoneXr}){
    form{
      label{
        margin-bottom: 5px;
      }
      label:last-child{
        margin-bottom: 0px;
      }
      div{
        flex-direction : column;
        Input{
          margin: 0;
        }
      }
    }
  }
 `;

 export const ImgGroup = styled.div`
  width: 40%;
  img{
    width: 100%
  }
  @media (max-width:${({theme})=>theme.screen.ipadPro}){
    display : none;
  }

  @media (max-width:${({theme})=>theme.screen.mediumScreen}){
    display : none;
  }
 `;