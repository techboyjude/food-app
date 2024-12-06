'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cssclasses from  './nav-link.module.css'

export default function NavLink ({href, children}) {
   const path = usePathname ();
    return (
       <Link 
         href={href} 
          className={ 
            path.startsWith(href) 
            ? `${cssclasses.link} ${cssclasses.active}`
            : cssclasses.link
        }

         > 
         {children} 
          </Link>
    )
}