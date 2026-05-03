import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        about: "ABOUT",
        portfolio: "PORTFOLIO", 
        contact: "CONTACT"
      },
      about: {
        title: "WISSAL YAHIA",
        description: "Final Year Software Engineer Student . AI Learner specializing in ML RAG LLM NLP CV Data Science & Analytics . A versatile professional who can be described as a Full-Stack Developer or a Multidisciplinary Software Engineer.",
        downloadCV: "Download CV"
      },
      portfolio: {
        education: "EDUCATION",
        experience: "EXPERIENCE",
        projects: "SELF-DRIVEN MODELING",
        university: "University of Science Gabes",
        degree: "Licence Diploma | Software Engineering and Information Systems",
        internship: "KIFAHI",
        internshipRole: "Internship | Bi Bot & Data Analysis"
      },
      contact: {
        connect: "Connect",
        footer: "Made by @Me thanks for visiting my portfolio ♡"
      }
    }
  },
  fr: {
    translation: {
      header: {
        about: "À PROPOS",
        portfolio: "PORTFOLIO",
        contact: "CONTACT"
      },
      about: {
        title: "WISSAL YAHIA",
        description: "Étudiante en dernière année de génie logiciel . Apprenante en IA spécialisée en ML RAG LLM NLP CV Data Science & Analytics . Une professionnelle polyvalente qui peut être décrite comme une Développeuse Full-Stack ou Ingénieur Logicielle Multidisciplinaire.",
        downloadCV: "Télécharger CV"
      },
      portfolio: {
        education: "FORMATION",
        experience: "EXPÉRIENCE",
        projects: "MODÉLISATION AUTONOME",
        university: "Université des Sciences de Gabès",
        degree: "Licence | Génie Logiciel et Systèmes d'Information",
        internship: "KIFAHI",
        internshipRole: "Stage | Bi Bot & Analyse de Données"
      },
      contact: {
        connect: "Connectez-vous",
        footer: "Fait par @Me merci de visiter mon portfolio ♡"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
