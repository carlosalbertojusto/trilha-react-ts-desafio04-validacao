import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"

import { IFormLogin, defaultValues } from "./types"
import { MdLock, MdEmail } from "react-icons/md"

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup
      .string()
      .email("E-mail inválido!")
      .required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "No minímo 6 caracteres")
      .required("Campo Obrigatório!"),
  })
  .required()

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  })

  console.log(isValid)

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <Input
              name="email"
              placeholder="E-mail"
              leftIcon={<MdEmail />}
              control={control}
              errorMessage={errors?.email?.message}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              leftIcon={<MdLock />}
              control={control}
              errorMessage={errors?.password?.message}
            />
            <Button
              disabled={!isValid}
              onClick={() => alert("Login efetuado com sucesso!")}
              title="Entrar"
            />
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export default Login
