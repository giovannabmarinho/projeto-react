import { useCallback, useEffect, useState } from "react"
import type { CamposSerie } from "../SerieForm/SerieForm"
import { useNavigate } from "react-router"
import "./SerieList.css"
import { api, type SerieResponse } from "../../api"

export function SerieList() {
    const navigate = useNavigate()
    const [series, setSeries] = useState<CamposSerie[]>([])

    const fetchSeries = useCallback(() => {
        api.get<SerieResponse[]>("series").then(response => {
            setSeries(response.data)
        })
    }, [])

    useEffect(() => {
        fetchSeries()
    }, [fetchSeries])

    const handleEditarSerie = (serie: CamposSerie) => {
        navigate("/serie/" + serie.id)
    }

    const handleDeletarSerie = (serie: CamposSerie) => {
        api.delete("series/" + serie.id).then(() => {
            fetchSeries()
        })
    }

    return <div className="serielist">
        {series.map((serie, index) => {
            return <div key={index} className="item">
                <p>{serie.title}</p>
                <p>{serie.seasons || "??"} temporadas</p>
                <p>{serie.releaseDate ? new Date(serie.releaseDate).toLocaleDateString() : "---"}</p>
                <p>{serie.director || "---"}</p>
                <p>{serie.production || "---"}</p>
                <p>{serie.category || "---"}</p>
                <p>{new Date(serie.watchedAt).toLocaleDateString()}</p>
                <button type="button" onClick={() => handleEditarSerie(serie)}>Editar</button>
                <button type="button" onClick={() => handleDeletarSerie(serie)}>Excluir</button>
            </div>
        })}
    </div>
}