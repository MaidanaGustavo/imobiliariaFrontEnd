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
 `;

 export const ImgGroup = styled.div`
  width: 40%;
  img{
    width: 100%
  }
 `;