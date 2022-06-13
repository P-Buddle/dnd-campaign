
import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'

const PCThex = () => {
  return (
    <div className='container'>
    <h2>Thexidor Dalanthor (AKA Thex)</h2>
    <div className='text-box'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad excepturi pariatur nisi consequatur? Aperiam autem, quisquam at, esse ea quidem, voluptas deserunt explicabo neque mollitia harum molestias corrupti. Saepe.
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

export default PCThex