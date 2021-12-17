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

    .neg-margin-x.mb-5
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





    #t_2_1.titulo-segundo.color-secundario
      h2 2.1  Salud y seguridad en el trabajo


    Separador
    br
    br
    #t_2_2.titulo-segundo.color-secundario
      h2 2.2  Manejo ambiental







































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
