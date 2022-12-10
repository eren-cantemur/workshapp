// __tests__/index.test.js

import { render, screen } from '@testing-library/react'
import RegisterPage from '../../pages/register/index'
import '@testing-library/jest-dom'

describe('RegisterPage', () => {
  it('renders page', () => {
    render(<RegisterPage />)
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('password')).toBeInTheDocument()
    expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    expect(screen.getByTestId('submit')).toBeInTheDocument()
  })
})