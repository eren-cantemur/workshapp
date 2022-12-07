// __tests__/index.test.js

import { render, screen } from '@testing-library/react'
import RegisterPage from '../../pages/register/index'
import '@testing-library/jest-dom'

describe('RegisterPage', () => {
  it('renders page', () => {
    render(<RegisterPage />)
    expect(screen.getByPlaceholderText('name@company.com')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Create an account'})).toBeInTheDocument()
  })
})