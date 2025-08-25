using MaximaTech.Api.Models;
using MaximaTech.Api.Models.Dto;
using MaximaTech.Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MaximaTech.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProdutoController(IProdutoRepository produtoRepository) : ControllerBase
{
    private readonly IProdutoRepository _produtoRepository = produtoRepository;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produto>>> GetProdutosAsync()
    {
        var produtos = await _produtoRepository.GetProdutosAsync();

        return produtos != null ? Ok(produtos) : NotFound();
    }

    [HttpGet("{id:guid}", Name = "GetProdutoById")]
    public async Task<ActionResult<Produto>> GetProdutoByIdAsync(Guid id)
    {
        var produto = await _produtoRepository.GetProdutoByIdAsync(id);

        return produto != null ? Ok(produto) : NotFound();
    }

    [HttpPost]
    [Consumes("application/json")]
    public async Task<ActionResult> PostProdutoAsync([FromBody] ProdutoCadastroDto produto)
    {
        if (!ModelState.IsValid)
            return ValidationProblem(ModelState);

        var idProduto = await _produtoRepository.PostProdutoAsync(produto);

        return CreatedAtRoute("GetProdutoById", new { id = idProduto }, produto);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteProdutoByIdAsync(Guid id)
    {
        var isSucesso = await _produtoRepository.DeleteProdutoByIdAsync(id);

        return isSucesso ? NoContent() : NotFound();
    }
    
    [HttpPut("{id:guid}")]
    public async Task<ActionResult> UpdateProdutoByIdAsync(Guid id, [FromBody] ProdutoUpdateDto produto)
    {
        var isSucesso = await _produtoRepository.UpdateProdutoByIdAsync(id, produto);

        return isSucesso ? NoContent() : NotFound();
    }
}
