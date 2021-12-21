export default {
  global: {
    componenteFormativo:
      'Consideraciones para el establecimiento y operación de unidades productivas pecuarias',
    descripcionCurso:
      'Conseguir unidades pecuarias organizadas conforme a los parámetros técnicos requiere de un trabajo previo que implica, entre otras cosas, la identificación del tipo de explotación que se llevará a cabo, el conocimiento de la normatividad aplicable, la definición de los recursos disponibles y el conocimiento de los procesos que conlleva la implementación de este tipo de sistemas en diversos entornos rurales',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistemas productivos pecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Componentes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Principales explotaciones pecuarias',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Parámetros productivos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Buenas prácticas pecuarias',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aspectos normativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Salud y seguridad en el trabajo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Manejo ambiental',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planificación de la unidad productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Instalaciones pecuarias',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Equipos empleados en explotaciones pecuarias',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Organización de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Recursos técnicos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Recursos humanos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Recursos ambientales',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Elaboración de cronogramas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mantenimiento de equipos e instalaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Manuales de operación de equipos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Protocolos de mantenimiento de equipos e instalaciones',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Protocolos de desinfección',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Manejo seguro de residuos',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Estrada, L., I., Esparza, J., S., Albarrán, P., B., Yong Á., G., Rayas, A., A. A., García, M., A. (2018).Evaluación productiva y económica de un sistema silvopastoril intensivo en bovinos doble propósito en Michoacán, México.CIENCIA ergo- sum, 25(3)',
      link: 'https://doi.org/10.30878/ces.v25n3a7',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura. (2018). Buenas prácticas pecuarias en la producción de ganado bovino. Instituto Interamericano de Cooperación para la Agricultura.',
    },
    {
      referencia:
        'Organismo Internacional Regional de Salud Agropecuaria. (2016). Manual de buenas prácticas pecuarias en bovinos, porcinos y aves. Organismo Internacional Regional de Salud Agropecuaria.',
    },
  ],
  glosario: [
    {
      termino: 'Aforo',
      significado:
        'medición de la cantidad de forraje disponible por unidad de área de pradera.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'condiciones y medidas necesarias que garantizan que un alimento no va a afectar la salud de las personas.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad para rastrear los procesos que se dan durante la actividad productiva.',
    },
  ],
  complementario: [
    {
      texto:
        'Pertuz, C. A. (2021). Análisis ambiental de las fuentes generadoras de pollinaza, porquinaza y bovinaza objeto de control y seguimiento ambiental por parte de la Corporación Autónoma Regional del Atlántico -CRA-. (Tesis de grado). Universidad de la Costa, Barranquilla, Colombia.',
      tipo: 'Tesis',
      link:
        'https://repositorio.cuc.edu.co/bitstream/handle/11323/8393/An%C3%A1lisis%20ambiental%20de%20las%20fuentes%20generadoras%20de%20pollinaza%2C%20porquinaza%20y%20bovinaza%20objeto%20de%20control%20y%20seguimiento%20ambiental%20por%20parte%20de%20la%20Corporaci%C3%B3n%20Aut%C3%B3noma%20Regional%20del%20Atl%C3%A1ntico%20-CRA.pdf?sequence=1&isAllowed=y',
    },
    {
      texto:
        'Organización Panamericana de la Salud. (2015). Buenas Prácticas Agropecuarias (BPA) y de Manufactura (BPM).',
      tipo: 'Guía',
      link: 'https://www.paho.org/hq/dmdocuments/2015/cha-bpa-bpm.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Sánchez Suárez',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja',
      },
      {
        nombre: 'Angela María Zapata Guzmán',
        cargo: 'Diseñadora Instruccional',
        centro: 'Ecosistema',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
