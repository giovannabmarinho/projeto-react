import { useForm } from "react-hook-form"
import { useParams } from "react-router"


interface CamposSerie {
  nome: string
}

export function SerieForm() {
  const params = useParams()
  const {register, handleSubmit, formState: {errors} } = useForm<CamposSerie>()

  const onSubmit = handleSubmit(data => {
    console.log("dados do form", data)
  })

  return <div>
    <input {...register("nome")} placeholder="Nome da série" />
  </div>
}