import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'

const PCCastor = () => {
  return (
    <div className='container'>
      <h2>Castor Mooncut</h2>
      
        <div className='text-box'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores molestiae porro reiciendis, vitae ad unde. Sit totam similique dolores saepe quas, eum error suscipit laudantium odit iusto quisquam illum qui?
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

export default PCCastor