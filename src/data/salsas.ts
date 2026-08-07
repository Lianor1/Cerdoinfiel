export interface Maridaje {
  producto: string;
  id: string; // ID del producto para posible enlace interno
}

export interface Acompanamiento {
  id: string;
  nombre: string;
  categoria: 'SALSA' | 'EXTRA';
  img: string; // Placeholder, el usuario lo cambiará
  nivel: number; // Porcentaje 0-100 (Picante o Crujiente/Demanda)
  labelNivel: string; // Ej: "NIVEL DE PICANTE" o "POPULARIDAD"
  descripcion: string;
  maridaje: Maridaje[];
}

export const acompanamientos: Acompanamiento[] = [
  {
    id: 'rocoto-infiel',
    nombre: 'ROCOTO INFIEL',
    categoria: 'SALSA',
    img: '/images/001 producto.png', // Usando la misma de productos como placeholder temporal
    nivel: 95,
    labelNivel: 'NIVEL DE PICANTE',
    descripcion: 'Puro fuego. Nuestro rocoto carretillero molido en batán, con un toque secreto de hierbas que te hará sudar y llorar, pero siempre pedir más.',
    maridaje: [
      { producto: 'BOX INFIEL PERSONAL', id: 'box-infiel-personal' },
      { producto: 'PACK PAREJA CROCANTE', id: 'pack-pareja-crocante' },
      { producto: 'PAN CON CHICHARRÓN', id: 'pan-con-chicharron' },
    ]
  },
  {
    id: 'sarza-criolla',
    nombre: 'SAlZA CRIOLLA',
    categoria: 'EXTRA',
    img: '/images/002 producto.png', // Placeholder temporal
    nivel: 85,
    labelNivel: 'POPULARIDAD',
    descripcion: 'El alma gemela del chicharrón. Cebolla roja en corte pluma, ají limo, jugo de limón recién exprimido y culantro. Frescura garantizada.',
    maridaje: [
      { producto: 'FAMILY BOX JUGOSO', id: 'family-box-jugoso' },
      { producto: 'BOX INFIEL PERSONAL', id: 'box-infiel-personal' },
      { producto: 'DUELO INFIEL MIX', id: 'duelo-infiel-mix' },
    ]
  },
  {
    id: 'salsa-bbq-andina',
    nombre: 'BBQ ANDINA',
    categoria: 'SALSA',
    img: '/images/003 producto.png', // Placeholder temporal
    nivel: 60,
    labelNivel: 'NIVEL DE DULZOR',
    descripcion: 'Nuestra versión de la clásica BBQ ahumada, pero con un ligero toque de frutas andinas y miel local que realza cualquier corte de cerdo.',
    maridaje: [
      { producto: 'DUELO INFIEL MIX', id: 'duelo-infiel-mix' },
      { producto: 'COSTILLAS BBQ', id: 'costillas-bbq' },
    ]
  },
  {
    id: 'camote-frito',
    nombre: 'CAMOTE FRITO',
    categoria: 'EXTRA',
    img: '/images/001 producto.png', // Placeholder temporal
    nivel: 100,
    labelNivel: 'NIVEL CROCANTE',
    descripcion: 'Rodajas de camote seleccionado, fritas al momento. Dulces por dentro y extremadamente crujientes por fuera. Adictivos.',
    maridaje: [
      { producto: 'BOX INFIEL PERSONAL', id: 'box-infiel-personal' },
      { producto: 'ROCOTO INFIEL', id: 'rocoto-infiel' },
    ]
  },
  {
    id: 'crema-huancaina',
    nombre: 'CREMA HUANCAÍNA',
    categoria: 'SALSA',
    img: '/images/002 producto.png', // Placeholder temporal
    nivel: 40,
    labelNivel: 'NIVEL DE PICANTE',
    descripcion: 'Suave, cremosa y con el equilibrio perfecto de queso fresco, ají amarillo y galleta. Un clásico peruano llevado al siguiente nivel.',
    maridaje: [
      { producto: 'PAPAS NATIVAS FRITAS', id: 'papas-nativas' },
      { producto: 'FAMILY BOX JUGOSO', id: 'family-box-jugoso' },
    ]
  }
];
  