using System.ComponentModel.DataAnnotations;

namespace MaximaTech.Api.Models.Dto;

public class ProdutoCadastroDto
{
    [Required, StringLength(20)]
    public string Codigo { get; set; } = default!;
    [Required, StringLength(255)]
    public string Descricao { get; set; } = default!;
    [Required, Range(0.01, double.MaxValue)]
    public decimal Preco { get; set; }
    [Required]
    public bool Status { get; set; }
    [Required, StringLength(3)]
    public string DepartamentoCodigo { get; set; }
}
