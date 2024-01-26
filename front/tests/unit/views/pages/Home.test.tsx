import { render, screen } from '@testing-library/react'
import React from 'react'
import { Home } from '../../../../src/views/pages/Home'

describe('Home', () => {
  it('should render each card of each month', () => {
    render(<Home />)
    expect(screen.getAllByRole('article')).toHaveLength(12)
  })
})
