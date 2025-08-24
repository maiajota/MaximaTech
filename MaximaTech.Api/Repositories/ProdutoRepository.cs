using System.Data;
using Dapper;
using MaximaTech.Api.Models;
using MaximaTech.Api.Models.Dto;
using MaximaTech.Api.Repositories.Interfaces;

namespace MaximaTech.Api.Repositories;

public class ProdutoRepository(IDbConnection db) : IProdutoRepository
{
    private readonly IDbConnection _db = db;

    public async Task<IEnumerable<Produto>> GetProdutosAsync()
    {
        var sql = """
            SELECT  id,
                    codigo,
                    descricao,
                    preco,
                    status,
                    departamento_codigo,
                    data_criacao,
                    data_atualizacao,
                    data_exclusao
            FROM produtos
            ORDER BY id;
        """;

        return await _db.QueryAsync<Produto>(sql);
    }

    public async Task<Produto> GetProdutoByIdAsync(Guid id)
    {
        var sql = """
            SELECT  id,
                    codigo,
                    descricao,
                    preco,
                    status,
                    departamento_codigo,
                    data_criacao,
                    data_atualizacao,
                    data_exclusao
            FROM produtos
            WHERE id = @id
        """;

        return await _db.QueryFirstOrDefaultAsync<Produto>(sql, new { id });
    }

    public async Task<Guid> PostProdutoAsync(ProdutoCadastroDto produto)
    {
        var id = Guid.NewGuid();

        var sql = """
            INSERT INTO produtos(id, codigo, descricao, preco, status)
                VALUES(@id, @Codigo, @Descricao, @Preco, @Status)
        """;

        await _db.ExecuteAsync(sql, new
        {
            id,
            produto.Codigo,
            produto.Descricao,
            produto.Preco,
            produto.Status
        });

        return id;
    }

    public async Task<bool> DeleteProdutoByIdAsync(Guid id)
    {
        var sql = """
            UPDATE produtos
                SET data_exclusao = now(),
                    data_atualizacao = now()
                WHERE   id = @id
                        AND data_exclusao IS NULL
        """;

        var isProdutoExcluido = await _db.ExecuteAsync(sql, new { id }) > 0;

        return isProdutoExcluido;
    }

    public async Task<bool> UpdateProdutoByIdAsync(Guid id, ProdutoUpdateDto produto)
    {
        var produtoAtual = await GetProdutoByIdAsync(id);

        if (produtoAtual == null)
            return false;

        var sql = """
            UPDATE produtos
                SET codigo = @Codigo,
                    descricao = @Descricao,
                    preco = @Preco,
                    status = @Status,
                    departamento_codigo = @DepartamentoCodigo,
                    data_atualizacao = now()
                WHERE   id = @id
                        AND data_exclusao IS NULL
        """;

        var isProdutoAtualizado = await _db.ExecuteAsync(sql, new
        {
            id,
            Codigo = produto.Codigo ?? produtoAtual?.Codigo,
            Descricao = produto.Descricao ?? produtoAtual?.Descricao,
            Preco = produto.Preco ?? produtoAtual?.Preco,
            Status = produto.Status ?? produtoAtual?.Status,
            DepartamentoCodigo = produto.DepartamentoCodigo ?? produtoAtual?.DepartamentoCodigo
        }) > 0;

        return isProdutoAtualizado;
    }
}
