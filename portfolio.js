import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sobre Mim</Text>
      <Text>Olá! Sou Juliane, estudante de Análise e Desenvolvimento de Sistemas, apaixonada por tecnologia e inovação. Atualmente, sou CEO na startup Apé, onde lidero projetos com uma abordagem ágil, integrando minhas habilidades em gestão de pessoas, produtos e finanças, além de meu conhecimento em banco de dados.

Minha trajetória é marcada por prêmios importantes conquistados junto a Apé, como Early Stage Sebrae, Startup Way Sebrae e Senac, Embratur Lab e Turistech Hub, que reconhecem minha dedicação a projetos criativos, autênticos e centrados no usuário.

Com uma formação prévia como psicóloga clínica, tenho ampla experiência em negociação e mediação de conflitos, o que enriquece minha gestão com empatia e respeito pela diversidade. Sou dinâmica, valorizo a pluralidade e coloco as pessoas em primeiro lugar em todas as minhas ações.

Busco constantemente me especializar em gestão de projetos e negócios, sempre prezando pela inovação e autenticidade. Vamos juntos transformar ideias em realidade!</Text>

      <Text style={styles.heading}>Experiências</Text>
      <Text>CEO & Founder na Apé </Text>

      <Text style={styles.heading}>Hard Skills</Text>
      <Text>- Gestão de Projetos
        - Gestão de pessoas
        - Python
        - SQL
        - JavaScrip
      </Text>

      <Text style={styles.heading}>Soft Skills</Text>
      <Text>- Pró-ativa
        - Tomada de decisão
        - Gestão de tempo
      </Text>

      <Text style={styles.heading}>Cursos e Certificados</Text>
      <Text>- Formação em Python
        - Planejamento e Gestão de Projetos
        - Banco de Dados SQL e NoSQL
      </Text>

      <Text style={styles.heading}>Projetos</Text>
      <Text>- Recifou
        - Apé
        - Sabor&Ando
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default Portfolio;
