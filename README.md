# 🚀 Desafio DIO: Front-end Estilizado com React

Bem-vindo ao repositório do projeto desenvolvido para o desafio da DIO! Esta é uma aplicação de rede social focada em tecnologia, onde implementamos conceitos avançados de Front-end, desde a estilização com Styled Components até o controle de acesso com Rotas Protegidas.

## 🛠️ Tecnologias e Ferramentas

* **React + Vite:** Ambiente de desenvolvimento ultra-rápido.

* **Styled Components:** Estilização baseada em componentes com suporte a temas.

* **React Router DOM:** Gerenciamento de rotas e navegação.

* **JSON Server:** Backend fake rodando na porta 8001 para simular uma API real.

* **React Hook Form + Yup:** Validação de formulários e controle de inputs.

Axios: Cliente HTTP para chamadas à API.

## 🏗️ Estrutura do Projeto (O "Core")

### 1. Sistema de Temas (theme.js)

Centralizamos todas as cores e espaçamentos para facilitar a manutenção, como um servidor de políticas (GPO):

```JavaScript
export const theme = {
  colors: {
    background: '#151515',
    primary: '#E4105D',
    success: '#23DD7A',
    progressBg: '#3B3B3B',
    // ...
  }
}
```

### 2. Rotas e Segurança (App.jsx)

Implementamos um "firewall" de rotas onde o acesso ao Feed é permitido apenas com um "token" no localStorage:

```JavaScript
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('@dio:user');
  return user ? children : <Navigate to="/login" />;
};
```

### 3. Filtro em Tempo Real (Feed)

No Feed, configuramos um filtro dinâmico que não sobrecarrega a rede, processando os dados localmente:

```JavaScript
const handleSearch = (text) => {
  const filtered = users.filter(user => 
    user.name.toLowerCase().includes(text.toLowerCase())
  );
  setFilteredUsers(filtered);
};
```

## 📋 Como Rodar o Laboratório

Clone o repositório:

```Bash
git clone <https://github.com/CrisisUp/desafio-pagina_DIO.git>
```

Instale as dependências:

```Bash
npm install
```

Inicie o Backend (Servidor de Dados):

## Em um terminal separado

```Bash
npx json-server --watch db.json --port 8001
```

Inicie o Frontend:

```Bash
npm run dev
```

## ✨ Funcionalidades Implementadas

[x] Cadastro de usuários com persistência no db.json.

[x] Login com validação de credenciais.

[x] Logout com limpeza de sessão.

[x] Edição de Perfil (api.put) para troca de nome e foto.

[x] Ranking Top 5 ordenado por percentual de progresso.

[x] Busca dinâmica de usuários no Header.

Desenvolvido por Cristiano - Estudante de Redes no SENAI São Caetano. 🎓
