import logo from '../assets/logo.png';
import { routes } from '../data/routes';

export default function Footer() {
  return (
    <footer className='flex items-center py-8 md:py-12'>
      <div className='w-full flex flex-col md:flex-row justify-between items-start gap-8'>
        <a href="/"><img className='w-[100px] md:w-[170px]' alt='10e10patenti.it Logo' src={logo} /></a>

        <div className='flex flex-row gap-12 text-xs md:text-sm'>
          <div>
            <h3 className="text-gray-400">Navigation</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              {routes.map((link) => (
                <li key={link.value} className='inline-block mr-4'>
                  <a href={link.path} className='text-gray-700 hover:text-primary transition-colors'>{link.value}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400">Contacts</h3>
            <ul className='flex flex-col gap-2 mt-4'>
              <li className='inline-block mr-4'>
                <a href="mailto:info@autoscuola.com" className='text-gray-700 hover:text-primary transition-colors'>info@autoscuola.com</a>
              </li>
              <li className='inline-block mr-4'>
                <a href="tel:0110620875" className='text-gray-700 hover:text-primary transition-colors'>011 062 0875</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
