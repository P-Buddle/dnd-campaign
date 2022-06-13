import React, {useState} from 'react'
import NpcArtorius from '../NpcArtorius'
import NpcCalvin from '../NpcCalvin'
import NpcCheese from '../NpcCheese'
import NpcPaco from '../NpcPaco'
import NpcValencia from '../NpcValencia'
import NpcVarnTulhap from '../NpcVarnTulhap'

const NPCMenu = () => {

  const [para, setPara] = useState('The world is full of interesting people, each one unfolding their own tale')

  const handleClick = (thing) => {
    setPara(thing)
  }

  return (
    <div>
      <div className='title-container'>
        <h1>People</h1>
      </div>
      <div className='grid-container'>
        <div className='container-list'>
          <ul>
            <a href='#textBody'>
              <li><p className='expandable' onClick={() => handleClick(< NpcArtorius/>)}>Arch-Mage Artorius</p></li>
              <li><p className='expandable' onClick={() => handleClick(< NpcCalvin />)}>Sir Calvin Klein</p></li>
              <li><p className='expandable' onClick={() => handleClick(< NpcCheese />)}>Cheese (city guard)</p></li>
              <li><p className='expandable' onClick={() => handleClick(< NpcPaco/>)}>Paco</p></li>
              <li><p className='expandable' onClick={() => handleClick(< NpcValencia/>)}>Valencia</p></li>
              <li><p className='expandable' onClick={() => handleClick(< NpcVarnTulhap/>)}>Varn Tulhap</p></li>
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

export default NPCMenu