import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // Estado para os dados filtrados
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleGetUsers = async () => {
      try {
        // Buscando os usuários no seu banco de dados local
        const { data } = await api.get('/users');
        setUsers(data);
        setFilteredUsers(data); // Inicialmente, a lista filtrada é igual à completa
      } catch (e) {
        console.error("Erro ao carregar usuários da porta 8001", e);
      } finally {
        // Simulamos um pequeno delay para o Skeleton brilhar (padrão UX)
        setTimeout(() => setLoading(false), 1500);
      }
    };

    handleGetUsers();
  }, []);

  // Esta é a função que o Header vai chamar via props
  const handleSearch = (text) => {
    const searchTerm = text.toLowerCase();

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm)
    );

    setFilteredUsers(filtered);
  };

  return (
    <>
      {/* Passamos a função handleSearch para o Header */}
      <Header onSearch={handleSearch} />
      <Container>
        <Column $flex={3}>
          <Title>Feed</Title>
          {loading ? (
            <>
              <Skeleton height={300} style={{ marginBottom: '20px' }} baseColor="#2d2d2d" highlightColor="#444" />
              <Skeleton height={300} baseColor="#2d2d2d" highlightColor="#444" />
            </>
          ) : (
            // IMPORTANTE: Mapeamos o filteredUsers em vez de users
            filteredUsers.map(user => (
              <Card
                key={user.id}
                name={user.name}
                image="https://avatars.githubusercontent.com/u/45184516?v=4"
              />
            ))
          )}
          {!loading && filteredUsers.length === 0 && (
            <p style={{ color: '#FFF' }}>Nenhum usuário encontrado.</p>
          )}
        </Column>

        <Column $flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          {loading ? (
            <Skeleton count={5} height={40} style={{ marginTop: '10px' }} baseColor="#2d2d2d" highlightColor="#444" />
          ) : (
            /* Criamos uma cópia do array e ordenamos antes de fazer o map */
            [...users]
              .sort((a, b) => (b.percentual || 0) - (a.percentual || 0)) // Ordenação decrescente
              .slice(0, 5)
              .map((user, index) => (
                <UserInfo
                  key={`ranking-${user.id}`}
                  name={user.name}
                  image="https://avatars.githubusercontent.com/u/45184516?v=4"
                  /* Se o seu db.json tiver o campo 'percentual', usamos ele. 
                     Caso contrário, mantemos o cálculo baseado no índice para teste */
                  $percentual={user.percentual || (100 - (index * 20))}
                />
              ))
          )}
        </Column>
      </Container>
    </>
  );
};

export { Feed };