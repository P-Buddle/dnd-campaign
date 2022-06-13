import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'

const PCAlan = () => {
  return (
    <div className='container'>
      <h2>Alanderic the Alopecian (AKA Alan)</h2>
      <div className='text-box'>
        <p>
          A Dwarven Paladin, who suffers from baldness, an incredibly embarrassing ailment for a dwarf.
     
        </p>


      </div>

      <div className='container-characters'>
          
          <Link to='/Thex'>
            <div className='character-box'>
              <h3><BsFillPersonFill /> <br/>Thexidor Dalantor</h3>
            </div>
          </Link>

          <Link to='/Vin'>
            <div className='character-box'>
              <h3><BsFillPersonFill /> <br/>Vinhance Thistlebrook</h3>
            </div>
          </Link>

          <Link to='/Alan'>
            <div className='character-box'>
              <h3><BsFillPersonFill /> <br/> Alanderic the Alopecian</h3>
            </div>
          </Link>
          <Link to='/Castor'>
            <div className='character-box'>
              <h3><BsFillPersonFill /> <br/>Castor Mooncut</h3>
            </div>  
          </Link>

        </div>


     

    </div>
  )
}

export default PCAlan