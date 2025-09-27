import React from 'react';
import styles from './Terms.module.css'

const Terms = () => {
    return (
        <div className={styles.terms}>
            <div>
                <p>Termos e uso</p>
                <p>Ao utilizar este site, você está de acordo com:</p>
            </div>
            <div>
                <p>
                    1.⁠ ⁠Publicação de Conteúdo: Você autoriza a publicação do conteúdo que fornecer, em conformidade com<br/>
                    a Lei Geral de Proteção de Dados (LGPD). Asseguramos que seus dados pessoais serão tratados com a<br/>
                     máxima confidencialidade e segurança, em estrita observância às disposições da LGPD.
                </p>
            </div>
            <div>
                <p>
                    2.⁠ ⁠Direitos de Propriedade Intelectual: Você concorda com os termos relacionados aos direitos de<br/>
                    propriedade intelectual referentes aos artigos que enviar para o site. Isso inclui a concessão de uma<br/>
                    licença não exclusiva para que o site possa publicar, distribuir e exibir o conteúdo, sempre respeitando<br/>
                    os seus direitos autorais.
                </p>
            </div>
            <div>
                <p>
                    3.⁠ ⁠Recebimento de Notificações e E-mails: Você aceita receber notificações e e-mails do nosso site, que<br/>
                    incluem atualizações, newsletters, promoções e outras comunicações pertinentes. Caso deseje, você<br/>
                    pode optar por não receber essas comunicações a qualquer momento, utilizando o link de cancelamento<br/>
                    de inscrição disponível em nossos e-mails.
                </p>
            </div>
        </div>
    );
};

export default Terms;