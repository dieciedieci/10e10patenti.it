import logo from '../assets/logo.png';
import { routes } from '../data/routes';

export default function Navigation() {
  return (
    <nav className='flex justify-between items-center py-4 md:py-6'>
      <a href="/"><img className='w-[100px] md:w-[170px]' alt='10e10patenti.it Logo' src={logo} /></a>
      <ul className='flex gap-4 md:gap-6'>
        {
          routes.map((link) => (
            <li key={link.value}><a href={link.path} className='text-xs md:text-sm text-gray-700 hover:text-primary transition-colors'>{link.value}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}
