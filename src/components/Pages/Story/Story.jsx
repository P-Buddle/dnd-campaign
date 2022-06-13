
import { useState } from 'react'
import Amulet from './Amulet'
import MainStory from './MainStory'
import './story.css'


const Story = () => {
  const [para, setPara] = useState(<MainStory />)

  const handleClick = (thing) => {
    setPara(thing)
  }

  return (
    <div>
      <div className='story-container'>
        
        
        <div className='text-box story-box'>
          {para}
        </div>
        
      

        <div className='menu-box'>
          <p className='expandable' onClick={() => handleClick(<Amulet />)}>Malcolm Powder and the Knights Tectonica</p>
          <p className='expandable' onClick={() => handleClick(<MainStory />)}>Fugitives</p>
        </div> 
      </div>
    </div>
  )
}

export default Story