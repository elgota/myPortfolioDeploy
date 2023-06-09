import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import profile from './../assets/profile.png';

const navigation = [
//   { name: 'Dashboard', href: '#', current: false },
  { id: '/about-me', name: 'Sobre mi', href: '/about-me', current: false },
  { id: '/projects', name: 'Proyectos', href: '/projects', current: false },
  { id: '/contact', name: 'Contacto', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-mediumBlue to-hardBlue sticky-top-0"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center sm:justify-between">
              {
                <div className="rounded-lg text-lightBlue text-4xl sm:hidden ml-12">
                  <a href="https://github.com/elgota" className="rounded-lg p-2">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>

                  <a href="https://www.linkedin.com/in/pablo-gottardini/" className="rounded-lg p-2">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>

                  <a href="mailto:jpgottardini@outlook.es" className="rounded-lg p-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>

                  <a href="https://twitter.com/el__gota" className="rounded-lg p-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              }

              <div className="ml-7">
                <Link to="/">
                  <img src={profile} className="h-14 rounded-full"></img>
                </Link>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-center">
                    {navigation.map((item) => (
                      <Link
                        to={`${item.id}`}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-lightBlue"
                            : "text-lightBlue hover:bg-mediumBlue hover:text-lightBlue",
                          "px-3 py-2 rounded-md font-ubuntu text-lg font-bold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-lightBlue"
                      : "text-lightBlue hover:bg-mediumBlue hover:text-lightBlue",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
