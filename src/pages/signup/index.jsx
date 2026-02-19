import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'; 
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { api } from '../../services/api';
import { signupSchema } from '../../utils/signupSchema'; 
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const SignUp = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchema),       mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            // Ofuscando a senha (Encoding Base64 para simular segurança de rede)
            const hashedPassword = btoa(formData.password);
            const { data } = await api.post('/users', {
                name: formData.name,
                email: formData.email,
                senha: hashedPassword,
                createdAt: new Date().toISOString(),
            });

            if (data.id) {
                toast.success('🚀 Cadastro realizado com sucesso!');
                // Salvamos no localStorage para o ProtectedRoute liberar o acesso
                localStorage.setItem('@dio:user', JSON.stringify(data));
                navigate('/feed');
            }
        } catch (e) {
            console.error("Falha na comunicação: ", e);
            toast.error('❌ Erro ao cadastrar. Verifique sua conexão.');
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com especialistas, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            name="name" 
                            placeholder="Nome completo"
                            leftIcon={<MdPerson color="#8647AD" />}
                            control={control} 
                            errorMessage={errors.name?.message} 
                        />
                        <Input 
                            name="email" 
                            placeholder="E-mail"
                            leftIcon={<MdEmail color="#8647AD" />}
                            control={control} 
                            errorMessage={errors.email?.message} 
                        />
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Senha" 
                            leftIcon={<MdLock color="#8647AD" />} 
                            control={control} 
                            errorMessage={errors.password?.message} 
                        />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                    </Row>
                    <Row>
                        <EsqueciText>Já tenho conta. <CriarText onClick={() => navigate('/login')}>Fazer login</CriarText></EsqueciText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
}

export { SignUp };