import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Sobre } from "./Sobre"

describe("Sobre tests", () => {
    test("test if component renders", () => {
        render(<Sobre />)
        expect(screen.getByText("Sobre")).toBeDefined()
    })
})