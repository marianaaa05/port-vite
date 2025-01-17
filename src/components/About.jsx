import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#02302D] text-#D37A0E">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-slate-900">
              Acerca de
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              👋 Hola. Soy Diego, mucho gusto. Por favor, echa un vistazo
              al nuevo Portafolio. 👋
            </p>
          </div>
          <div>
            <p className="font-mono text-gray-900">
              Titulado Ingeniería Ejecución en Computación e Informática y
              también como Técnico de Nivel Superior en Programación y Análisis
              de Sistemas. Capacitado para realizar labores de análisis de
              requerimientos, desarrollo de software, aplicaciones y/o
              soluciones tecnológicas, como también aseguramiento de la calidad
              del software, utilizando diversas técnicas, entornos de operación,
              lenguajes de programación y tecnologías.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
