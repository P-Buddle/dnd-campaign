import './home.css'
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import image from '../../images/minis.jpg'


const Home = () => {
  return (
    <div>
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
        <div className='container'>
        <div className='image'>
          <img src={image} alt=""/>
        </div>
        
        <div className='title-container'>
          <h4>Four unsuspecting miscreants from Lothondria,<br/> accused of the one crime they didn't commit </h4>
        </div>
        
      </div>
    </div>
  )
}

export default Home