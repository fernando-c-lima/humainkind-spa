import React from 'react';
import '../../../src/App.css'; // CSS global
import styles from './Products.module.css';
import Star from '../../components/icons/Star';

const Products = () => {
    return (
        <div className={styles.product}>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                        <div className={styles.paragraph}>
                            <div className={styles.containerP}>
                                <span className={styles.circle}>3</span>
                                <div className={styles.title}>
                                <h1>Produtos digitais</h1>
                            </div>    
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Posicionamento Digital: </span><br />
                                    <span className="underline">Founder/Community-led</span> growth:<br />
                                    Brandperformance do founder como<br />
                                    influencer para vender;<br />
                                    Estratégia de comunidade/movimento<br />
                                    de indentificação, conversão e <span className="underline">fidelização</span>
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Lançamento Digital: </span><br />
                                    Estratégia de entrada de mercado através<br />
                                    de marketing de lançamento,<br />
                                    posicionamento e<span className="underline">campanhas de vendas</span><br />
                                    Estratégias de conteúdo impulsionadas por<br />
                                    IA, automações de fluxos de trabalho.
                                </p>
                            </div>
                        </div>
                     </div>
                     <div className={styles.containerRight}>
                        <div className={styles.imgP}>
                            <img src="/productsBg.png" alt="produtos" />
                        </div>
                     </div>
            </div>
            <div className={styles.container2}>
                     <div className={styles.containerLeft}>
                        <div className={styles.paragraph}>
                            <div className={styles.containerT}>
                                <span className={styles.circle}>3</span>
                                <div className={styles.title}>
                                <h1>Produtos digitais</h1>
                                <h1>Agentes de IA - jornadas<br />
                                humanas & felizes</h1>
                            </div>    
                            </div>
                            <div className={styles.paragraphText}>
                               <p>
                                    Conversas operadas por agentes IA <br />
                                    integrados de copy otimizados com a <br />
                                    <span className="underlineBold">premissa human-in-the loop</span> e para:<br />
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    Realizar <span className="bold">atendimento</span> de clientes entre<br />
                                    departamentos e experts via Linkedin,<br />
                                    WhatsApp e outros canais com agentes;
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    Para<span className="bold"> compras, cobranças e feedbacks</span> via<br />
                                    Linkedin, WhatsApp e outros com<br />
                                    <span className="underline">posicionamento <span className="circle">ético</span> de IA</span>
                                </p>
                            </div>
                        </div>
                     </div>
                     <div className={styles.containerRight}>
                         <div className={styles.imagesWrapper}>
                        <img
                            className={`${styles.image} ${styles.base}`}
                            src="products1.png"
                            alt="Raisa Francescato, founder"
                        />
                        <img
                            className={`${styles.image} ${styles.top}`}
                            src="products2.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.bottom}`}
                            src="products3.png"
                            alt=""
                        />
                    </div>
                        <div className={styles.textImg}>
                            <p>
                                Mais do que apenas criar agentes como<br />
                                bots<span className="underline">: preparamos o transbordo humano,</span><br />
                                antecipamos situações, focamos na<span className="bold">melhor</span><br />
                                <span className="bold">experiência do seu cliente.</span>
                            </p>
                        </div>
                     </div>
                </div>
        </div>
    );
};

export default Products;