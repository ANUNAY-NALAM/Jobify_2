
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
                 I'm baby whatever pork belly palo santo dreamcatcher cupping blackbird
                spyplane lumbersexual art party prism lyft disrupt kickstarter shaman 
                cred. Godard helvetica ugh pinterest disrupt shabby chic lo-fi actually pop-up biodiesel retro fixie neutra wolf. 
               </p>
               <Link to='/register' className='btn btn-hero'>Login/Register</Link>

           </div>
           <img src={main} alt='job hunt' className='img main-img'/>
        </div>
        
    </Wrapper>
  )
}



export default landing