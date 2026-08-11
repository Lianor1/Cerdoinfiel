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
    precio: "S/9.00",
    img: "/images/001 producto.png",
    descripcion: "Aquí no juzgamos si te gusta con harto picante o bien mojadito.\nPero sabemos que el único trío perfecto que te gusta es el: Chicharrón, cancha y tu crema favorita",
    stats: [
      { label: "PROTEÍNA", value: "ROMPER LA DIETA" },
      { label: "GUARNICIÓN", value: "CANCHA + CHICHARON" },
      { label: "EXTRA", value: "BIENE CON SU CREMA RANDOM" },
      { label: "SABOR", value: "SABOR EXOTICO A LA INFIDELIDAD" }
    ]
  },
  {
    id: "mini-snack-especial-infiel",
    nombre: "MINI SNACK\nESPECIAL INFIEL",
    tag: "BOWL MINI ESPECIAL",
    precio: "S/13.00",
    img: "/images/001 producto.png",
    descripcion: "Rinde mas que tus excusas ' Me quedé sin batería 'el unico snack que te deja.\nChiquito, pero te deja bien lleno y pidiendo repetición.",
    stats: [
      { label: "PROTEÍNA", value: "DOBLE CHICHARRÓN" },
      { label: "GUARNICIÓN", value: "CANCHA + CHICHARON" },
      { label: "EXTRA", value: "CREMA PARA DARLE ESE GUSTO DE GRITOS" },
      { label: "SABOR", value: "INIGUALABLE" }
    ]
  },
  {
    id: "snack-personal-clasico",
    nombre: "SNACK\nPERSONAL CLÁSICO",
    tag: "BOWL PERSONAL CLÁSICO",
    precio: "S/18.00",
    img: "/images/002 producto.png",
    descripcion: "Aquí no juzgamos si te gusta con harto picante o bien mojadito.\nPero para los que les gusta meterle la mano al pote sin pedir permiso.",
    stats: [
      { label: "PROTEÍNA", value: "CHICHARRÓN CLÁSICO" },
      { label: "GUARNICIÓN", value: "CANCHA + CHICHARON + PLATANOS" },
      { label: "EXTRA", value: "LA CREMA PARA SACAR TUS LAGRIMAS" },
      { label: "SABOR", value: "HECHO POR LA INFIDELIDAD" }
    ]
  },
  {
    id: "tocto-infiel",
    nombre: "TOCTO INFIEL",
    tag: "RESERVA ANTICIPADA\nEDICIÓN LIMITADA",
    precio: "S/20.00",
    img: "/images/004 Tocto.png",
    descripcion: "El más crocante de todos.\nPara los que siempre piden más: crujiente, con su cremita bien puesta y en tamaño\n*Solo con reservación anticipada.*",
    stats: [
      { label: "ESPECIALIDAD", value: "TOCTO CROCANTE" },
      { label: "GUARNICIÓN", value: "EL AMOR UNICO AL CHICHARON CRUNCH" },
      { label: "EXTRA", value: "CREMA + ROLLITOS DE PLATANO" },
      { label: "DISPONIBILIDAD", value: "PREVIA RESERVA" }
    ]
  },
  {
    id: "snack-personal-especial",
    nombre: "SNACK\nPERSONAL ESPECIAL",
    tag: "BOWL PERSONAL ESPECIAL",
    precio: "S/22.00",
    img: "/images/005 clasico.png",
    descripcion: "Para los que dijeron 'ya no voy a caer' y cayeron en la primera mordida.mirate estas otraves aqui\nTranqui, si te lo comes parado no engorda. Y si no te ven, tampoco cuenta. ",
    stats: [
      { label: "PROTEÍNA", value: "CHICHARRÓN ESPECIAL" },
      { label: "GUARNICIÓN", value: "MIX CANCHA + CHIFLES" },
      { label: "EXTRA", value: "HALLS + CREMA PARA LLORAR" },
      { label: "SABOR", value: "Más tóxico que responder 'nada, tú dirás'" }
    ]
  },
  {
    id: "snack-duo-clasico",
    nombre: "SNACK\nDÚO CLÁSICO",
    tag: "BOWL PARA DOS INFIELES",
    precio: "S/25.00",
    img: "/images/006 duo clasico.png",
    descripcion: "Ideal para compartir... o no. Una ración de sabor infiel.",
    stats: [
      { label: "PROTEÍNA", value: "RACIÓN DOBLE" },
      { label: "GUARNICIÓN", value: "CAMOTE FAMILIAR" },
      { label: "EXTRA", value: "DOBLE SARZA" },
      { label: "SABOR", value: "COMPARTIDO" }
    ]
  },
  {
    id: "snack-duo-especial",
    nombre: "SNACK\nDÚO ESPECIAL",
    tag: "BOWL DÚO PREMIUM",
    precio: "S/29.00",
    img: "/images/007 duo especial.png",
    descripcion: "La máxima expresión del sabor infiel, para dos pecadores.",
    stats: [
      { label: "PROTEÍNA", value: "MÁXIMA RACIÓN" },
      { label: "GUARNICIÓN", value: "TODOS LOS EXTRAS" },
      { label: "EXTRA", value: "TODAS LAS CREMAS" },
      { label: "SABOR", value: "ÉPICO" }
    ]
  }
];
 