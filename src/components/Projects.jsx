import React, { useState } from 'react'
import backgroundImage from '../assets/nnnoise.svg';
import { JavaIconSm } from '../assets/icons/small/JavaIconSm';
import { SpringIconSm } from '../assets/icons/small/SpringIconSm';
import { MySQLIconSm } from '../assets/icons/small/MySQLIconSm';
import { BootstrapIconSm } from '../assets/icons/small/BootstrapIconSm';
import { ThymeleafIconSm } from '../assets/icons/small/ThymeleafIconSm';
import { ReactIconSm } from '../assets/icons/small/ReactIconSm';
import { ExpressIconSm } from '../assets/icons/small/ExpressIconSm';
import { NodeIconSm } from '../assets/icons/small/NodeIconSm';
import { FirebaseIconSm } from '../assets/icons/small/FirebaseIconSm';
import { TailwindIconSm } from '../assets/icons/small/TailwindIconSm';
import { EyeIcon} from '@heroicons/react/24/outline';
import  MyModal  from '../components/MyModal'

const projects = [
  
  {
    id: '1',
    name: 'Proyecto',
    icon: <JavaIconSm/> ,
    iconTwo: <SpringIconSm/>,
    iconThree: <MySQLIconSm/>,
    iconFour: <BootstrapIconSm/>,
    iconFive: <ThymeleafIconSm/>,
    title: 'Biblioteca Egg',
    description: 'Aplicación web que permite tener un registro ordenado de todos los libros que componen la biblioteca.',
    href: 'https://github.com/elgota/bibliotecaEgg.git',
    
  }  
  ,
  {
    id: '2',
    name: 'Proyecto',
    icon: <ReactIconSm/> ,
    iconTwo: <ExpressIconSm/>,
    iconThree: <NodeIconSm/>,
    iconFour: <BootstrapIconSm/>,
    iconFive: <FirebaseIconSm/>,
    title: 'ChatApp',
    description: 'Aplicación de chat con diseño y funcionalidad similar a WhatsApp Web hecha con React JS + Firebase',
    href: 'https://github.com/elgota/chatapp.git',
    
  },

  {
    id: '3',
    name: 'Proyecto',
    icon: <ReactIconSm/> ,
    iconTwo: <ExpressIconSm/>,
    iconThree: <NodeIconSm/>,
    iconFour: <MySQLIconSm/>, 
    title: 'Vivero13',
    description: 'Desarrollo de un ecommerce con stack MERN y MySQL, permitiendo una experiencia de compra en línea optimizada para la venta de plantas y productos relacionados.',
    href: 'https://github.com/elgota/reactEcommerce'
  },

  {
    id: '4',
    name: 'Proyecto',
    icon: <ReactIconSm/>,
    iconTwo: <TailwindIconSm/>,
    title: 'Mi Portfolio',
    description: 'Portfolio personal con ReactJS, Tailwind y EmailJS para el formulario de contacto, ofreciendo una presentación profesional y funcionalidad efectiva.',
    href: 'https://github.com/elgota/myPortfolio.git'
  },

]



function Projects() {

  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className="bg-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="h-full">
        <div className="relative px-5 py-12  mx-auto md:px-12 lg:px-24 max-w-6xl"> {/* w-full */}
          <div className="flex flex-wrap justify-center">
            
              
                {projects.map((item) => (
                  
                  <div className="bg-lightBlue shadow-xl rounded-xl w-64 mx-4 mb-2"> {/* w-full max-w-lg mx-auto*/}
                  <div className="p-6 lg:text-center" key={item.id}>
                    <span className="mb-8 text-xs font-bold tracking-widest text-hardBlue uppercase">{item.name}</span>

                    <h4 className="mt-8 text-2xl font-medium leading-none tracking-tighter lg:text-3xl text-grey mb-2">{item.title}</h4>
                    
                    <p className="mt-3 text-base font-light leading-relaxed text-grey">{item.description}</p>

                    <span className="flex flex-row my-2">{item.icon}{item.iconTwo}{item.iconThree}{item.iconFour}{item.iconFive}</span>

                    <div className="flex flex-row mt-7">
                      <a href={item.href} className="px-5 py-2 text-base font-medium text-center text-lightBlue bg-mediumBlue rounded-xl ml-7" target= "_blank">Repositorio</a>
                      <a href="#" 
                      className="px-12 py-2 text-base font-medium text-center text-lightBlue bg-grey rounded-xl ml-5" 
                      onClick={() => setShowMyModal(true)}>
                        <EyeIcon className="h-6"/>
                      </a>
                    </div>
                    
                  </div>
                  </div>
                
                ))}

            
          </div>
        </div>
        <MyModal onClose={handleOnClose} visible={showMyModal}/>
      </section>
      
    </div>
  )
}

export default Projects