<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mantenimiento de equipos e instalaciones

    .row.mb-5.align-items-center.slideInUp
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 El mantenimiento de los equipos y de las instalaciones de la unidad productiva pecuaria es necesario para asegurar su durabilidad y buen funcionamiento. Para el desarrollo de estas actividades, es necesario establecer protocolos en los cuales se definen la periodicidad de las actividades de mantenimiento y limpieza, los procedimientos para la utilización y almacenamiento de los equipos, el tipo de aseo y limpieza que se debe hacer, la clase de productos de limpieza a emplear y la identificación de las señales de deterioro de estos elementos.

      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i1.jpg' alt='imagen decorativa')  

    
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1  Manuales de operación de equipos
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
      .col-lg-11
        p.mb-3  Para la utilización de los equipos es importante seguir las recomendaciones del fabricante y asegurarse de cumplir todas y cada una de ellas, pues es una de las formas de asegurar su durabilidad y buen uso. Estas recomendaciones están consignadas en los manuales de operación, por lo que es necesario tenerlos siempre disponibles. Igualmente, para evitar daños es importante establecer protocolos para el uso de estos elementos y realizar jornadas de inducción y de capacitación al personal para su operación.
    
    .row.mb-5
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i2.jpg' alt='imagen decorativa') 
      .col-lg-7(data-aos='slide-left')
        p.mb-4 Los manuales de operación de equipos, generalmente se componen de las siguientes partes:
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0  Una tabla de contenido donde se especifican los ítems que se tratan en el manual.
          li
            i.fas.fa-check
            p.mb-0  Un glosario en el cual se definen conceptos técnicos que no se manejan frecuentemente. 
          li
            i.fas.fa-check
            p.mb-0  Una descripción de los componentes del equipo, sus funciones y ubicación.  
          li
            i.fas.fa-check
            p.mb-0  Planos detallados de los componentes del equipo.  
          li
            i.fas.fa-check
            p.mb-0  Recomendaciones generales para poner en funcionamiento el equipo.  
          li
            i.fas.fa-check
            p.mb-0  Un listado de las fallas más frecuentes que se presentan durante la operación y sus posibles causas.  
          li
            i.fas.fa-check
            p.mb-0  Un aparte con las generalidades relacionadas con el mantenimiento del equipo, como cambio de baterías, reemplazo de partes, cuidados en el almacenamiento, aseo y limpieza.   




    Separador
    br
    br
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2  Protocolos de mantenimiento de equipos e instalaciones
    p.mb-5  A continuación, se verán los protocolos mantenimiento de equipos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




    Separador
    br
    br
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3  Protocolos de desinfección




    Separador
    br
    br
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4  Manejo seguro de residuos





































</template>

<script>
export default {
  name: 'Tema3',
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
