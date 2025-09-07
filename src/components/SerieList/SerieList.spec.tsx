import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi, } from 'vitest'
import { SerieList } from "./SerieList"

describe("SerieList tests", () => {
    beforeEach(() => {
        vi.mock('../../api', () => {
            return {
                api: {
                    get: vi.fn().mockResolvedValue({ data: [] })
                },
            };
        });
        vi.mock('react-router', () => {
            return {
                ...vi.importActual('react-router'),  // for vitest 
                useNavigate: () => vi.fn(),
            };
        });
    })

    test("test if component renders", () => {
        render(<SerieList />)
        expect(screen.getByText("Título")).toBeDefined()
    })
})