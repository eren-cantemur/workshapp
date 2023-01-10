// __tests__/index.test.js

import { render, screen } from '@testing-library/react'
import LoginPage from '../../pages/login/index'
import '@testing-library/jest-dom'

describe('LoginPage', () => {
  it('renders page', () => {
    render(<LoginPage />)
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('password')).toBeInTheDocument()
    expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    expect(screen.getByTestId('remember')).toBeInTheDocument()
    expect(screen.getByTestId('forget-password')).toBeInTheDocument()
    expect(screen.getByTestId('submit')).toBeInTheDocument()
    expect(screen.getByTestId('sign-up')).toBeInTheDocument()
  })
})