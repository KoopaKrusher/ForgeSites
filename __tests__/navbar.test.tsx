import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import React from 'react'

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}))

describe('Navbar', () => {
  it('renders expected links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })
})
