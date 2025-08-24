using MaximaTech.Api.Models;
using MaximaTech.Api.Models.Dto;

namespace MaximaTech.Api.Repositories.Interfaces;

public interface IProdutoRepository
{
    Task<IEnumerable<Produto>> GetProdutosAsync();
    Task<Produto> GetProdutoByIdAsync(Guid id);
    Task<Guid> PostProdutoAsync(ProdutoCadastroDto produto);
    Task<bool> DeleteProdutoByIdAsync(Guid id);
    Task<bool> UpdateProdutoByIdAsync(Guid id, ProdutoUpdateDto produto);
}
