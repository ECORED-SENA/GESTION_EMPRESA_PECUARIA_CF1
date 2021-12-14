<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span 1
      h1 Sistemas productivos pecuarios

    
    #t_1_1.titulo-segundo.color-secundario
      h2 1.1  Clasificación
    .row.mb-5.slideInLeft
      .col-lg-7
        p.mb-3  En el caso de la producción pecuaria son múltiples los factores que se deben analizar antes de cualquier emprendimiento, por lo que es necesario tomarse el tiempo suficiente para identificar el tipo de explotación, determinar los recursos necesarios y disponibles, conocer el tipo de instalaciones que se requieren y, sobre todo, 
          span.text-green hacer una programación detallada de las actividades que se llevarán a cabo al interior de la unidad pecuaria, con lo cual será posible darle un orden lógico al sistema, conseguir la productividad esperada y contribuir a la sostenibilidad del proyecto productivo.
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-i1.jpg' alt='imagen decorativa')



    Separador
    br
    br
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2  Características
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
      .col-lg-11(data-aos='slide-left')
        p.mb-0  En el caso de la producción pecuaria son múltiples los factores que se deben analizar antes de cualquier emprendimiento, por lo que es necesario tomarse el tiempo suficiente para identificar el tipo de explotación, determinar los recursos necesarios y disponibles, conocer el tipo de instalaciones que se requieren y, sobre todo, hacer una programación detallada de las actividades que se llevarán a cabo al interior de la unidad pecuaria, con lo cual será posible darle un orden lógico al sistema, conseguir la productividad esperada y contribuir a la sostenibilidad del proyecto productivo.

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Versatilidad
              p Es una actividad que se adapta fácilmente a una variedad de condiciones que pueden ser de tipo agroecológico, económico, sociocultural y tecnológico, entre otras.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c1.jpg')})`}")  

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Generación de subproductos
              p En la actividad pecuaria es común la obtención de subproductos los cuales son empleados tanto al interior de la unidad productiva como fuera de ella.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c2.jpg')})`}")  

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Individuos y poblaciones
              p Este tipo de explotaciones, dependiendo de la especie animal, se puede hacer un manejo enfocado en los individuos (en el caso de los bovinos o los equinos) o en las poblaciones (como ocurre con las aves, conejos o cuyes). 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c3.jpg')})`}")  
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Movilidad
              p Dependiendo de las condiciones ambientales o de la disponibilidad de alimento, algunas de las explotaciones pecuarias pueden trasladarse de un lugar a otro. Esto se da sobre todo en la producción ganadera, donde es común la migración de animales según las épocas de abundancia o escasez de pasturas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c4.jpg')})`}")  

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Alojamiento e infraestructura asociada
              p Siempre que se desarrolla un sistema productivo pecuario es necesario asegurar unas instalaciones mínimas para el alojamiento de los animales y una infraestructura complementaria que facilite las labores que demande su manejo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c5.jpg')})`}") 

    Separador
    br
    br
    #t_1_3.titulo-segundo.color-secundario
      h2 1.3  Componentes
    .row.mb-5.justify-content-center
      .col-lg-10.slideInLeft
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 Los sistemas productivos pecuarios están integrados por diversos componentes que se deben articular de manera precisa para conseguir los resultados esperados en materia de rendimientos y calidad del producto final. En términos generales, los elementos que componen cualquier sistema productivo pecuario 
              span.text-green son la especie animal, el alimento, las instalaciones, los equipos y herramientas, las condiciones agroecológicas y el manejo.




    Separador
    br
    br
    #t_1_4.titulo-segundo.color-secundario
      h2 1.4  Principales explotaciones pecuarias



    Separador
    br
    br
    #t_1_5.titulo-segundo.color-secundario
      h2 1.5  Parámetros productivos




    Separador
    br
    br
    #t_1_6.titulo-segundo.color-secundario
      h2 1.6  Buenas prácticas pecuarias




































    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
