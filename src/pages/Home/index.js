import {useState} from 'react';
import {Main,Section,Card,Footer,Nav} from './styles';
import homepage  from '../../assets/images/homepage.svg';
import people1  from '../../assets/images/people1.jpg';
import people2  from '../../assets/images/people2.jpg';
import people3  from '../../assets/images/people3.jpg';
import {Button} from '../../components/Button';
import {MenuOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
export default function Home(){
  const [hamburguerMenu,setHamburguerMenu] = useState(false);
  return (
    <>
       <header>
      <Nav>
      <span>meuLar</span>
      <ul  id="res" className={hamburguerMenu ? 'responsiveUl' : ''}  >
        <li>Imoveis</li>
        <Link to ="/signup" style={{ textDecoration: 'none' }}>
        <li >Cadastrar-se</li>
         </Link> 
        <Button > Login </Button>
      </ul>
     <div onClick={()=>setHamburguerMenu(!hamburguerMenu)} className="menuicon" > <MenuOutlined 
     style={{color: '#ffdd00',fontSize: '24px' }}/> 
     </div>
    </Nav>
    </header>
    <Main>

      <div className="welcomePage">    
      <div className="titleWelcome">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
         <p>Ipsa rerum itaque quos nam veniam aspernatur sit voluptatem corporis eius natus, repellat voluptas quis veritatis anobis repellendus?</p>
      </div>
      </div>

      <Section bg="#000" textColor="#fff">
        <article className="homepageArticle">
        <img src={homepage} alt="home" />
        </article>

        <article className="homepageArticleText">
          <h1> Proin nec magna  </h1>
          <p>
          Aenean volutpat pretium lectus, vitae malesuada quam imperdiet nec. In leo odio, molestie id dolor eu, 
          viverra facilisis velit. Fusce id maximus neque.
          </p>
          <Link to ="/signup" style={{ textDecoration: 'none' }}>
          <Button>
            Cadastrar-se
          </Button>
          </Link>
        </article>
      </Section>

      <Section bg="#ffea00" textColor="#000" >
        <article className="opnions">
          <div className="mensage">
          <h1> Nemo enim ipsam voluptatem quia </h1>
          <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur
          </p>
          </div>
          <div className="cards">

          <Card > 
            <img src={people1} alt="People 1" />
            <h1>
              "It was popularised in"
            </h1>
            <p>
            Duis in sapien sit amet purus ultricies vulputate. Curabitur tincidunt velit a elit lacinia scelerisque. Vestibulum convallis magna 
            ut sem efficitur ullamcorper. Fusce vel ex in lectus elementum iaculis in eget magna.
            </p>
          </Card>

          <Card > 
            <img src={people2} alt="People 2" />
            <h1>
              "It was popularised in"
            </h1>
            <p>
            Duis in sapien sit amet purus ultricies vulputate. Curabitur tincidunt velit a elit lacinia scelerisque. Vestibulum convallis magna 
            ut sem efficitur ullamcorper. Fusce vel ex in lectus elementum iaculis in eget magna.
            </p>
          </Card>

          <Card > 
            <img src={people3} alt="People 3" />
            <h1>
              "It was popularised in"
            </h1>
            <p>
            Duis in sapien sit amet purus ultricies vulputate. Curabitur tincidunt velit a elit lacinia scelerisque. Vestibulum convallis magna 
            ut sem efficitur ullamcorper. Fusce vel ex in lectus elementum iaculis in eget magna.
            </p>
          </Card>

          </div>

          <div className="captureButton">
            <h2>
            Quisque lobortis lacus ut?
            </h2>
            <Button dark >
              Faça parte
            </Button>
          </div>
        </article>
      </Section>
      </Main>

      <Footer>
        <div>
          meuLar
        </div>

        <div>
          Contatos
        </div>


        <div>
          Endereco
        </div>
      </Footer>
    </>
  );
}