import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Home } from "./Home"

describe("Home tests", () => {
    test("test if component renders", () => {
        render(<Home />)
        expect(screen.getByText("Página inicial")).toBeDefined()
    })
})