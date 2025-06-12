import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/autoscuola10e10/' },
  { name: 'Instagram', href: 'https://www.instagram.com/_dieci_e_dieci_/' },
];

export default function Footer() {
  return (
    <nav className='flex justify-between items-center py-4 md:py-6'>
      <a href="/"><img className='w-[100px] md:w-[170px]' alt='10e10patenti.it Logo' src={logo} /></a>
      <ul className='flex gap-4 md:gap-6'>
        {
          navLinks.map((link) => (
            <li key={link.name}><a href={link.href} className='text-gray-700 hover:text-red-500 transition-colors'>{link.name}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}
