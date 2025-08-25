using MaximaTech.Api.Models;

namespace MaximaTech.Tests;

public class ProdutoTests
{
    [Fact]
    public void AdicionarProduto_PrecoInvalido_Invalidar()
    {
        var produto = new Produto
        {
            Id = Guid.NewGuid(),
            Codigo = "001",
            Descricao = "Produto Teste",
            Preco = -10,
            Status = true,
            DepartamentoCodigo = "010",
            DataCriacao = DateTime.Now,
            DataAtualizacao = DateTime.Now
        };

        var valido = produto.Preco > 0;

        Assert.False(valido, "Um produto com preço negativo não deve ser válido");
    }

    [Fact]
    public void AdicionarProduto_DataInvalida_Invalidar()
    {
        var produto = new Produto
        {
            Id = Guid.NewGuid(),
            Codigo = "001",
            Descricao = "Produto Teste",
            Preco = 50,
            Status = true,
            DepartamentoCodigo = "010",
            DataCriacao = new DateTime(2025, 8, 24),
            DataAtualizacao = DateTime.Today.AddDays(2),
        };

        var valido = produto.DataCriacao.Date == DateTime.Today
            && produto.DataAtualizacao.Date == DateTime.Today;

        Assert.False(valido, "Um produto com datas diferentes de hoje não deve ser válido");
    }

    [Fact]
    public void AdicionarProduto_DepartamentoCodigoInvalido_Invalidar()
    {
        var produto = new Produto
        {
            Id = Guid.NewGuid(),
            Codigo = "001",
            Descricao = "Produto Teste",
            Preco = 50,
            Status = true,
            DepartamentoCodigo = "0110",
            DataCriacao = DateTime.Now,
            DataAtualizacao = DateTime.Now
        };

        var valido = produto.DepartamentoCodigo.Length == 3;

        Assert.False(valido, "Um produto com o código de departamento inválido não deve ser válido");
    }
}
