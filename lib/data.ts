import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/tomaton.jpg";
import rmtdevImg from "@/public/zonaauto.jpg";
import wordanalyticsImg from "@/public/palmeradorada.jpeg";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Acerca de",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BANCO G&T - Desarrollador Movil y Gestion de Proyectos",
    location: "Guatemala, GT",
    description:
      "Desarrollador Front-End de proyectos innovadores y de impacto para el banco G&T",
    icon: React.createElement(LuGraduationCap),
    date: "- Actualmente -",
  },
  {
    title: "Coop. Salcaja - Front-End Dev y DevOps",
    location: "Salcaja, Quetzaltenango",
    description:
      "Gestor de proyectos e iniciativas gerenciales y administrador del despliegue",
    icon: React.createElement(CgWorkAlt),
    date: "- 2022 -",
  },
  {
    title: "Xelacode - Full-Stack Jr Developer",
    location: "Quetzaltenango, Quetzaltenango",
    description:
      "Desarrollador de módulos y administrador de grupos de trabajo para empresas nacionales e internacionales.",
    icon: React.createElement(FaReact),
    date: "- 2019 -",
  },
] as const;

export const projectsData = [
  {
    title: "Tomaton",
    description:
      "Trabaje en un sitio comercial funcional y adaptable a las necesidades de la empresa, se trata de un sitio capaz de realizar compras en linea y entregas a domicilio, el metodo de pago se realiza en efectivo o TC (Quetzaltenango)",
    tags: ["Laravel", "Vue.js", "Mysql", "Tailwind", "PHP"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Zona Auto",
    description:
      "Web app administrativo para control de inventario, contabilidad y conexión directa con la SAT para emitir facturas de las ventas (San Marcos)" ,
    tags: ["Vue 3", "Node JS", "Boostrap", "JWT", "Motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Palmera dorada",
    description:
      "Web app administrativa para control de reservaciones, inventario, contabilidad, insumos de cocina, lavandería y asistencia al cuarto.",
    tags: ["Vue 2", "Sass", "SQL", "Viutify", "Node JS", "AWS EC2"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Arquitectura de software",
  "Desarrollo Web",
  "Desarrollo móvil",
  "Internet de las cosas",
  "Patrones de diseño",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Microservicios",
  "Express",
  "PostgreSQL",
  "Python",
  "Gestión de Proyectos",
  "Sass",
] as const;
