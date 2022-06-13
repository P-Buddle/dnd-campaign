import {Link} from 'react-router-dom'

const NpcArtorius = () => {
  return (
    <div>
      <div className='title-container'>
        <h1>Artorius Kepana Moltera</h1>
      </div>
      <div className='text-box'>
        <p><em>An elderly human man, balding with whisps of white hair on the sides of his head and a long fu-manchu style moustache </em></p>
        <p>
          The Arch-Mage is one of the <Link to='/factions/guilds'><u>Guild-Leaders of Lothondria</u></Link>. 
        </p>
        <p>
          Previously, his work as an arcane archeologist within the <a href='#vorkhana'><u>Vorkhana</u></a> institute had made him a very well respected member of the establishment.
        </p>
        <p>
          Suspected by Valencia of being involved in something sinister, he becomes the subject of your investigations as you attempt to clear your names.
        </p>
      </div>
        
    </div>
  )
}

export default NpcArtorius