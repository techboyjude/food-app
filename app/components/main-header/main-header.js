import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from '@/assets/logo.png';
import cssclasses from './main-header.module.css';
import NavLink from "./nav-link";


export default function MainHeader() {
    return ( 
        <>
            <MainHeaderBackground />
            <header className={cssclasses.header}>
              <Link className={cssclasses.logo}href="/">
                    <Image src = {logoImg} alt= "A plate with food on it" priority />
                    Top Level Food
             </Link>

                <nav className={cssclasses.nav}>
                  <ul>
                      <li>
                          <NavLink href = "/meals"> Browse Meals </NavLink>
                      </li>

                      <li>
                          <NavLink href="/community"> Foodies Community </NavLink>
                     </li>
                    </ul>
        
                 </nav>
             </header>
        </>

    )

}