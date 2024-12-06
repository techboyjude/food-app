import Link from "next/link";
import classes from './page.module.css';
import ImageSlideshow from "./components/images/images-slideshow";


export default function Home() {
  return (
      <>
      <header className={classes.header}>
       <div className={classes.slideshow}>
         <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Top Level Food, For All Foodies </h1> 
            <p> Taste and share meal recipes all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community"> Come Join the Food Community</Link>
            <Link href="/meals"> Explore lots of amazing meals</Link>
        </div>
        </div>
        </header>
      <main> 
      <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Top Level Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Top Level Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Top Level Food?</h2>
          <p>
            Top Level Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers all over the globe.
          </p>
          <p>
            Top Level Food is a place to discover new dishes, and to connect
            with other food lovers, close to you or in other parts of the world.
          </p>
        </section>

      </main>
    </>
  )
}