<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aspectos normativos
    .row.mb-5.justify-content-center
      .col-lg-10.slideInLeft
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Los aspectos normativos relacionados con la producción pecuaria son aquellos que regulan la forma en la que se deben desarrollar 
              span.text-green  las actividades productivas desde el punto de vista legal para controlar el funcionamiento de la unidad pecuaria.
    .row.mb-5
      .col-lg-7(data-aos='slide-left')
        h3.titulo-tercero Salud y seguridad en el trabajo
        p.mb-3  Uno de los aspectos que ha cobrado mayor relevancia en los últimos años es el de la salud y la seguridad en el trabajo, pues, en este sentido, desde el Estado se han dado las directrices para la implementación de actividades enfocadas en la planificación, la gestión, la identificación y la prevención de los riesgos que puedan afectar la salud y la seguridad de los trabajadores en sus espacios de trabajo.  
        p.mb-3  Así, el Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) es de obligatorio cumplimiento para cualquier empleador, sea público o privado.  


      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i2.jpg' alt='imagen decorativa')     

    .neg-margin-x.bg-curved.mb-5
      .row.justify-content-center
        .col-lg-5
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t2-i3.svg' alt='imagen decorativa')      
        .col-lg-4
          SlyderF(columnas="col-12")
            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c1.svg' alt='AvatarTop')
              .h3.text-center Código Sustantivo del Trabajo (1951) 
              p.text-center Busca relaciones equitativas entre los trabajadores y los empleadores. Algunos de sus artículos fueron derogados por el Decreto 1295 de 1994 y la Ley 962 de 2005.         

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c3.svg' alt='AvatarTop')
              .h3.text-center Decreto 1072 de 2015 
              p.text-center Recopila diferentes normas de la reglamentación laboral. Define las condiciones para el establecimiento del SGSST. 

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c3.svg' alt='AvatarTop')
              .h3.text-center Decreto Ley 1295 de 1994 
              p.text-center Define la organización y administración del SGSST.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 1401 2007 
              p.text-center Hace énfasis en las causas y medidas correctivas para evitar la ocurrencia de accidentes laborales.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Ley 1010 de 2006 
              p.text-center Se enfoca en la prevención, corrección y sanción del acoso laboral en todas sus formas.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 2346 de 2007
              p.text-center Establece directivas para el manejo de las evaluaciones médicas ocupacionales y del contenido de historias clínicas ocupacionales.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 0652 de 2012
              p.text-center Define cómo se conforma y funciona el comité de convivencia laboral en entidades públicas y privadas. Modificada parcialmente la Resolución 1356 de 2012.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 2013 de 1986
              p.text-center Reglamenta la organización y funcionamiento de los Comités Paritarios de Seguridad y Salud en el Trabajo en los lugares de trabajo, estableciendo las funciones de este Comité y de cada uno de sus miembros, así como el quorum para sesionar.              


            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 4502 de 2012
              p.text-center Reglamenta procedimientos y requisitos para las licencias de salud ocupacional.        

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 2646 de 2008
              p.text-center Se orienta hacia las responsabilidades de los diferentes actores sociales en la gestión del riesgo psicosocial en el trabajo.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 1409 de 2012
              p.text-center Regula la protección contra caídas en trabajo en alturas. Es modificada por la Resolución 3368 de 2014.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 1792 de 1990
              p.text-center Establece límites permisibles para la exposición ocupacional al ruido.

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 1956 de 2008
              p.text-center Medidas relacionadas con el consumo de cigarrillo y tabaco. También la Circular 0038 de 2010 habla sobre espacios libres de humo y sustancias psicoactivas en la empresa.
              
            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Decreto 1474 de 2014
              p.text-center Expide la tabla de enfermedades laborales; así como los agentes de riesgo y grupos de enfermedades. 

            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center Resolución 2400 de 1979
              p.text-center Presenta directivas sobre higiene y seguridad en el trabajo. Define las características que deben cumplir los establecimientos y las normas generales sobre riesgos físicos, químicos y biológicos.
              
            .tarjeta.white-custom-card.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/t2-c4.svg' alt='AvatarTop')
              .h3.text-center La Resolución 0312 de 2019
              p.text-center Especifica los estándares mínimos para empresas, empleadores y contratantes en cuanto a la implementación del SGSST.



      br
      br
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1  Salud y seguridad en el trabajo
      .row.mb-5
        .col-lg-1
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
        .col-lg-11(data-aos='slide-left')
          p.mb-0  Principales aspectos que se deben tener en cuenta respecto a la gestión integral de la salud y la seguridad en el trabajo. Parte del trabajo relacionado con la salud y la seguridad en el trabajo se relaciona con la identificación de los riesgos que conlleva cada una de las actividades realizadas. Es así como se definen diferentes tipos de riesgos, dependiendo de sus causas.
      .row.justify-content-center
        .col-lg-10
          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t2-info1.svg', alt='Texto que describa la imagen')

            div(x="82%" y="5%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Riesgos laborales
                    ul.lista-ul
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Higiénicos y biológicos:</b> patógenos, enfermedades transmisibles.   
                      li
                        i.fas.fa-check
                        p.mb-0 <b>Químicos:</b> quemaduras, irritación, intoxicación, dermatitis. 
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Mecánicos:</b> fracturas, cortes, aplastamientos. Causados por manipulación de equipos, herramientas o por ataque de animales. 
                      li
                        i.fas.fa-check
                        p.mb-0 <b>Térmicos: </b>exposición a altas o bajas temperaturas
                      li
                        i.fas.fa-check
                        p.mb-0 <b>Eléctricos:</b> contacto con cercas eléctricas - equipos eléctricos.
                      li
                        i.fas.fa-check
                        p.mb-0 <b>Por acciones repetitivas:</b> ordeño - recolección de huevos - vacunación de animales.
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/t1-p1.png', alt='imagen decorativa')

            div(x="90%" y="47%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Elementos de protección
                    p.mb-3  Están definidos por el tipo de actividad a realizar, el tipo de insumos a emplear, el modo de aplicación de los medicamentos y los riesgos asociados con dicha actividad.
                    p.mb-4  Deben ofrecer protección al trabajador para desarrollar su actividad.
                    .row
                      .col-lg-6
                        ul.lista-ul
                          li
                            i.fas.fa-check
                            p.mb-0  Protección para la cabeza.
                          li
                            i.fas.fa-check
                            p.mb-0 Protección auditiva.
                          li
                            i.fas.fa-check
                            p.mb-0  Protección visual.
                          li
                            i.fas.fa-check
                            p.mb-0 Protección respiratoria.

                      .col-lg-6
                        ul.lista-ul
                          li
                            i.fas.fa-check
                            p.mb-0  Protección para manos.
                          li
                            i.fas.fa-check
                            p.mb-0 Ropa de protección.
                          li
                            i.fas.fa-check
                            p.mb-0  Protección para pies.
                          li
                            i.fas.fa-check
                            p.mb-0 Accesorios: fajas, arneses, mandiles.

                  .col-lg-5
                    figure
                      img(src='@/assets/curso/t2-p2.svg', alt='imagen decorativa')

            div(x="81%" y="85%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 Dotación a los trabajadores de la granja pecuaria
                    p.mb-3  Es obligación de empleado y empleador facilitar y emplear los elementos de protección personal y hacer la respectiva capacitación sobre los riesgos relacionados con su actividad, así como el correcto uso del equipo de protección personal EPP. 
                    p.mb-3  Son muchos los accidentes que se pueden evitar mediante el correcto uso de los equipos de protección personal.  
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/t2-p3.svg', alt='imagen decorativa')

      Separador
      br
      br
      #t_2_2.titulo-segundo.color-acento-contenido
        h2 2.2  Manejo ambiental

      .row.mb-5
        .col-lg-7
          p.mb-3
            span.text-green Uno de los principios de la nueva forma de desarrollar explotaciones pecuarias es la protección de los recursos naturales y la sostenibilidad ambiental, por lo que este es un tema transversal a todas las actividades que tienen lugar en la unidad productiva. 
            | Dentro del manejo ambiental existen elementos fundamentales sobre los cuales se desarrolla todo el ejercicio, por lo que dentro de la planificación de las actividades es importante definir cómo se abordarán y qué recursos serán necesarios para poderlos implementar. Afortunadamente, respecto al tema ambiental existe una normativa aplicable que ordena estas actividades y las integra al sistema productivo.
        .col-lg-5
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t2-i4.jpg' alt='imagen decorativa')      

      .row.mb-5.justify-content-center
        .col-lg-10
          figcaption.customCaption.mb-3  <b>Tabla 1</b><br> Marco normativo aspectos ambientales
          .tabla-a.color-acento-contenido.mb-5 
            table
              thead
                tr
                  th Norma
                  th Alcance
              tbody
                tr
                  td.text-bold Resolución 1476 septiembre 10 de 1976 ICA
                  td Reglamenta la Resolución 261 de 1975, sobre el control de la salmonelosis en las aves de corral.
                tr
                  td.text-bold Resolución 1056 del 17 de abril de 1996 ICA
                  td Control técnico de los insumos pecuario y se derogan las Resoluciones 710 de 1981, 2218 de 1980 y 444 de 1993.
                tr
                  td.text-bold Resolución 1698 del 27 de junio de 2000 ICA
                  td Disposiciones sobre productores de alimentos para animales con destino al autoconsumo.
                tr
                  td.text-bold  Resolución 150 del 21 de enero de 2003 ICA
                  td  Adopta el reglamento técnico de fertilizantes y acondicionadores de suelos para Colombia. 
                tr
                  td.text-bold  Resolución 968 del 10 de marzo de 2010 ICA 
                  td  Modifica la Resolución 150 de 2003. 
                tr
                  td.text-bold  Ley 1255 del 28 de noviembre de 2008 ICA 
                  td  Creación de un programa que preserve el estado sanitario de país libre de influenza aviar, así como el control y erradicación de la enfermedad Newcastle en el territorio nacional. 
                tr
                  td.text-bold  Resolución 587 del 27 de diciembre de 1973 ICA 
                  td  Medidas para el control de la enfermedad de Mark en las aves de corral. 
                tr
                  td.text-bold  Resolución 1937 del 22 de julio de 2003 ICA 
                  td Medidas sanitarias para la prevención y control de la enfermedad Newcastle en el territorio nacional.
                tr
                  td.text-bold  Resolución 375 del 27 de febrero de 2004 ICA 
                  td  Disposiciones sobre Registro y Control de los Bioinsumos y Extractos Vegetales de uso agrícola en Colombia. 
                tr
                  td.text-bold  Resolución 2896 del 10 de octubre de 2005 ICA 
                  td  Disposiciones sanitarias para la construcción de nuevas granjas avícolas en el territorio nacional. 
                tr
                  td.text-bold Resolución 3654 del 28 de septiembre de 2009 ICA
                  td  Adopción del programa para el control y erradicación de la enfermedad Newcastle en el territorio nacional. 
                tr
                  td.text-bold  Resolución 1183 del 25 de marzo de 2010 ICA 
                  td  Condiciones de Bioseguridad que se deben cumplir las granjas avícolas comerciales en el país para su certificación. 
                tr
                  td.text-bold  Resolución 4287 del 21 de noviembre de 2007 del Ministerio de la Protección Social
                  td  Reglamento técnico sobre los requisitos sanitarios y de inocuidad de la carne y productos cárnicos comestibles de las aves de corral.  
                tr
                  td.text-bold Decreto 1500 del 4 de mayo de 2007 del Ministerio de la Protección Social 
                  td  Creación del Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos Destinados para el Consumo Humano - requisitos sanitarios y de inocuidad en la producción primaria. 
                tr
                  td.text-bold  Resolución 2101 del 27 de julio de 2007 ICA 
                  td  Programas de seguridad alimentaria con fines comerciales de autoconsumo o cualquier programa enfocado hacia la distribución de aves. 
                tr
                  td.text-bold  Resolución 2833 del 29 de octubre de 2007 ICA 
                  td  Modifica la Resolución 2101 de 2007. 
                tr
                  td.text-bold  Decreto 3100 del 30 de octubre de 2003 del Ministerio del Medio Ambiente Vivienda y Desarrollo Territorial 
                  td  Reglamenta la tasa retributiva por la utilización directa del agua como receptor de los vertimientos puntuales y se toman otras determinaciones. 
                tr
                  td.text-bold  Decreto 1713 del 6 de agosto de 2002 del Ministerio del Medio Ambiente Vivienda y Desarrollo Territorial  
                  td  Reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 del 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974, la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos. 
                tr
                  td.text-bold Ley 55 del 2 de julio de 1993 del Ministerio del Trabajo y Seguridad Social 
                  td Por medio de la cual se aprueba en “Convenio #170 y la recomendación número 177 sobre la seguridad en la utilización de productos químicos en el trabajo” adoptados por la 77 reunión de la conferencia general de la OIT.
                tr
                  td.text-bold  Decreto 1594 de 1984 del Ministerio de Agricultura  
                  td  Reglamenta parcialmente el título I de la ley 9 de 1979, así como el capítulo II del título VI - parte III - libro II y el título III de la parte III - libro I – del Decreto 2811 de 1974 en cuanto a usos del agua y residuos líquidos. 
                tr
                  td.text-bold  Decreto 3172 de 2003 del Ministerio de Ambiente, Vivienda y Desarrollo Territorial 
                  td  Reglamenta el artículo 158-2 del Estatuto Tributario. ”El contribuyente deberá acreditar el cumplimiento de los siguientes requisitos cuando la Dirección de Impuestos y Aduanas Nacionales, DIAN los exija por inversiones en control y mejoramiento del medio ambiente. 
                tr
                  td.text-bold  Decreto 1753 de 1994 del Ministerio del Medio Ambiente 
                  td  Reglamenta parcialmente los títulos VIll y Xll de la Ley 99 de 1993 sobre licencias ambientales. 
                tr
                  td.text-bold  Ley 99 de 1993 del Congreso de la República  
                  td  Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA. 
                tr
                  td.text-bold  Decreto 1900 de 2006 del Ministerio de Ambiente, Vivienda y Desarrollo Territorial  
                  td  Reglamenta el parágrafo del artículo 43 de la Ley 99 de 993. Todo proyecto que involucre en su ejecución el uso del agua tomada directamente de fuentes naturales y que esté sujeto a la obtención de licencia ambiental, deberá destinar el 1% del total de la inversión para la recuperación, conservación, preservación y vigilancia de la cuenca hidrográfica que alimenta la respectiva fuente hídrica; de conformidad con el parágrafo del artículo 43 de la Ley 99 de 1993. 
                tr
                  td.text-bold  Resolución 1023 de 2005 del Ministerio de Ambiente y Desarrollo Territorial 
                  td  Por la cual se adoptan guías ambientales como instrumento de autogestión y autorregulación. 
                tr
                  td.text-bold  Decreto 1299 de 2008 del Ministerio de Ambiente y Desarrollo Territorial 
                  td  Por el cual se reglamenta el departamento de gestión ambiental de las empresas a nivel industrial y se dictan otras disposiciones. 
      
      .titulo-tercero 
        h3  Normatividad local
      .row.mb-5
        .col-lg-1
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
        .col-lg-11(data-aos='slide-left')
          p.mb-0  Además del marco normativo expuesto anteriormente, para el desarrollo de las explotaciones pecuarias se deben tener en cuenta los aspectos relacionados con la normatividad local, puesto que el desarrollo de cualquier actividad productiva debe estar acorde con lo establecido por las autoridades de planeación. Entre los aspectos que se deben tener en cuenta en este sentido se encuentran los siguientes:

      .row.mb-5.justify-content-center.color-cards
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .h3 Plan de ordenamiento territorial
                p Este tipo de explotaciones, dependiendo de la especie animal, se puede hacer un manejo enfocado en los individuos (como en el caso de los bovinos o los equinos) o en las poblaciones (como ocurre con las aves, conejos o cuyes).
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-f1.svg')})`}")  

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .h3 Usos del suelo
                p Dependiendo de las condiciones ambientales o de la disponibilidad de alimento, algunas de las explotaciones pecuarias pueden trasladarse de un lugar a otro. Esto se da sobre todo en la producción ganadera, donde es común la migración de animales según las épocas de abundancia o escasez de pasturas.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-f2.svg')})`}")  

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .h3 Zonas de alto riesgo
                p Siempre que se desarrolla un sistema productivo pecuario es necesario asegurar unas instalaciones mínimas para el alojamiento de los animales y una infraestructura complementaria que facilite las labores que demande su manejo.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-f3.svg')})`}")  





























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
