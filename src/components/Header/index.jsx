import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';

import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture
} from './styles';

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  // Estado local para controlar o que o usuário digita na busca
  const [searchText, setSearchText] = useState('');

  // Buscando os dados da sessão (seu "ticket" de acesso)
  const userJson = localStorage.getItem('@dio:user');
  const user = userJson ? JSON.parse(userJson) : null;

  // Função para encerrar a sessão (Logout)
  const handleLogout = () => {
    localStorage.removeItem('@dio:user'); // Invalida o acesso local
    navigate('/'); // Redireciona para a Home
  };

  // Função que lida com a digitação e envia o filtro para o Feed
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Se a função onSearch foi passada via props (no Feed), ela é executada
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          {/* Logo com link para a Home */}
          <img
            src={logo}
            alt="Logo da DIO"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />

          {/* Se o usuário estiver autenticado, mostra a busca e o menu interno */}
          {user ? (
            <>
              <BuscarInputContainer>
                <Input
                  placeholder='Buscar...'
                  value={searchText}
                  onChange={handleInputChange}
                />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>

        <Row>
          {user ? (
            <>
              {/* Foto de perfil fixa (pode ser dinâmica no futuro) */}
              <UserPicture
                src={user?.image || "https://avatars.githubusercontent.com/u/45184516?v=4"}
                onClick={() => navigate('/profile')}
                title="Editar meu perfil"
                style={{ cursor: 'pointer' }}
              />

              {/* Exibe apenas o primeiro nome do usuário cadastrado */}
              <span style={{ color: '#FFF', marginRight: '10px' }}>
                {user.name?.split(' ')[0]}
              </span>

              {/* Botão de encerramento de sessão */}
              <MenuRight onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Sair
              </MenuRight>
            </>
          ) : (
            <>
              {/* Opções para usuários não logados */}
              <MenuRight onClick={() => navigate('/')}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate('/login')} />
              <Button title="Cadastrar" onClick={() => navigate('/signup')} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header };