import { useState } from "react"
import Gangs from "../Gangs"
import Guilds from "../Guilds"
import Knights from "../Knights"

const FactionsMenu = () => {

  
  const [para, setPara] = useState('Factions')

  const handleClick = (thing) => {
    setPara(thing)
  }

  return (
    <div>
      <div className='title-container'>
        <h1>Factions</h1>
      </div>

      <div className='grid-container'>
  
        <div className='container-list'>
          <ul>
            <a href='#textBody'>
              <li><p className='expandable' onClick={() => handleClick(< Gangs/>)}>Gangs </p></li>
              <li><p className='expandable' onClick={() => handleClick(< Guilds />)}>Guild Leaders </p></li>
              <li><p className='expandable' onClick={() => handleClick(< Knights />)}>The Knight Brotherhoods</p></li>
            </a>
          </ul>
        </div>
        <div id="#textBody">
          {para}
        </div>
      </div>
   
    </div>
  )
}

export default FactionsMenu