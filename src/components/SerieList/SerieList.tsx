import { useEffect, useState } from "react"
import type { CamposSerie } from "../SerieForm/SerieForm"
import { useNavigate } from "react-router"
import "./SerieList.css"

export function SerieList () {
    const navigate = useNavigate()
    const [series, setSeries] = useState<CamposSerie[]>([])

    useEffect(() => {
        const seriesCadastradas = JSON.parse(window.localStorage.getItem("series") ?? "[]") as CamposSerie[]
        setSeries(seriesCadastradas)
    }, [])

    const handleEditarSerie = (index: number) => {
        navigate("/serie/" + index)
    }

    const handleDeletarSerie = (index: number) => {
        const seriesAtualizadas = [...series]
        seriesAtualizadas.splice(index)
        setSeries(seriesAtualizadas)
        window.localStorage.setItem("series", JSON.stringify(seriesAtualizadas))
    }

    return <div className="serielist">
        {series.map((serie, index) => {
            return <div key={index} className="item">
                <p>{serie.nome}</p>
                <p>{serie.numTemporadas} temporadas</p>
                <p>{new Date(serie.dataLancamentoTemporada).toLocaleDateString()}</p>
                <p>{serie.diretor}</p>
                <p>{serie.produtora}</p>
                <p>{serie.categoria}</p>
                <p>{new Date(serie.dataAssistiu).toLocaleDateString()}</p>
                <button type="button" onClick={() => handleEditarSerie(index)}>Editar</button>
                <button type="button" onClick={() => handleDeletarSerie(index)}>Excluir</button>
            </div>
        })}
    </div>
}