import logo from '../assets/logo.png';

const navLinks = [
  { name: 'App Androd & iOS', href: '/mobile-app' },
  { name: 'Marketing e Social', href: '/marketing' },
  { name: 'Branding', href: '/branding' },
  { name: 'Contattaci', href: 'mailto:info@10e10patenti.it' },
];

export default function Navigation() {
  return (
    <nav className='flex justify-between items-center py-4 md:py-6'>
      <a href="/"><img className='w-[100px] md:w-[170px]' alt='10e10patenti.it Logo' src={logo} /></a>
      <ul className='flex gap-4 md:gap-6'>
        {
          navLinks.map((link) => (
            <li key={link.name}><a href={link.href} className='text-gray-700 hover:text-primary transition-colors'>{link.name}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}
