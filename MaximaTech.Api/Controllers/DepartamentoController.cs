using MaximaTech.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace MaximaTech.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DepartamentoController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Departamento>> GetDepartamentos()
    {
        var departamentos = new List<Departamento>
        {
            new() { Codigo = "010", Descricao = "Bebidas" },
            new() { Codigo = "020", Descricao = "Congelados" },
            new() { Codigo = "030", Descricao = "Laticínios" },
            new() { Codigo = "040", Descricao = "Vegetais" }
        };

        return Ok(departamentos);
    }
}
