import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi, } from 'vitest'
import { SerieForm } from "./SerieForm"

describe("SerieForm tests", () => {
    beforeEach(() => {
        vi.mock('react-router', () => {
            return {
                ...vi.importActual('react-router'),
                useNavigate: () => vi.fn(),
                useParams: () => vi.fn(),
            };
        });
    })

    test("test if component renders", () => {
        render(<SerieForm />)
        expect(screen.getByPlaceholderText("Data de Lançamento da Temporada")).toBeDefined()
    })
})