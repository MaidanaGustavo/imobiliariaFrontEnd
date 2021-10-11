import React,{useState} from 'react';
import {Container,InputGroup,Page,ImgGroup,ItemsGroup} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import signup from '../../assets/images/signup.svg';
import Type from '../Type';


export default function SignUp(){
  const [ErrorCPFLabel,setErrorCPFLabel] = useState('');
  const [errorBorderCPF,setErrorBorderCPF] = useState(false);
  const [cadastroRender,setCadastroRender] = useState(true);
  const [tipoRender,setTipoRender] = useState(false);
  const apiURL = 'http://127.0.0.1:3333';
  


  async function limpaInputCPF(){
    setErrorCPFLabel('');
    setErrorBorderCPF(false);
  }
  async function send(event){
    const form = document.forms.registration;
    const {
      cpf,
      nome,
      sobrenome,
      rua,
      bairro,
      cep,
      numero,
      cidade,
      uf,
      complemento
    } = form;
    
    
    const cpfLimpo = cpf.value.replace(/[^\w\s]/gi, '');
    const cepLimpo = cep.value.replace(/[^\w\s]/gi, '');
    const data = {
      cpf : cpfLimpo,
      nome : nome.value,
      sobrenome : sobrenome.value,
      rua : rua.value,
      bairro : bairro.value,
      cep : cepLimpo,
      numero : numero.value,
      cidade : cidade.value,
      uf : uf.value,
      complemento: complemento.value
    }
    event.preventDefault();
  
      const registerPessoa = await fetch(apiURL+'/pessoas',{
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
      });
      
      const response = await registerPessoa.json();
      if(registerPessoa.status===404){
        const {error}  =response;
        setErrorCPFLabel(error);
        console.log(error)
        setErrorBorderCPF(true);
        return false;
      }
      console.log(response);
      setCadastroRender(false);
      setTipoRender(true);
      const key = 'id';
      const {id} = response;
      localStorage.setItem(key, id);
      

  }

  async function searchCep(){
    const form = document.forms.registration;
    const {cep,rua,bairro,cidade,uf} = form;
    const cepLimpo = cep.value.replace(/\D/g, '');
    const buscaCep = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const response = await buscaCep.json();
    console.log(response)
    rua.value = response.logradouro;
    bairro.value = response.bairro;
    cidade.value = response.localidade;
    uf.value = response.uf;
  }


  return  (
    <>
      
    <Page>
    <Container >
    {cadastroRender&&(
      <>
       <h2>Falta pouco para fazer parte da nossa comunidade !</h2>
       <h3>Vamos saber um pouco mais de você!</h3>
       <ItemsGroup> 
         
     <InputGroup>
     <form action="/" id="registration" name="registration" onSubmit={(event) =>send(event)}>
         <div>
 
         <label htmlFor="nome">
         <Input type="text" name="nome" placeholder="Nome" required />
         </label>
 
         <label htmlFor="sobrenome"> 
         <Input type="text" name="sobrenome" placeholder="Sobrenome" required/>
         </label>
 
         <label htmlFor="cpf">
         <Input type="text" name="cpf" 
         placeholder="CPF" 
         required minLength="11" 
         maxLength="11" 
         error={errorBorderCPF}  
         onChange={()=> limpaInputCPF()} 
         mask="999.999.999-99"/>
         <small>{ErrorCPFLabel}</small>
         </label>
 
         </div>
 
         <div>
         <label htmlFor="cep">
         <Input type="text" name="cep" placeholder="Cep" onBlur={() => searchCep()} required/>
         </label>  
         <label htmlFor="rua">
         <Input type="text" name="rua" placeholder="Rua" required />
         </label>  
         <label htmlFor="bairro">
         <Input type="text" name="bairro" placeholder="Bairro" required />
         </label>  
         </div>
 
         <div>
         <label htmlFor="numero">
         <Input type="text" name="numero" placeholder="Numero" required/>
         </label>  
         <label htmlFor="uf">
         <Input type="text" name="uf" placeholder="UF" required />
         </label>
 
         <label htmlFor="cidade">
         <Input type="text" name="cidade" placeholder="Cidade" required/>
         </label>
         </div>
         <label htmlFor="complemento">
         <Input type="text" name="complemento" placeholder="Complemento"/>
         </label>
         <Button >Cadastrar</Button>
         </form>
     </InputGroup>
     <ImgGroup> 
       <img src={signup} alt="sign" />
       </ImgGroup>
      </ItemsGroup> 
      </>
    )}
     {tipoRender &&(<Type />)}
    </Container>
    </Page>
  

    </>
  );
}