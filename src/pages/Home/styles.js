import styled  from 'styled-components';
import inicial from '../../assets/images/inicial.jpg';

export  const Main  = styled.main `

  padding: 15px 0;
  width: 100%;
  height: 100%;
  .welcomePage{
    color: #fff;
    background: url(${inicial});
    background-size: cover;
    width: 100%;
    height: 100vh;
    .titleWelcome{
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content : center;
      align-items: center;
      z-index : 999;
      
      text-shadow: 2px 2px 5px #000000;
      padding: 35px 45px;

      h1{
        font-size: 32pt;
        margin-bottom: 15px;
      }
      p{
        font-size: 18pt;
      }
    
    }
  }
  .homepageArticle{
    padding: 25px 15px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 550px;
    }

    @media(max-width:${({theme})=>theme.screen.ipad}){
      img{
        width : 350px;
        
      }
    }


  @media screen and (min-width:769px) and  (max-width:${({theme})=>theme.screen.ipadPro}){   
      img{
        width : 325px
      }
   }

   @media screen and (min-width:835px) and (max-width:${({theme})=>theme.screen.largeScreen}){
    img{
        width : 450px;  
      }
   }
   @media screen and (min-width:378px) and (max-width:${({theme})=>theme.screen.pixel3}){
    img{
        width : 300px;
      }
   }

   @media screen and (min-width:394px) and (max-width:${({theme})=>theme.screen.iphoneXr}){
    img{
        width : 325px;
      }
   }

   @media screen and  (max-width:${({theme})=>theme.screen.iphone}){
    img{
        width : 275px;
        
      }
   }
  }

  .homepageArticleText{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      font-size: 28pt;
      margin-bottom: 25px;
    }
    p{
      font-size: 21pt;
      margin-bottom: 25px;
    }
    Button{
      width: 250px;
      height: 50px;
    }
    @media(max-width:${({theme})=>theme.screen.ipad}){
      h1{
        font-size: 24pt ;
      }
      p{
        font-size:  12pt;
      }
    }
    @media screen and (min-width:769px) and  (max-width:${({theme})=>theme.screen.ipadPro}){
      h1{
        font-size: 21pt ;
      }
      p{
        font-size:  14pt;
        
      }
    }
    @media screen and (min-width:835px) and (max-width:${({theme})=>theme.screen.largeScreen}){
      p {
        font-size : 16pt
      }
    }
    @media screen and (min-width:378px) and (max-width:${({theme})=>theme.screen.pixel3}){
      h1{
        font-size: 21pt ;
      }
      p {
        font-size : 12pt
      }
    }
  }

  .opnions{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction : column;
    padding: 50px 0;
    justify-content: space-around;

    .mensage{
      width: 100%;
      height:100%;

      
      h1{
        font-size: 28pt;
        text-align: center;
        margin-bottom : 15px;
      }
      p{
        text-align: center;
        font-size: 18pt;
        margin-bottom : 15px;
      }
    }
    .cards{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    }
    .captureButton{
      align-self: center;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      h2{
        margin-bottom: 25px;
      }
    }

    @media screen and  (max-width:${({theme})=>theme.screen.pixel3}){
      .mensage{
        h1{
          font-size:13pt;
        }
        p{
          font-size: 12pt;
        }
      }

      .cards{
        flex-direction: column;
        align-items:center;
        justify-content: space-around;
        height  : 1500px ;
        
      }
      .captureButton{
        align-items: center;
        h2{
          font-size: 16pt;
        }
      }
    }

    @media screen and  (min-width:394px) and (max-width:${({theme})=>theme.screen.iphoneXr}){

      .mensage{
        h1{
          font-size:16pt;
        }
        p{
          font-size: 12pt;
        }
      }

      .cards{
        flex-direction: column;
        height  : 1375px ;
      }

      .captureButton{
        align-items: center;
        
        h2{
          font-size: 16pt;
        }
      }
    }

    @media screen and  (min-width:1025px) and (max-width:${({theme})=>theme.screen.largeScreen}){
      .mensage{
        margin-top: 25px;
        h1{
          font-size: 14pt;
        }
        p{
          font-size: 13pt;
        }
      }
      .captureButton{
        margin-bottom:15px;
        
      }
    }

    @media screen and  (min-width:769px) and (max-width:${({theme})=>theme.screen.ipadPro}){
      .mensage{
        h1{
          font-size:21pt;
        }
        p{
          font-size: 16pt;
        }
      }
    }

    @media screen and  (min-width:395px) and (max-width:${({theme})=>theme.screen.ipad}) {
      .mensage{
        h1{
          font-size:21pt;
        }
        p{
          font-size: 16pt;
        }
      }

      .cards{
        flex-direction: column;
        height  : 1650px ;
      }
    }

    @media screen and  (min-width:835px) and (max-width:${({theme})=>theme.screen.mediumScreen}){
      .mensage{
        h1{
          font-size:21pt;
        }
        p{
          font-size: 16pt;
        }
      }
    }
  }
 
`;


export const Section  = styled.section `
  padding: 25px 45px;
  background: ${({bg}) => bg};
  width: 100%;
  height: 100%;
   
  color : ${({textColor}) => textColor};
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width:${({theme})=>theme.screen.ipad}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;
export const Card = styled.div`
  background: ${({theme})=>theme.colors.background};
  max-width: 450px;
  max-height: 750px;
  color: ${({theme})=>theme.colors.textColor};
  border: none;
  border-radius: 6px;
  padding : 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-bottom: 45px;
  }
  h1{
    font-style: italic;
    margin-bottom: 45px;
  }

  @media screen and  (max-width:${({theme})=>theme.screen.pixel3}){
    width: 275px;
    height: 450px;
    img{
      width: 150px;
      height:150px;
    }
    h1{
      font-size:12pt;
    }
    p{
      font-size:10pt;
    }
  }

  @media screen and (min-width:394px) and (max-width:${({theme})=>theme.screen.iphoneXr}){
    width: 325px;
    height: 450px;
    img{
      width: 150px;
      height:150px;
    }
    h1{
      font-size:13pt;
    }
    p{
      font-size:11pt;
    }
  }

  @media screen and  (min-width:1025px) and (max-width:${({theme})=>theme.screen.largeScreen}){
    width: 375px;
    img{
      width: 200px;
      height:200px;
    }
    h1{
      font-size:14pt;
    }
    p{
      font-size:12pt;
    }
  }

  @media screen and  (min-width:769px) and (max-width:${({theme})=>theme.screen.ipadPro}){
    width: 225px;
    img{
      width: 125px;
      height:125px;
    }
    h1{
      font-size:12pt;
    }
    p{
      font-size:11pt;
    }
  }

  @media screen and  (min-width:835px) and (max-width:${({theme})=>theme.screen.mediumScreen}){
    width : 285px;
    img{
      width: 175px;
      height:175px;
    }
  }
`;
export const Footer = styled.footer`
  display : flex;
  justify-content: space-between;
  padding: 25px 45px;
  color : #fff;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 35px 45px;
  width: 100%;
  
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme})=>theme.colors.background};
  .menuicon{
    display: none;
  }
  
  span{
    color: #fff;
  }
  ul{
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: space-between;
    width: 35% ;
    background-color: ${({theme})=>theme.colors.background};
    overflow : hidden;
    li{
      color: ${({theme})=>theme.colors.textColor};
      text-decoration: none;
      list-style: none;
      margin-left: 15px;     
      :hover{
        cursor: pointer;
        color: ${({theme})=>theme.effects.hoverTextColor}
      }
    }
    
    Button{
      background-color: ${({theme})=>theme.colors.textColor};
    }
  
  }


 


  @media (max-width:${({theme})=>theme.screen.ipadPro}){
  width: 100%;
  .menuicon{
    display: block;
  }
  ul{ display:none;}
  .responsiveUl{
    position: absolute;
    top: 75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    

    li{
      font-size: 12pt;
      align-self: flex-start;
      margin-left: 0;
      margin-bottom: 15px;
      color: ${({theme})=>theme.colors.textColor};
    }
    Button{
      align-self: flex-start;
    }
  }
  }

`;