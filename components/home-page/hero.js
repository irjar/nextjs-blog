import Image from 'next/image';
import classes from './hero.module.css';

function Hero(){
 return <section className={classes.hero}>
     <div className={classes.image}>
         <Image src='/images/site/Irmina.png' alt='An image showing Irmina' width={300} height={300} />
     </div>
     <h1>Hi, I'm Irmina</h1>
     <p>I blog about web development.</p>
 </section>
}

export default Hero;