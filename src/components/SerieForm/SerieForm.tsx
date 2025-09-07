import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"

import "./SerieForm.css"
import { api, type SerieResponse } from "../../api";

export interface CamposSerie {
  id?: number;
  title: string
  seasons?: number;
  releaseDate?: string
  director?: string
  production?: string
  category?: string
  watchedAt: string
}

export function SerieForm() {
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<CamposSerie>()

  const editando = !!params["id"]
console.log(errors)
  const onSubmit = handleSubmit(async data => {
    const id = params["id"]
    console.log(id)
    if (id) {
      await api.put("series", {...data, id: Number(id)})
    } else {
      await api.post("series", data)
    }

    navigate("/lista")
  })

  useEffect(() => {
    const id = params["id"]
    if (id) {
      api.get<SerieResponse>("series/" + id).then(response => {
        const serie = response.data
        if (serie) {
          setValue("title", serie.title)
          setValue("category", serie.category)
          setValue("watchedAt", serie.watchedAt)
          setValue("releaseDate", serie.releaseDate)
          setValue("director", serie.director)
          setValue("seasons", serie.seasons)
          setValue("production", serie.production)
        }
      })
    }
  }, [params])

  return <form onSubmit={onSubmit} className="serieform">
    <div>
      <input {...register("title")} placeholder="Nome da série" required />
    </div>
    <div>
      <input {...register("seasons")} type="number" placeholder="Número de temporadas" />
    </div>
    <div>
      <label>Data de lançamento da temporada</label>
      <input {...register("releaseDate")} type="date" placeholder="Data de Lançamento da Temporada" />
    </div>
    <div>
      <input {...register("director")} placeholder="Diretor" />
    </div>
    <div>
      <input {...register("production")} placeholder="Produtora" />
    </div>
    <div>
      <input {...register("category")} placeholder="Categoria" />
    </div>
    <div>
      <label>Data em que assistiu a série</label>
      <input {...register("watchedAt")} type="date" required placeholder="Data em que assistiu" />
    </div>

    <button type="submit">{editando ? "Atualizar" : "Cadastrar"} Série</button>
  </form>
}