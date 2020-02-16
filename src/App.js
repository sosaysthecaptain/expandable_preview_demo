import React from 'react'
import './App.scss'

import Microlink from '@microlink/react'


import Preview from './components/Preview'

function App() {
  return (
    <div className="App">
      <div className='thumbnail-row'>
        {/* <Microlink url='https://instagram.com/p/Bu1-PpyHmCn/' size='large' /> */}



        {/* <Preview url={'nytimes.com'} /> */}
        {/* <Preview url={'lemonde.fr'} /> */}
        {/* <Preview url={'https://www.spiegel.de/'} /> */}
        <Preview url={'https://www.milieugrotesque.com/'} />
      </div>
    </div>
  )

}

export default App;
