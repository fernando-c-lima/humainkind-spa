import React from 'react'
import styles from './Home.module.css';

const Home = () => {
return (
    <div className={styles.home}>
        <div className={styles.container}>
            <div className={styles.title}>
                    <h2>human, who?</h2>
            </div>
            <div className={styles.text}>
                    <p>
                            Estratégias personalizadas para marcas<br />
                            que buscam crescer de forma acelerada:<br />
                            aumentar as suas <span class={styles.underlineBold}>
                            vendas <span class="circle">e se posicionar</span>
                            </span><br />
                            além do óbvio. Desenvolvida em rede com<br />
                            criatividade por especialistas em marketing,<br />
                            inovação e tecnologia. 
                    </p>
            </div>
        </div>
        {/* <div className='container2'>
            <div className='list'>
                    <ul>
                            <li>Strategic Core</li>
                            <li>Brand Essence</li>
                            <li>Brand Values Identity</li>
                            <li>Positioning Offer</li>
                            <li>Strategic References</li>
                    </ul>
            </div>
            <div className='arrow'>
                <CurvedArrowLeftUp
                    fontSize="inherit"
                    sx={{
                        color: '#000',
                   }}
                    />
            </div>
            <div  className='heart'>
                <img src="heart.png" alt="coração" />
            </div>
            <div className='text2'>
                <p>
                Each section includes a<br />
                practical provocation to<br />
                define, and express your own<br />
                brand or personal platform
                </p>
            </div>
        </div>
        <div className='container3'>
             <div className='founder-text'>
                    <h2>Founder's Note</h2>
                    <p>What personal message would you share to open the door for others?</p>
            </div>
             <div className='risk'>
                <SlightCurveLine
                    fontSize="inherit"
                    sx={{
                        color: '#000',
                   }}
                    />
            </div>
            <div className='star'>
            <StarOutlineIcon /></div>
        </div>
        <div className='world'>
            <h2>THE WORLD</h2>
            <div  className='img-man'>
                <img src="man.png" alt="homem" />
            </div>
        </div>
        <div className='me'>
            <h2>ME</h2>
        </div> */}
        <div className={styles.container2}>
            <div className={styles.images}>
                    <img className={styles.imgHome} src="home1.png" alt="hero" />
                    <img className={styles.imgHome} src="home2.png" alt="hero" />
                    <img className={styles.imgHome} src="home3.png" alt="hero" />
            </div>
                <div className={styles.textIa}>
                    <p>Impulsionado por IA, feito com criatividade,<span class={styles.underline}> centrado no humano.</span></p>
                </div>
        </div>
    </div>
)
}

export default Home