import {useNavigate} from 'react-router-dom'
import './backbutton.css'
import {IoIosArrowBack} from 'react-icons/io'

const BackButton = () => {
    const navigate = useNavigate()

  return (
    <div>
        <button className='btn btn-back' onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </button>
    </div>
  )
}

export default BackButton
