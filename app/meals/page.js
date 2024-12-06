import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '../components/meals/meals-grid';
import { getMeals } from '@/env/meals';

async function Meals () {
    const meals = await getMeals ();

    return <MealsGrid meals = {meals} />
}

export default async function MealsPage (){ 
   

    return (<>
        <header className={classes.header}> 
            <h1> 
                Delicious meals, created <span className={classes.highlight}> by you </span>
            </h1>
            <p> Pick your favourite recipe and prepare it at home. It is simple and enjoyable.</p>
            <p className={classes.cta}>
                <Link href = "/meals/share"> 
                Share your favourite recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}> 
            <Suspense fallback ={<p className={classes.loading}> Fetching meals..</p>}>
             <Meals />
            </Suspense>
        </main>
    </>
           
    )
    
}