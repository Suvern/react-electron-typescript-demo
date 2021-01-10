import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Hello from './components/Hello'

ReactDOM.render(
  <Hello name='hello' value={10} />,
  document.getElementById('root') as HTMLElement
)
