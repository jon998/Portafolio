"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Acerca de");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Acerca De</SectionHeading>
      <p className="mb-3">
        Disfruto abordar nuevos desafíos y buscar soluciones o mejoras{" "}
        <span className="font-medium">me gusta liderar</span>, participar y compartir mis conocimientos{" "}
        <span className="font-medium">soy altamente adaptable a situaciones
        cambiantes</span>.{" "}
        <span className="italic">me desenvuelvo eficazmente en diferentes contextos</span>, desarrollo web apps complejas, de escritorio y móviles. <span className="underline">Me encanta</span> desarrollar nuevas ideas desde 0{" "}
        <span className="font-medium">
        Angular, Typescript, Scss, Ionic, Azure, React, Next.js, Node.js, MongoDB, Vue
        </span>
      </p>
    </motion.section>
  );
}
