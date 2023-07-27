
import main from '../assets/images/main-alternative.svg'
import  Wrapper from'../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'
const landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
           <div className='info'>
               <h1>
                 job<span>Tracking</span>app
               </h1>
               <p>
               Hello, This is Nalam Anunay. Welcome to the Jobify App. 
               To get a better understanding of the app, you can log in using the following credentials:
               Username: anu@gmail.com
               Password: secret
               </p>
               <Link to='/register' className='btn btn-hero'>Login/Register</Link>

           </div>
           <img src={main} alt='job hunt' className='img main-img'/>
        </div>
        
    </Wrapper>
  )
}



export default landing