import { InputField } from "./styles";
import InputMask from 'react-input-mask';

export  function Input({placeholder,name,id,error,onChange,onBlur,mask,type,required,onKeyUp}){
    return (
      <InputField>
      <InputMask 
      className="InputMask"
      placeholder={placeholder} 
      name={name} 
      id={id} 
      error={error} 
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      type={type}
      mask={mask}
      onKeyUp={onKeyUp}
      /> 
   </InputField>
    )
}