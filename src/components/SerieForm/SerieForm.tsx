import { useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form"
import { useNavigate, useParams } from "react-router"

import "./SerieForm.css"

export interface CamposSerie {
  nome: string
  numTemporadas?: number;
  dataLancamentoTemporada?: string
  diretor?: string
  produtora?: string
  categoria?: string
  dataAssistiu: string
}

export function SerieForm() {
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<CamposSerie>()

  const editando = !!params["id"]

  const onSubmit = handleSubmit(data => {
    const seriesCadastradas = JSON.parse(window.localStorage.getItem("series") ?? "[]") as CamposSerie[]
    const id = params["id"]
    if (id) {
      seriesCadastradas[Number(id)] = data
    } else {
      seriesCadastradas.push(data)
    }

    window.localStorage.setItem("series", JSON.stringify(seriesCadastradas))

    navigate("/lista")
  })
  console.log(errors)
  useEffect(() => {
    const id = params["id"]
    if (id) {
      const seriesCadastradas = JSON.parse(window.localStorage.getItem("series") ?? "[]") as CamposSerie[]
      const serie = seriesCadastradas[Number(id)]

      if (serie) {
        setValue("nome", serie.nome)
        setValue("categoria", serie.categoria)
        setValue("dataAssistiu", serie.dataAssistiu)
        setValue("dataLancamentoTemporada", serie.dataLancamentoTemporada)
        setValue("diretor", serie.diretor)
        setValue("numTemporadas", serie.numTemporadas)
        setValue("produtora", serie.produtora)
      }
    }
  }, [params])

  return <form onSubmit={onSubmit} className="serieform">
    <div>
      <input {...register("nome")} placeholder="Nome da série" required />
    </div>
    <div>
      <input {...register("numTemporadas")} type="number" placeholder="Número de temporadas" />
    </div>
    <div>
      <label>Data de lançamento da temporada</label>
      <input {...register("dataLancamentoTemporada")} type="date" placeholder="Data de Lançamento da Temporada" />
    </div>
    <div>
      <input {...register("diretor")} placeholder="Diretor" />
    </div>
    <div>
      <input {...register("produtora")} placeholder="Produtora" />
    </div>
    <div>
      <input {...register("categoria")} placeholder="Categoria" />
    </div>
    <div>
      <label>Data em que assistiu a série</label>
      <input {...register("dataAssistiu")} type="date" required placeholder="Data em que assistiu" />
    </div>

    <button type="submit">{editando ? "Atualizar" : "Cadastrar"} Série</button>
  </form>
}