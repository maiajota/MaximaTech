using System.ComponentModel.DataAnnotations;

namespace MaximaTech.Api.Models.Dto;

public class ProdutoUpdateDto
{
    [StringLength(20)]
    public string? Codigo { get; set; } = default!;
    [StringLength(255)]
    public string? Descricao { get; set; } = default!;
    [Range(0.01, double.MaxValue)]
    public decimal? Preco { get; set; }
    public bool? Status { get; set; }
    [StringLength(3)]
    public string? DepartamentoCodigo { get; set; }
}
