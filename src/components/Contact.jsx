import React from 'react'
import backgroundImage from '../assets/nnnoise.svg';
import mailBoxIllustration from '../assets/inbox.svg'
import fullInboxAnimate from '../assets/full-inbox-animate.svg';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

  emailjs.sendForm('service_fhly3ko', 'template_0a5u6xn', form.current, 'qHSaTzo0-jQUvluL-')
      .then((result) => {
          console.log(result.text);
          console.log("Mensaje enviado!")
          
      }, (error) => {
          console.log(error.text);
      });
  
    }

  return (
    <div className="bg-repeat h-screen"  style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section>
        <form ref={form} onSubmit={sendEmail}>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 h-screen">
    <div class="justify-center mx-auto text-left align-bottom transition-all transform rounded-lg sm:align-middle sm:max-w-4xl sm:w-full"> {/* bg-white */}
      <div class="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl"> 
        <div class="w-full px-6 py-3">
          <div>
            <div class="mt-3 text-center sm:mt-5">
              <div class="inline-flex items-center w-full">
                <h3 class="font-ubuntu font-light text-6xl text-hardBlue font-medium">Escríbeme</h3>  {/* lg:text-5xl text-neutral-600 text-lg l eading-6 */}
              </div>
              <div class="mt-4 text-base font-medium font-ubuntu text-hardBlue"> {/* text-gray-500 */}
                <p>Quiero saber de ti!</p>
              </div>
            </div>
          </div>

          <div class="mt-6 space-y-2 w-full">
            <div class="flex flex-col mt-4 lg:space-y-2">
              <label for="name" class="sr-only">name</label>
              <input type="text" name="user_name" id="name" class="block w-full px-3 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Tu nombre"/>
            </div>
            <div class="flex flex-col mt-4 lg:space-y-2">
              <label for="email" class="sr-only">email</label>
              <input type="text" name="user_email" id="email" class="block w-full px-3 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Tu email"/>
            </div>
              
            <div class="flex flex-col mt-4 lg:space-y-2">
            <label for="message" class="sr-only">message</label>
              <textarea name="message" id="message" class="block w-full px-3 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Deja tu mensaje aquí"></textarea>
            </div>
            <div class="flex flex-col mt-4 lg:space-y-2">
              <button type="submit" value="Send" class="w-full px-10 py-4 text-base font-medium text-center text-lightBlue transition duration-500 ease-in-out transform bg-mediumBlue rounded-xl hover:bg-hardBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enviar</button> {/*flex items-center justify-center  */}
              {/* <a href="#" type="button" class="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"> Forgot your email? </a> */}
            </div>
          </div>
        </div>
        <div class="order-first w-full lg:block bg-lightBlue"> {/* hidden */}
          {/* <img class="object-cover h-full bg-cover rounded-l-lg" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""/> */}
          {/* <img class="object-cover h-full bg-cover rounded-l-lg mx-auto" src={mailBoxIllustration} alt=""/> */}
          <img class="object-cover h-full bg-cover rounded-l-lg mx-auto" src={fullInboxAnimate} alt=""/>
        </div>
      </div>
    </div>
  </div>
  </form>
</section>


    </div>
  )
}

export default Contact