import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"
import { api, type SerieResponse } from "../../api";
import { Button, Form } from "react-bootstrap";
import "./SerieForm.css"

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

  return <Form onSubmit={onSubmit} className="serieform mt-4 mb-4">
    <Form.Group>
      <Form.Control {...register("title")} placeholder="Nome da série" required />
    </Form.Group>
    <Form.Group>
      <Form.Control {...register("seasons")} type="number" placeholder="Número de temporadas" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Data de lançamento da temporada</Form.Label>
      <Form.Control {...register("releaseDate")} type="date" placeholder="Data de Lançamento da Temporada" />
    </Form.Group>
    <Form.Group>
      <Form.Control {...register("director")} placeholder="Diretor" />
    </Form.Group>
    <Form.Group>
      <Form.Control {...register("production")} placeholder="Produtora" />
    </Form.Group>
    <Form.Group>
      <Form.Control {...register("category")} placeholder="Categoria" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Data em que assistiu a série</Form.Label>
      <Form.Control {...register("watchedAt")} type="date" required placeholder="Data em que assistiu" />
    </Form.Group>

    <Button variant="success" type="submit">{editando ? "Atualizar" : "Cadastrar"} Série</Button>
  </Form>
}