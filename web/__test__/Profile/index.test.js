// __tests__/index.test.js

import { render, screen, container } from '@testing-library/react'
import ProfilePage from '../../pages/profile/index'
import '@testing-library/jest-dom'

describe('ProfilePage', () => {
  it('renders page', () => {
    render(<ProfilePage />)
    expect(screen.getByRole('button', {name: 'Edit'})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: 'Create workshop'})).toBeInTheDocument()
  })
})