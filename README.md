# MaximaTech

Projeto de um CRUD de produtos que fará parte do módulo de administração de um e-commerce.

## Stack utilizada
- .NET 8
- Angular 20
- PostgreSQL
- xUnit

## Pré-requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Passo a passo para rodar
> Obs.: Necessário estar com serviço Docker aberto
1. Clone o repositório
```bash
git clone https://github.com/maiajota/MaximaTech && cd MaximaTech
```
2. Suba os containers
```bash
docker compose build
```
3. Rode os containers
```bash
docker compose up -d
```
4. Acesse os serviços
- **API (.NET)**: [http://localhost:5042](http://localhost:5042)
- **Web (Angular)**: [http://localhost:4200](http://localhost:4200)

5. Para parar os containers
```bash
docker compose down
```
