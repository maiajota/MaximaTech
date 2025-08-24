using System.ComponentModel.DataAnnotations;

namespace MaximaTech.Api.Models;

public class Produto
{
    public Guid Id { get; set; }
    [Required, StringLength(20)]
    public string Codigo { get; set; }
    [Required, StringLength(255)]
    public string Descricao { get; set; }
    [Required, Range(0.01, double.MaxValue, ErrorMessage = "Preço deve ser maior que zero.")]
    public decimal Preco { get; set; }
    [Required]
    public bool Status { get; set; }
    [Required, StringLength(3)]
    public string DepartamentoCodigo { get; set; }
    public DateTime DataCriacao { get; set; }
    public DateTime DataAtualizacao { get; set; }
    public DateTime? DataExclusao { get; set; }
}
