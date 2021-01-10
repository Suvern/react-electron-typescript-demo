import * as React from 'react'
import {Button} from 'antd'
import './App.less'

const App: React.FC = () => {
  return (
    <div className='app'>
      electron!
      <Button type='primary'>Antd</Button>
    </div>
  )
}

export default App
