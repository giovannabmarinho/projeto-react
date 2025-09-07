import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { NavBar } from "./NavBar"

describe("NavBar tests", () => {
    test("test if component renders", () => {
        render(<NavBar />)
        expect(screen.getByText("Home")).toBeDefined()
    })
})