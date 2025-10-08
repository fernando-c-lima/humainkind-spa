import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert('Você precisa aceitar os termos de uso!');
      return;
    }
    console.log(formData);
     window.location.href = "https://www.instagram.com/humain.kind/";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        MANTENHA-SE INSPIRADO E CONECTE-<br />
        SE COM AS MENTES VISIONÁRIAS DO<br/>
        MERCADO QUE REALMENTE FAZEM<br />
        ACONTECER
      </h1>
      <p className={styles.subtitle}>
        Junte-se a nós na missão de construir um mercado mais inteligente,<br />
        conectado e ético. Inscreva-se para receber nossos insights sobre<br />
        marketing, tecnologia, startups e conexão humana.
      </p>
        <div className={styles.containerForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Seu melhor email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
                />
                <input
                type="tel"
                name="phone"
                placeholder="+55 99 9999-9999"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
                />
                <input
                type="text"
                name="linkedin"
                placeholder="Linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className={styles.input}
                />
                <label className={styles.checkboxLabel}>
                <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                />
                Aceito os <a href="#">Termos de uso</a>.
                </label>
                <button type="submit" className={styles.button}>
                Entrar na lista
                </button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
