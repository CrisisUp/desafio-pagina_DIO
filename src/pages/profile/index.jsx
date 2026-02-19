import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Title, Column } from './styles';

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('@dio:user'));

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: user?.name,
            email: user?.email,
            image: user?.image || "https://avatars.githubusercontent.com/u/45184516?v=4"
        }
    });

    const onSubmit = async (formData) => {
        try {
            // O comando PUT substitui o recurso inteiro no servidor local (porta 8001)
            const { data } = await api.put(`/users/${user.id}`, {
                ...user, // Mantemos os dados antigos (como a senha criptografada)
                name: formData.name,
                image: formData.image
            });

            // Atualizamos o "ticket" local para refletir a mudança no Header
            localStorage.setItem('@dio:user', JSON.stringify(data));
            alert("Perfil atualizado com sucesso!");
            navigate('/feed');
        } catch (e) {
            alert("Erro ao atualizar perfil.");
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>Meu Perfil</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" control={control} placeholder="Nome completo" />
                        <Input name="image" control={control} placeholder="URL da foto" />
                        <Button title="Salvar Alterações" type="submit" variant="secondary" />
                    </form>
                </Column>
            </Container>
        </>
    );
}

export { Profile };