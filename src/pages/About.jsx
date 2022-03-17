import { useContext } from 'react'
import Alert from '../components/layout/Alert'
import AlertContext from '../context/alert/AlertContext'
import { AlertProvider } from '../context/alert/AlertContext'
const About = () => {
  const {setAlert} = useContext(AlertContext)
  const handleClick = () => {
    setAlert('Please access to the admin section to make sure you have the authorize to do so!','info')
  }
  return (
    <>
      <AlertProvider>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app to search GitHub profiles and see profile details. This
          project is part of the
          <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
            {' '}
            React Front To Back
          </a>{' '}
          Udemy course by
          <strong>
            <a href='https://traversymedia.com'> Brad Traversy</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <Alert/>
        <p className='text-lg text-gray-400'>
          Layout By:
          <a className='text-white' href='https://twitter.com/hassibmoddasser'>
            Hassib Moddasser
          </a>
        </p>
        <button className="btn btn-primary mt-10" onClick={handleClick}>Report</button>
        
      </AlertProvider>
    </>
  )
}

export default About