export interface Stat {
  label: string;
  value: string;
}

export interface Producto {
  id: string;
  nombre: string;
  tag: string;
  precio: string;
  img: string;
  descripcion: string;
  stats: Stat[];
}

export const productos: Producto[] = [
  {
    id: "mini-snack-personal-infiel",
    nombre: "MINI SNACK\nPERSONAL INFIEL",
    tag: "BOWL MINI",
    precio: "S/ 9.00",
    img: "/images/001 producto.png",
    descripcion: "La porción perfecta para un antojo rápido.",
    stats: [
      { label: "PROTEÍNA", value: "CHICHARRÓN" },
      { label: "GUARNICIÓN", value: "CAMOTE FRITO" },
      { label: "EXTRAS", value: "SARZA CRIOLLA" },
      { label: "SABOR", value: "TOQUE SECRETO" }
    ]
  },
  {
    id: "mini-snack-especial-infiel",
    nombre: "MINI SNACK\nESPECIAL INFIEL",
    tag: "BOWL MINI ESPECIAL",
    precio: "S/ 13.00",
    img: "/images/002 producto.png",
    descripcion: "Para los que siempre quieren más, en tamaño compacto.",
    stats: [
      { label: "PROTEÍNA", value: "DOBLE CHICHARRÓN" },
      { label: "GUARNICIÓN", value: "CAMOTE FRITO" },
      { label: "EXTRAS", value: "SARZA XL" },
      { label: "SABOR", value: "INIGUALABLE" }
    ]
  },
  {
    id: "snack-personal-clasico",
    nombre: "SNACK PERSONAL\nCLÁSICO",
    tag: "BOWL PERSONAL",
    precio: "S/ 18.00",
    img: "/images/003 producto.png",
    descripcion: "Un clásico que nunca falla. Rompe la dieta con orgullo.",
    stats: [
      { label: "PROTEÍNA", value: "CHICHARRÓN CLÁSICO" },
      { label: "GUARNICIÓN", value: "CAMOTE REGULAR" },
      { label: "EXTRAS", value: "CREMA AL GUSTO" },
      { label: "SABOR", value: "TRADICIONAL" }
    ]
  },
  {
    id: "tocto-infiel",
    nombre: "TOCTO\nINFIEL",
    tag: "EDICIÓN LIMITADA",
    precio: "S/ 20.00",
    img: "/images/001 producto.png",
    descripcion: "El más crocante de todos. *Solo con reservación anticipada.*",
    stats: [
      { label: "ESPECIALIDAD", value: "TOCTO CROCANTE" },
      { label: "GUARNICIÓN", value: "PAPAS NATIVAS" },
      { label: "EXTRAS", value: "SARZA CRIOLLA" },
      { label: "DISPONIBILIDAD", value: "PREVIA RESERVA" }
    ]
  },
  {
    id: "snack-personal-especial",
    nombre: "SNACK PERSONAL\nESPECIAL",
    tag: "BOWL PERSONAL PLUS",
    precio: "S/ 22.00",
    img: "/images/002 producto.png",
    descripcion: "Sabor potenciado al máximo con nuestra receta especial.",
    stats: [
      { label: "PROTEÍNA", value: "CHICHARRÓN ESPECIAL" },
      { label: "GUARNICIÓN", value: "MIX DE PAPAS Y CAMOTE" },
      { label: "EXTRAS", value: "SALSAS ARTESANALES" },
      { label: "SABOR", value: "PREMIUM" }
    ]
  },
  {
    id: "snack-duo-clasico",
    nombre: "SNACK DÚO\nCLÁSICO",
    tag: "BOWL PARA DOS",
    precio: "S/ 25.00",
    img: "/images/003 producto.png",
    descripcion: "Ideal para compartir... o no. Una ración de sabor infiel.",
    stats: [
      { label: "PROTEÍNA", value: "RACIÓN DOBLE" },
      { label: "GUARNICIÓN", value: "CAMOTE FAMILIAR" },
      { label: "EXTRAS", value: "DOBLE SARZA" },
      { label: "SABOR", value: "COMPARTIDO" }
    ]
  },
  {
    id: "snack-duo-especial",
    nombre: "SNACK DÚO\nESPECIAL",
    tag: "BOWL DÚO PREMIUM",
    precio: "S/ 29.00",
    img: "/images/001 producto.png",
    descripcion: "La máxima expresión del sabor infiel, para dos pecadores.",
    stats: [
      { label: "PROTEÍNA", value: "MÁXIMA RACIÓN" },
      { label: "GUARNICIÓN", value: "TODOS LOS EXTRAS" },
      { label: "SALSAS", value: "TODAS LAS CREMAS" },
      { label: "SABOR", value: "ÉPICO" }
    ]
  }
];
 