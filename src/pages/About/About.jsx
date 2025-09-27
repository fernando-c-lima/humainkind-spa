import React from 'react';
import styles from './About.module.css';
import '../../../src/App.css'; // CSS global
import Star from '../../components/icons/Star';
import IconX from '../../components/icons/IconX';

const About = () => {
    return (
        <div className={styles.about}>
                {/* slide 12 */}  
            <div className={styles.container}>                          
                <div className={styles.containerLeft}>
                <h1>our network</h1>
                <p>Com mais de 15 anos de experiência,<br />
                    <span className="bold">Raisa Francescato</span> lidera iniciativas de,<br />
                    marketing e desenvolve <span className="bold">parcerias,</span><br />
                    <span className="bold">estratégicas globais</span> que impulsionam o,<br />
                    crescimento e a inovação -,<br />
                    principalmente para serviços de,<br />
                    <span className="underline">tecnologia e educação.</span>
                </p>
                <p>
                    Hoje, como fundadora da Humain Kind - <br />
                    iniciativa idealizada há anos - articula<br />
                    projetos com colegas do mercado<br />
                    <span className="circle">associados pelo propósito</span> de<br />
                    <span className="underlineBold">protagonismo humano. </span>
                </p>
                <p>
                    Executar peças não significa muito mais,<br />
                    o diferencial está na <span className={styles.circleBold}>experiência</span> e<br />
                    agilidade de <span className="underline">decisão astuta e sensível.</span>
                </p>
                </div>
                <div className={styles.containerRight}>
                    <div className={styles.imagesWrapper}>
                        <img
                            className={`${styles.image} ${styles.base}`}
                            src="about1.png"
                            alt="Raisa Francescato, founder"
                        />
                        <img
                            className={`${styles.image} ${styles.top}`}
                            src="about2.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.bottom}`}
                            src="about3.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.right}`}
                            src="about4.png"
                            alt=""
                        />
                    </div>
                    <p>
                        <span className="bold">Visão, parcerias e muita mão na massa</span> é<br />
                        o que tem trazido resultados e chamando<br />
                        a atenção de pessoas que são<br />
                        referências do <span className="underline">mercado internacional.</span>
                    </p>
                </div>
            </div>
            <div className={styles.container2}>
                  <div className={styles.containerLeft}>
                        <h1>a internet não precisa<br />
                        de mais um post seu.</h1>
                        <p>
                            Estamos inundados de conteúdo<br />
                            gerado por IA, que remetem a teoria<br />
                            da internet morta e tendências<br />
                            passageiras. As marcas estão<br />
                            perdendo autenticidade e conexão.<br />
                            Seja <span className="bold">mais que uma notificação.</span><Star /> 
                        </p>
                        <p>
                            O nosso foco é trazer estratégias<br />
                            que realmente façam sentido para<br />
                            o <span className="circle">cliente final,</span><span className="underlineBold">centradas no</span><br />
                            <span className="underlineBold">humano e conexões significativas.</span>
                        </p>
                  </div>
                    <div className={styles.containerRight}>
                        <div className={styles.containerImg}>
                            <img
                                className={styles.image2}
                                src="about5.png"
                                alt=""
                            />
                            <img
                                className={styles.noneImg}
                                src="about7.png"
                                alt="heart"
                            />
                        </div>  
                        <div className={styles.textImg}>
                            <p>
                                O objetivo é <span className="underline">aumentar a</span><br />
                                <span className="underline">previsibilidade nas tomadas</span><br />
                                <span className="underline">de decisão baseadas em dados</span> e<br />
                                estratégia no digital e  no<br />
                                mercado evitando tentativas<br />
                                frustradas e investimentos errados. <IconX className={styles.inlineIcon}/>
                            </p>
                        </div>
                    
                    </div>
            </div>
        </div>
    );
};

export default About;