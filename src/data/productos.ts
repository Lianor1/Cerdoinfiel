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
    id: "box-infiel-personal",
    nombre: "BOX INFIEL\nPERSONAL",
    tag: "BOWL PERSONAL",
    precio: "S/ 9.00",
    img: "/images/001 producto.png",
    descripcion: "La porción perfecta para romper la dieta a solas.",
    stats: [
      { label: "PROTEÍNA", value: "250G CHICHARRÓN" },
      { label: "GUARNICIÓN", value: "CAMOTE FRITO" },
      { label: "EXTRAS", value: "SARZA CRIOLLA" },
      { label: "SABOR", value: "TOQUE SECRETO" }
    ]
  },
  {
    id: "pack-pareja-crocante",
    nombre: "PACK PAREJA\nCROCANTE",
    tag: "BOWL MEDIANO",
    precio: "S/ 18.00",
    img: "/images/002 producto.png",
    descripcion: "Para los que siempre quieren más. Doble ración de chicharrón, doble placer. Imposible resistirse.",
    stats: [
      { label: "PROTEÍNA", value: "500G CHICHARRÓN" },
      { label: "GUARNICIÓN", value: "DOBLE CAMOTE" },
      { label: "EXTRAS", value: "SARZA XL" },
      { label: "SABOR", value: "INIGUALABLE" }
    ]
  },
  {
    id: "family-box-jugoso",
    nombre: "FAMILY BOX\nJUGOSO (1KG)",
    tag: "BOWL GRANDE",
    precio: "S/ 27.00",
    img: "/images/003 producto.png",
    descripcion: "Ideal para compartir... o no. Una montaña de sabor infiel que pondrá a prueba tu lealtad a la dieta.",
    stats: [
      { label: "PROTEÍNA", value: "1 KG CHICHARRÓN" },
      { label: "GUARNICIÓN", value: "CAMOTE FAMILIAR" },
      { label: "EXTRAS", value: "TRIPLE SARZA" },
      { label: "CREMAS", value: "TODAS LAS CREMAS" }
    ]
  },
  {
    id: "duelo-infiel-mix",
    nombre: "DUELO INFIEL\nMIX",
    tag: "MIXTO",
    precio: "S/ 36.00",
    img: "/images/001 producto.png", // Usando temporal
    descripcion: "Dos sabores enfrentados en un solo bowl. ¿Dulce o salado? ¿Suave o extra crujiente?",
    stats: [
      { label: "CERDO", value: "CHICHARRÓN CLÁSICO" },
      { label: "COSTILLAS", value: "SALSA BBQ" },
      { label: "GUARNICIÓN", value: "PAPAS NATIVAS" },
      { label: "EXTRAS", value: "SARZA CRIOLLA" }
    ]
  }
];
 