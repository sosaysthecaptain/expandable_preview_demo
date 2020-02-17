import React from 'react'
import './App.scss'

import Preview from './components/Preview'

function App() {
  return (
    <div className="App">
      <div className='thumbnail-row'>
        <Preview url='http://insprd.io/' id='first-place' />
        <Preview url='http://form.gd/' id='second-place' />
        <Preview url='https://common-sensing.com/' id='third-place'/>
      </div>
    </div>
  )


}

export default App;
