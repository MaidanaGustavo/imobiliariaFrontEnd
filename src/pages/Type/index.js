import React,{useState} from 'react';
import {Container,ButtonsContainer,FormContainer,ContainerRedirect,UserForm} from './styles'
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {Select} from '../../components/Select';
import { Link } from 'react-router-dom';
export default function Type(){
  const id = localStorage.getItem('id');
  const [buttonsRender,setButtonsRender] = useState(true);
  const [formRender,setFormRender] = useState(false);
  const [redirectLoginRender,setRedirectLoginRender] = useState(false);
  const [formUserRender,setFormUserRender] = useState(false);
  const [tipoCliente,setTipoCliente] = useState('');
  const [userNameErro,setUserNameErro] = useState('');
  const [senhaConfirmacao,setSenhaConfirmacao] = useState('');
  const [errorBorderUsuario,setErrorBorderUsusario] = useState(false);
  const [desabilitarBotao,setDesabilitarBotao] = useState(true);
  const apiURL = 'http://127.0.0.1:3333';

  async function setarTipoCliente(tipo){
    setTipoCliente(tipo);
    setButtonsRender(false);
    setFormRender(true);
  }

  async function limpaInputUsuario(){
    setUserNameErro('');
    setErrorBorderUsusario(false);
  }

  async function cadastrarUsuario(event){
    event.preventDefault();
    const form = document.forms.registerUser;
    const {username,password} = form;
    const data = {
      username : username.value,
      password : password.value,
      pessoa_id: id
    }
    const registerUser = await fetch(apiURL+'/usuarios',{
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    });
    const response = await registerUser.json();
    const {error} = response;
    if(registerUser.status === 400){
      setUserNameErro(error)
      setErrorBorderUsusario(true)
      return false;
    }
    setFormUserRender(false);
    localStorage.clear();
    setRedirectLoginRender(true)

  }

  async function verificarSenha(){
    const form = document.forms.registerUser;
    const {confirmPassword,password} = form;
    if(confirmPassword.value===password.value){
      setSenhaConfirmacao('As senhas são iguais');
      document.getElementById('confirmaSenhaSmall').style.color = '#008000';
      setDesabilitarBotao(false);
      
    }else{
      setSenhaConfirmacao('As senhas são diferentes'); 
      document.getElementById('confirmaSenhaSmall').style.color = '#FF0000';
      setDesabilitarBotao(true);
      
    }

  }
  async function cadastrarCliente(event){
    event.preventDefault();
    const form = document.forms.registrationCliente;
    const {email,sexo,profissao,estadoCivil} = form;
    const data = {
      email : email.value,
      estadoCivil : estadoCivil.value,
      sexo : sexo.value,
      tipo : tipoCliente,
      pessoa_id : id,
      profissao : profissao.value
    }
    const registerCliente = await fetch(apiURL+'/clientes',{
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(data)
    });

    if(registerCliente.status===201){

      setFormRender(false);
      setFormUserRender(true);
    }
    
  }
  return (
    <Container>
     {buttonsRender && (
       <>
        <h1> Certo! Agora escolha o que deseja.</h1>
      <ButtonsContainer>
      <Button onClick={()=> setarTipoCliente('P')}>
        Quero anunciar !
      </Button>

      <Button onClick={()=> setarTipoCliente('C')}>
        Quero alugar/comprar !
      </Button>
      </ButtonsContainer>
       </>
     )}
     {formRender&&(
       <>
       <h1> Mais algumas coisas, por favor. </h1>
       <FormContainer>
          <form method="POST"  id="registrationCliente" onSubmit={(event) =>cadastrarCliente(event)}>
            <Input type="email" name="email" id="email" placeholder=" Email " required />

            <Select name="estadoCivil" id="estadoCivil" required>
            <option value="Solteiro">  Solteiro </option>
            <option value="Casado">  Casado </option>
            <option value="Viuvo">  Viúvo </option>
            <option value="Divorciado">  Divorciado </option>
            </Select>

            <Select name="sexo" id="sexo" required>
            <option value="MASC">  Masculino </option>
            <option value="FEM">  Feminino </option>
            <option value="IND">  Indefinido </option>
            </Select>

            <Input type="text" name="profissao" id="profissao" placeholder=" Profissão "  required/>
            <Button > Enviar </Button>
          </form> 
       </FormContainer>
       </>
     )}

      {formUserRender && (
        <UserForm>
          <h1> Agora, crie o seu usuário  </h1>
          <form action="/" method="POST" id="registerUser" onSubmit={(event) =>cadastrarUsuario(event)}>
          <label htmlFor="username">
            <Input type="text" name="username" placeholder="Nome de usuário" error={errorBorderUsuario} required onChange={limpaInputUsuario}/>
            <small>{userNameErro}</small>
          </ label> 
          <label htmlFor="password">
            <Input type="password" name="password" placeholder="Senha"  required />
          </label>  
          <label htmlFor="confirmPassword">
            <Input type="password" name="confirmPassword" placeholder="Confirme sua senha" onKeyUp={()=>verificarSenha()} required />
          <small id="confirmaSenhaSmall">{senhaConfirmacao}</small>
          </label>  
            <Button disabled={desabilitarBotao}>
              Cadastrar
            </Button>
          </form>
        </UserForm>

      )}

     {redirectLoginRender && (
       <ContainerRedirect>
          <h1>
            Tudo certo !
          </h1>
          <h3>
            Clique no botão abaixo para ir para a página de login
          </h3>
          <Link to ="/signin" style={{ textDecoration: 'none' }}>
          <Button>
            Entrar
          </Button>
          </Link>
       </ContainerRedirect>
      )}

  
    </Container>

  );
}