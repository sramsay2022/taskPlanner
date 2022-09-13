import { render, screen } from '@testing-library/react'

import Title from './Title'

test('Renders the title text', () => {
  const text = 'example title text'
  render(<Title text={text} level={3} />)

  expect(screen.getByText(text)).toBeInTheDocument()
})
