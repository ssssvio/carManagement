# Car Management API

Esta é uma API RESTful para gerenciamento de carros. A API permite criar, ler, atualizar e excluir informações sobre carros.

## Tecnologias Utilizadas

- Node.js
- Express
- Mocha
- Fs

## Endpoints

### 1. Listar todos os carros

- **Método:** `GET`
- **URL:** `/vehicles`
- **Resposta:**
  - **200 OK**: Retorna uma lista de todos os carros.

### 2. Obter um carro por ID

- **Método:** `GET`
- **URL:** `/vehicles/:id`
- **Parâmetros:**
  - `id`: O ID do carro que você deseja buscar.
- **Resposta:**
  - **200 OK**: Retorna os detalhes do carro.
  - **404 Not Found**: Se o carro não for encontrado.

### 3. Criar um novo carro

- **Método:** `POST`
- **URL:** `/vehicles`
- **Corpo da Requisição:**
  ```json
  {
    "placa": "ABC-1234",
    "chassi": "123451212123336",
    "renavam": "654320000001",
    "modelo": "Corolla",
    "marca": "Toyota",
    "ano": 2022
  }
  ```
- **Resposta:**
  - 201 Created: Retorna o carro criado.

### 4. Atualizar um carro existente

- **Método:** `PUT`
- **URL:** `/vehicles/:id`
- **Parâmetros:**
  - `id`: O ID do carro que você deseja atualizar.
- **Corpo da Requisição:**
  ```json
  {
    "placa": "ABC-1234",
    "chassi": "123451212127777",
    "renavam": "654320121201",
    "modelo": "Hilux",
    "marca": "Toyota",
    "ano": 2025
  }
  ```
- **Resposta:**
  - **200 OK**: Retorna o carro atualizado.
  - **404 Not Found**: Se o carro não for encontrado.

### 5. Deletar um carro

- **Método:** `DELETE`
- **URL:** `/vehicles/:id`
- **Parâmetros:**
  - `id`: O ID do carro que você deseja excluir.
- **Resposta:**
  - **204 No Content**: Se a exclusão for bem-sucedida.
  - **404 Not Found**: Se o carro não for encontrado.

## Execução da API

1. Clone o repositório:

   ```bash
   git clone git@github.com:ssssvio/carRental.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo (.env) e defina (PORT) como 3000 :

   ```bash
   cp .env.example .env
   ```

4. Inicie o servidor:
   ```bash
   npm run start
   ```

O servidor estará rodando em `http://localhost:3000`.

## Rodar os Testes

Para rodar os testes, use o comando:

```bash
npm test
```

## Contribuição

Se você deseja contribuir com este projeto, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
