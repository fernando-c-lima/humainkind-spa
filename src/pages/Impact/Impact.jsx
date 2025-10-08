    import React from 'react';
    import styles from './Impact.module.css';
    import '../../../src/App.css'; // CSS global
    import Star from '../../components/icons/Star';

    const Impact = () => {
        return (
            <div className={styles.impact}>
                <div className={styles.container}>
                    <div className={styles.containerLeft}>
                        <div className={styles.title}>
                        <h1>O Impacto que criamos</h1>
                        <p>Nossos serviços impulsionam o<br />
                        crescimento sustentável em 3 pilares:</p>
                        </div>
                        <div className={styles.paragraph}>
                            <div className={styles.containerP}>
                                <span className={styles.circle}>1</span>
                                <p>
                                    <span className="bold">Aprendizado & Experiências:</span> tradução de<br />
                                    movimentos globais para a prática através<br />
                                    de reuniões estratégicas, masterclasses e<br />
                                    palestras exclusivas
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.circle}>2</span>
                                <p>
                                    <span className="bold">Construção de produtos:</span> para startups e<br />
                                    novos negócios – pesquisa de mercado, <br />
                                    posicionamento e <span className="underline">previsão de tendências</span>
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.circle}>3</span>
                                <p>
                                    <span className="bold">Estratégia de crescimento: </span><br />
                                    posicionamento através de construção de <br />
                                    <span className="underline">conteúdos escaláveis</span> e estratégias de<br />
                                    marca impulsionadas por IA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerRight}>
                        <div className={styles.imgGraph}>
                            <img src="/graphBg.png" alt="gráfico" />
                        </div>
                    </div>
                </div>
                <div className={styles.container1}>
                     <div className={styles.containerLeft}>
                        <div className={styles.paragraph}>
                            <div className={styles.containerP}>
                                <span className={styles.circle}>1</span>
                                <h1>Aprendizados e<br />
                                experiências</h1>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Masterclasses:</span>Sessões interativas de <span className="circle">treinamento</span><br />
                                    focadas em IA, inovação e estratégias de<br />
                                    marketin<span className="underline">g aplicáveis a casos reais do dia a dia.</span>
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Palestras da Humam Kind network:</span> Tendências,<br />
                                    insights de inovação<span className="underline">e provocações conceituais</span><br />
                                    para sua equipe ou evento
                                </p>
                            </div>
                             <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Imersões focadas</span> em IA, inovação e estratégias<br />
                                    de marketing: Transforme conhecimento em ação <br />
                                    com experiências imersivas para<span className="underline"> criar soluções e </span><br />
                                    <span className="underline">futuros</span>
                                </p>
                            </div>
                        </div>
                     </div>
                     <div className={styles.containerRight}>
                        <div className={styles.imagesWrapper}>
                        <img
                            className={`${styles.image} ${styles.base}`}
                            src="impact1.png"
                            alt="Raisa Francescato, founder"
                        />
                        <img
                            className={`${styles.image} ${styles.top}`}
                            src="impact2.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.bottom}`}
                            src="impact3.png"
                            alt=""
                        />
                        <img
                            className={`${styles.image} ${styles.right}`}
                            src="impact4.png"
                            alt=""
                        />
                    </div>
                        <div className={styles.textImg}>
                            <p>
                                O treinamento de <span className={styles.circleBold}>como pensar</span> no centro de<br />
                                tudo: em um mundo cheio de ruídos,<br />
                                mensagens estruturadas são <span className="bold">poder e</span><br />
                                <span className="bold">diferencial competitivo.</span>
                            </p>
                        </div>
                     </div>
                </div>
                <div className={styles.container2}>
                     <div className={styles.containerLeft}>
                        <div className={styles.paragraph}>
                            <div className={styles.containerP}>
                                <span className={styles.circle}>2</span>
                                <h1>startups e Novos produtos</h1>
                            </div>
                            <div className={styles.paragraph}>
                                <p>
                                    Os serviços acompanham a jornada de<br />
                                    crescimento do brainstorming à otimização com<br />
                                    parceiros de <span className="bold">pesquisa, branding, growth e</span><br />
                                    <span className="bold">tecnologia.</span>
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Descoberta & validação</span> de mercado<br />
                                    Sem vieses, com<span className="underline"> dados estratégicos</span> para<br />
                                    tomada de decisão
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Modelagem de Negócios</span><br />
                                     Criação e estruturação ideal para
                                    <span className="underline">rentabilizar</span> o produto<br />
                                </p>
                            </div>
                             <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Processo de vendas</span><br />
                                    Criação de Pipeline de vendas até a <br />
                                    conversão
                                </p>
                            </div>
                            <div className={styles.containerP}>
                                <span className={styles.star}><Star /></span>
                                <p>
                                    <span className="bold">Customer Success e Suporte</span><br />
                                    Retenção eficiente e  <span className="underline">crescimento sustentável</span>
                                </p>
                            </div>
                        </div>
                     </div>
                     <div className={styles.containerRight}>
                        <div className={styles.imgGraph}>
                            <img src="/graph2Bg.png" alt="gráfico" />
                        </div>
                     </div>
                </div>
            </div>
        );
    };

    export default Impact;