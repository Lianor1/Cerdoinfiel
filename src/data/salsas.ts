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
    img: '/images/salsa_roja.png', // Rocoto
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
    id: 'salsa-bbq-andina',
    nombre: 'BBQ ANDINA',
    categoria: 'SALSA',
    img: '/images/salsa_crema.png', // BBQ Andina
    nivel: 60,
    labelNivel: 'NIVEL DE DULZOR',
    descripcion: 'Nuestra versión de la clásica BBQ ahumada, pero con un ligero toque de frutas andinas y miel local que realza cualquier corte de cerdo.',
    maridaje: [
      { producto: 'DUELO INFIEL MIX', id: 'duelo-infiel-mix' },
      { producto: 'COSTILLAS BBQ', id: 'costillas-bbq' },
    ]
  },
  {
    id: 'crema-huancaina',
    nombre: 'CREMA HUANCAÍNA',
    categoria: 'SALSA',
    img: '/images/salsa_verde.png', // Crema Huancaina / Verde
    nivel: 40,
    labelNivel: 'NIVEL DE PICANTE',
    descripcion: 'Suave, cremosa y con el equilibrio perfecto de queso fresco, ají amarillo y galleta. Un clásico peruano llevado al siguiente nivel.',
    maridaje: [
      { producto: 'PAPAS NATIVAS FRITAS', id: 'papas-nativas' },
      { producto: 'FAMILY BOX JUGOSO', id: 'family-box-jugoso' },
    ]
  }
];
  