import { useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form"
import { useNavigate, useParams } from "react-router"

import "./SerieForm.css"

export interface CamposSerie {
  nome: string
  numTemporadas: number;
  dataLancamentoTemporada: string
  diretor: string
  produtora: string
  categoria: string
  dataAssistiu: string
}

const resolver: Resolver<CamposSerie> = async (values) => {

  const errors: {[key in keyof CamposSerie]?: any} = {}

  if (!values.nome) {
    errors["nome"] = {
      type: "required",
      message: "This is required.",
    }
  }

  return {
    values,
    errors
  }
}


export function SerieForm() {
  const params = useParams()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}, setValue } = useForm<CamposSerie>({resolver})

  const editando = !!params["id"]

  const onSubmit = handleSubmit(data => {
    console.log("dados do form", data)

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
    <input {...register("nome")} placeholder="Nome da série" />
    <input {...register("numTemporadas")} type="number" placeholder="Número de temporadas" />
    <input {...register("dataLancamentoTemporada")} type="date" placeholder="Data de Lançamento da Temporada" />
    <input {...register("diretor")} placeholder="Diretor" />
    <input {...register("produtora")} placeholder="Produtora" />
    <input {...register("categoria")} placeholder="Categoria" />
    <input {...register("dataAssistiu")} type="date" placeholder="Data em que assistiu" />

    <button type="submit">{editando ? "Atualizar" : "Cadastrar"} Série</button>
  </form>
}