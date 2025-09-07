import { useCallback, useEffect, useState } from "react"
import type { CamposSerie } from "../SerieForm/SerieForm"
import { useNavigate } from "react-router"
import "./SerieList.css"
import { api, type SerieResponse } from "../../api"
import { Button, Table } from "react-bootstrap"

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

    return <Table striped bordered hover className="m-4">
        <thead>
            <tr>
                <th>Título</th>
                <th>Nº temporadas</th>
                <th>Data lançamento</th>
                <th>Diretor</th>
                <th>Produtora</th>
                <th>Categoria</th>
                <th>Assistiu em</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {series.map((serie, index) => {
                return <tr key={index}>
                    <td>{serie.title}</td>
                    <td>{serie.seasons || "??"} temporadas</td>
                    <td>{serie.releaseDate ? new Date(serie.releaseDate).toLocaleDateString() : "---"}</td>
                    <td>{serie.director || "---"}</td>
                    <td>{serie.production || "---"}</td>
                    <td>{serie.category || "---"}</td>
                    <td>{new Date(serie.watchedAt).toLocaleDateString()}</td>
                    <td><Button variant="primary" type="button" onClick={() => handleEditarSerie(serie)}>Editar</Button></td>
                    <td><Button variant="danger" type="button" onClick={() => handleDeletarSerie(serie)}>Excluir</Button></td>
                </tr>
            })}
        </tbody>
    </Table>
}