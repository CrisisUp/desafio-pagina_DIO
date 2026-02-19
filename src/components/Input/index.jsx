import React from 'react'

import { Controller } from "react-hook-form";
import {InputContainer, InputText, IconContainer, ErrorText } from './styles';

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) =>  <InputText {...field} {...rest} />}
          />
      </InputContainer>
      {/* Se houver erro, exibimos a mensagem logo abaixo do container */}
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input };