import React from 'react';
import styles from './Methodologies.module.css';
import Star from '../../components/icons/Star';
import IconX from '../../components/icons/IconX';

const Methodologies = () => {
    return (
        <div className={styles.methodologies}>  
        {/* slide 10 */}
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <h1>Metodologias proprietátias</h1>
                    <p>Conheça nosso jeito de pensar antes de colocar<br />
                    a mão na massa juntos. Se você está nos<br />
                    primeiros passos, podemos compartilhar um<br />
                    bocado de conhecimento: 
                    </p>
                    <div>
                        <div className={styles.star}>
                            <Star />
                        <h3 className={styles.title}>The Humain Creator Method ® </h3>
                        </div>
                        <p>Jornada de <span className={styles.underline}>estrutura de marca com estratégia<br />
                        de conteúdo e mapeamento de concorrentes.</span><br />
                        Book físico com sessões de preenchimento ao<br />
                        vivo.
                        </p>
                    </div>
                    <div>
                        <div className={styles.star}>
                            <Star />
                            <h3 className={styles.title}>The Humain AI Intro ® </h3>
                        </div>
                        <p>Seus primeiros passos em <span className={styles.underline}>IA de forma crítica,<br />
                        prática e ética.</span>Jornada de estudos com aulas<br />
                        gravadas e ao vivo com convidados experts do<br />
                        mercado.
                        </p>
                    </div>
                </div>       
                <div className={styles.containerRight}>
                    <div className={styles.imagesWrapper}>
                        <img
                            className={`${styles.image} ${styles.base}`}
                            src="methodologies1.png"
                            alt="Raisa Francescato, founder"
                        />
                        <img
                            className={`${styles.image} ${styles.top}`}
                            src="methodologies2.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.bottom}`}
                            src="methodologies3.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.right}`}
                            src="methodologies4.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.textImg}>
                        <p>Não somos uma agência nem uma escola,<br />
                        somos um <span className='circle'> hub de cérebros</span> inquietos e<br />
                        mentalidade de <span className='underline'>crescimento colaborativo.</span></p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            {/* slide 11 */}
            <div className={styles.container2}>
                <div className={styles.containerLeft}>
                    <h1>O que torna a <span className={styles.underline }>Humain Kind</span><br />diferente?</h1>
                    <p>Não precisamos de imagens de foguete ou<br />
                    <IconX /> astronautas. Nem dizer que o seu negócio<br />
                    vai decolar com uma fórmula mágica<br />
                    nomeadas por siglas que você não entende.<br />
                    <span class="underline">A responsabilidade é </span><span class="underlineBold">resultado</span>.

                    </p>
                    <div>
                        <p>Sim, a gente usa tecnologia, mas mantemos<br />
                        você no controle. O foco é a <span className="circle"> mão na massa,</span><br />
                        fazemos de verdade e não apenas<br />
                        entregamos "um plano"<IconX /> ou um relatório de<br />
                        consultoria.

                        </p>
                    </div>
                    <div>
                        <p>
                            Somos especialistas em <span className={styles.bold}>relacionamentos</span><br />
                           <span className={styles.bold}>entre marcas e pessoas.</span><span className="underline"> Co-criamos valor</span><br />
                            com os nossos clientes em um caminho<br />
                            virtuoso de <span className="circle">crescimento</span> do negócio e<br />
                            reconhecimento de marca. 
                        </p>
                    </div>
                </div>       
                <div className={styles.containerRight}>
                    <img className={styles.image2} src="methodologies5.png" alt="" />
                    <p>Raisa Francescato, founder</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Methodologies;