import { useContext } from "react"
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
  const {alert} = useContext(AlertContext)
  return alert!==null && (
    <p className="flex items-start mb-4 space-x-2">
      {alert.type==='error' && (
                <svg
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-6 h-6 stroke-current mr-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                  ></path>
                </svg>
      ) }
      {alert.type==='info' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
      ) }
    
      <strong className="relative bottom-1.5">{alert.msg}</strong>
    </p>
  )
}

export default Alert