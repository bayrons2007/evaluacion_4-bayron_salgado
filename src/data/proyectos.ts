export interface Proyecto {
  numero: string;
  categoria: string;
  titulo: string;
  tecnologias: string;
  ruta: string;
}

export const proyectos: Proyecto[] = [
  {
    numero: "01",
    categoria: "VIDEOJUEGO",
    titulo: "Memoria",
    tecnologias: "HTML · CSS · JavaScript",
    ruta: "/proyectos/memoria/index.html",
  },
  {
    numero: "02",
    categoria: "DISEÑO WEB",
    titulo: "Menú digital",
    tecnologias: "HTML · CSS · JavaScript",
    ruta: "/proyectos/menu/index.html",
  },
  {
    numero: "03",
    categoria: "VIDEOJUEGO",
    titulo: "Tetris",
    tecnologias: "HTML · CSS · JavaScript",
    ruta: "/proyectos/tetris/index.html",
  },
];