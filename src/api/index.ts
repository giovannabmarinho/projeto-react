import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export interface SerieResponse {
    id: number;
    title: string;
    seasons: number;
    releaseDate: string;
    director: string;
    production: string;
    category: string;
    watchedAt: string;
}