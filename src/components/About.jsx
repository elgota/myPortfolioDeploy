import React from "react";
import backgroundImage from "../assets/nnnoise.svg";
import { JavaIcon } from "../assets/icons/JavaIcon";
import { SpringIcon } from "../assets/icons/SpringIcon";
import { ReactIcon } from "../assets/icons/ReactIcon";
import { NodeIcon } from "../assets/icons/NodeIcon";
import { JavaScriptIcon } from "../assets/icons/JavaScriptIcon";
import { ExpressIcon } from "../assets/icons/ExpressIcon";
import { HtmlIcon } from "../assets/icons/HtmlIcon";
import { CssIcon } from "../assets/icons/CssIcon";
import { TailwindIcon } from "../assets/icons/TailwindIcon";
import { BootstrapIcon } from "../assets/icons/BootstrapIcon";
import { MySQLIcon } from "../assets/icons/MySQLIcon";

function About() {
  return (
    <div
      className="bg-repeat h-full "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center sm:w-256 mx-auto shadow-xl h-full">
        {/* <div className="mb-4 mt-20">
          <h1 className="font-ubuntu text-7xl font-light w-256 text-center">
            Sobre mi
          </h1>
        </div> */}

        {/* <div className="w-full text-center mb-4">
          <p className="text-lg">
            Si llegaste hasta aquí quiero darte las gracias por tu tiempo!
          </p>
        </div> */}

        <div className="flex flex-col sm:flex-row sm:justify-start w-full sm:w-256 mx-auto mt-10">
          <div className="sm:w-128 sm:mx-6 w-full mx-2">
            <h1 className="text-4xl font-medium mb-2 text-hardBlue mb-5">Soy Juan Pablo</h1>
            <p className="text-md text-justify mb-5 text-grey">
              Vivo de Mendoza-Argentina y como Desarrollador Front End creo 
              aplicaciones que brinden soluciones efectivas y creativas. 
              Puedes mirar mis trabajos en la sección "Proyectos"
            </p>
            <p className="text-md text-justify mb-5 text-grey">
              LLevo 2 años formándome como desarrollador. Hice proyectos utilizando 
              Java Spring, Thymeleaf y MySQL durante mi cursado en Egg Education. 
              También tuve mi experiencia trainee como back-end en Hunteando, 
              junto a un equipo bajo metodologías Ágiles
            </p>
            <p className="text-md text-justify mb-5 text-grey">
              Me encanta ayudar. Siento que es muy gratificante y me hace sentir
              muy bien! Si necesitas una mano no dudes en escribirme!
            </p>
            <p className="text-md text-justify mb-5 text-grey">
              Hoy busco una oportunidad de trabajo para seguir creciendo como
              desarrolador, mejorando mis skills y aprendiendo nuevas
              tecnologías y frameworks. Te invito a que me contactes a través de
              mis RR SS o por el formulario de contacto!
            </p>
          </div>
          <div className="sm-w-128 sm:mx-6 w-full h-screen mx-1">
            <h1 className="text-4xl font-medium mb-2 text-hardBlue">Skills</h1>
            {/* <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex est maiores nulla id, consequatur esse vel animi reiciendis exercitationem! Repellendus inventore, quo odio impedit harum deserunt possimus natus quasi quis doloremque nisi id cumque enim cupiditate velit temporibus maxime fuga modi. Vitae ab, debitis neque commodi earum perferendis. Natus.</p> */}
            <div className="flex flex-wrap">
              <JavaIcon className="mx-5" />
              <SpringIcon />
              <ReactIcon />
              <NodeIcon />
              <ExpressIcon />
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
  );
}

export default About;
