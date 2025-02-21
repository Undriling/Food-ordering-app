import React from "react"
import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("Should load Contact Page", () => {
    test("Should load contact us page", () => {
        render(<Contact />)
    
        const heading = screen.getAllByRole("heading")
    
        expect(heading[0]).toBeInTheDocument();
    });
    test("Should load contact us page", () => {
        render(<Contact />)
    
        const heading = screen.getAllByRole("heading")
    
        expect(heading[1]).toBeInTheDocument();
    });
    test("Should load contact us page", () => {
        render(<Contact />)
    
        const heading = screen.getAllByRole("heading")
    
        expect(heading[2]).toBeInTheDocument();
    });
    test("Should load contact us page", () => {
        render(<Contact />)
    
        const heading = screen.getAllByRole("heading")
    
        expect(heading[2]).toBeInTheDocument();
    })
})
