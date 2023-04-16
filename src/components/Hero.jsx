import React from 'react'
import backgroundImage from '../assets/nnnoise.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-repeat h-screen" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="flex flex-wrap sm:flex-row flex-col justify-center sm:justify-between items-center h-screen">
            <div className="hidden sm:block flex flex-col bg-gradient-to-r from-mediumBlue to-hardBlue h-72 w-16 rounded-lg text-lightBlue text-4xl">
                    <a href="https://github.com/elgota" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 ' target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/pablo-gottardini/" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 ' target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="mailto:jpgottardini@outlook.es" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 ' target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>

                    <a href="https://twitter.com/el__gota" className='hidden sm:block hover:bg-mediumBlue rounded-lg p-4 ' target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
            </div>
            <div className="border-solid p-5 rounded-lg shadow-xl text-center sm:h-80 h-full sm:w-128 items-center">
                {/* <h4 className="font-ubuntu text-2xl font-light mb-2 text-hardBlue text-grey">Hola! Mi nombre es</h4> */}
                <h1 className="text-7xl font-bold mb-5 text-hardBlue">Juan Pablo</h1>
                <p className="font-ubuntu text-2xl font-light mb-10 text-grey">Desarrollador Web Front-End</p>
                
                <Link class="font-ubuntu text-2xl font-light px-5 py-4 text-center text-lightBlue transition duration-500 ease-in-out transform bg-gradient-to-r from-mediumBlue to-hardBlue lg:px-10 rounded-xl hover:shadow-xl hover:bg-lightBlue" to={"/projects"}>Mis proyectos </Link>
                {/* <FontAwesomeIcon icon={faArrowAltCircleRight} /> */}
            </div>
            <div className="mr-8">
            </div>
        </div>
        
        

    </div>
  )
}

export default Hero