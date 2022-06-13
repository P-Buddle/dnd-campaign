import React, {useState} from 'react'
import Lothondria from '../Lothondria'
import TowerOfYaksus from '../TowerOfYaksus'
import Vorkhana from '../Vorkhana'
import NewKerrich from '../NewKerrich'
import TheSouthernRealm from '../TheSouthernRealm'
import TheNorthernRealm from '../TheNorthernRealm'
import Dunderic from '../Dunderic'
import Pithquin from '../Pithquin'

const PlacesMenu = () => {

  const [para, setPara] = useState('')

  const handleClick = (thing) => {
    setPara(thing)
  }

  return (
    <div>
      <div className='title-container'>
        <h1>Places</h1>
      </div>
      <div className='grid-container'>
        <div className='container-list'>
          <ul>
            <a href='#textBody'>
              <li><p className='expandable' onClick={() => handleClick(<TheSouthernRealm />)}>The Southern Realm</p></li>
              <li><p className='expandable' onClick={() => handleClick(<Lothondria />)}>Lothondria</p></li>
              <li><p className='expandable' onClick={() => handleClick(<Pithquin />)}>Pithquin</p></li>

              <br/>
              <li><p className='expandable' onClick={() => handleClick(<TheNorthernRealm />)}>The Northern Realm</p></li>
              <li><p className='expandable' onClick={() => handleClick(<TowerOfYaksus />)}>The Abandoned Tower of Yaksus</p></li>
              <li><p className='expandable' onClick={() => handleClick(<NewKerrich />)}>New Kerrich</p></li>
              <li><p className='expandable' onClick={() => handleClick(<Vorkhana />)}>Vorkhana</p></li>
              <br/>
              <li><p className='expandable' onClick={() => handleClick(<Dunderic />)}>Dunderic</p></li>
            </a>
          </ul>
          
        </div>
        <div id='textBody'>
          {para}
        </div>

      </div>
   
    </div>
  )
}

export default PlacesMenu