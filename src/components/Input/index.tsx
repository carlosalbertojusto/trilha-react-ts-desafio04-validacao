import React from "react"
import { Controller } from "react-hook-form"

import {
  InputContainer,
  InputText,
  IconContainer,
  ErrorMessage,
} from "./styles"

import { IInputProps } from "./types"

const Input = ({
  leftIcon,
  name,
  errorMessage,
  control,
  ...rest
}: IInputProps) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <InputText
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
      />
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </InputContainer>
  )
}

export { Input }
