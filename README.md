# MaximaTech

Projeto de um CRUD de produtos que fará parte do módulo de administração de um e-commerce.

## Stack utilizada

![.NET](https://img.shields.io/badge/.NET-8.0-blue?logo=dotnet&logoColor=white)

![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/Postgres-17-blue?logo=postgresql&logoColor=white)

![Tests](https://img.shields.io/badge/tests-xUnit-green?logo=githubactions&logoColor=white)

## Banco de dados
Query necessária para rodar o banco

```sql
CREATE DATABASE maxima_tech;
```

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS produtos (
    id UUID PRIMARY KEY DEFAULT UUID_GENERATE_V4(),
    codigo VARCHAR(20) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco NUMERIC(10, 2) NOT NULL,
    status BOOLEAN NOT NULL,
    departamento_codigo VARCHAR(3),
    data_criacao TIMESTAMP NOT NULL DEFAULT NOW(),
    data_atualizacao TIMESTAMP NOT NULL DEFAULT NOW(),
    data_exclusao TIMESTAMP
);
```

- O login do PostgreSQL utilizado foi:
```bash
Username=postgres;Password=123;
```
Caso necessário, deve ser alterado em:
MaximaTech\MaximaTech.Api\appsettings.json

## Passo a passo para rodar localmente
1. Clone o repositório
```bash
git clone https://github.com/maiajota/MaximaTech && cd MaximaTech
```

2. Abra um terminal e rode
```bash
cd MaximaTech.Api && dotnet run --launch-profile https
```

3. Abra outro terminal e rode
```bash
cd MaximaTech.Web && ng serve --ssl
```

4. Acesse os serviços
- **API (.NET)**: [https://localhost:5042](https://localhost:5042)
- **Web (Angular)**: [https://localhost:4200](https://localhost:4200)

## Testes
Para rodar os testes da aplicação, rode o comando
```bash
dotnet test
```
