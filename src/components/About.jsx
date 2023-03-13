import React from 'react'
import backgroundImage from '../assets/nnnoise.svg';  
import { JavaIcon } from '../assets/icons/JavaIcon';
import { SpringIcon } from '../assets/icons/SpringIcon';
import { ReactIcon } from '../assets/icons/ReactIcon';
import { NodeIcon } from '../assets/icons/NodeIcon';
import { JavaScriptIcon } from '../assets/icons/JavaScriptIcon';
import { ExpressIcon } from '../assets/icons/ExpressIcon';
import { HtmlIcon } from '../assets/icons/HtmlIcon';
import { CssIcon } from '../assets/icons/CssIcon';
import { TailwindIcon } from '../assets/icons/TailwindIcon';
import { BootstrapIcon } from '../assets/icons/BootstrapIcon';
import { MySQLIcon } from '../assets/icons/MySQLIcon';


function About() {
  return (
    <div className="bg-repeat h-screen opacity-80" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center sm:w-256 mx-auto h-screen shadow-xl">
        <div className="mb-4">
          <h1 className="font-ubuntu text-7xl font-light w-256 text-center">Sobre mi</h1>
        </div>

        <div className="w-full text-center mb-4">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, obcaecati.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-start w-full sm:w-256 mx-auto">
          <div className="w-128 mx-6">
            <h1 className="text-4xl font-medium mb-2">Conoceme</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat iste voluptatem rem ducimus? Ratione minima nesciunt neque asperiores blanditiis, hic sit aut omnis facilis quibusdam tempore fugit, illo expedita? Corrupti numquam ipsam facere odit tempore nam ab sed accusamus! Praesentium magni, iusto quis rerum qui eius aliquam magnam omnis ab pariatur reprehenderit sequi in error laboriosam quaerat dolores. Accusamus molestiae itaque quisquam rem. Expedita amet porro cumque, hic et dolore sapiente qui ipsa magnam consequatur dicta beatae minima nam nemo voluptate adipisci molestiae dolores sequi. Voluptas, officia. Rerum, ex sed. Officia perferendis minima dolore eveniet ipsa similique autem illo totam?</p>
          </div>
          <div className="w-128 mx-6">
            <h1 className="text-4xl font-medium mb-2">Skills</h1>
            {/* <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex est maiores nulla id, consequatur esse vel animi reiciendis exercitationem! Repellendus inventore, quo odio impedit harum deserunt possimus natus quasi quis doloremque nisi id cumque enim cupiditate velit temporibus maxime fuga modi. Vitae ab, debitis neque commodi earum perferendis. Natus.</p> */}
            <div className="flex flex-wrap">
            <JavaIcon className="mx-5" />
            <SpringIcon />
            <ReactIcon />
            <NodeIcon />
            <ExpressIcon/>
            <JavaScriptIcon />
            <HtmlIcon />
            <CssIcon />
            <TailwindIcon />
            <BootstrapIcon />
            <MySQLIcon />

            </div>
            

            

            
            
          </div>

      </div>
      </div>
      
    </div>
  )
}

export default About