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

    .tarjeta.bg-sliders.p-5.mb-5.shadow-box
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            p Entre las especies animales más empleadas en sistemas pecuarios están los ovinos, caprinos, equinos, porcinos, aves y mamíferos pequeños como conejos y cuyes. También se encuentran insectos, reptiles y anélidos, como la lombriz de tierra. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s1.png', alt='imagen decorativa')
            figcaption Especie animal




    Separador
    br
    br
    #t_1_4.titulo-segundo.color-secundario
      h2 1.4  Principales explotaciones pecuarias
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
      .col-lg-11(data-aos='slide-left')
        p.mb-0  Las explotaciones pecuarias son tan diversas como lo son las especies animales, pues son múltiples las iniciativas de crianza y beneficio que se han desarrollado en diferentes latitudes. Incluso algunas de ellas pueden resultar exóticas dependiendo del contexto en el que se desarrollen. No obstante, de acuerdo con su importancia económica y el volumen de la producción, en el ámbito nacional las principales explotaciones pecuarias podrían agruparse en las siguientes categorías:
    
    //-- Aqui viene un componente que no se ha definido

    h3.titulo-tercero Aplicabilidad de los registros
    p.mb-5  Los registros son muy útiles para evaluar y monitorear la situación ambiental del agroecosistema, entre otras aplicaciones:
    .row.mb-5
      .col-lg-5
        //--
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
      .col-lg-7
        ul.lista-ul(data-aos='slide-right')
          li
            i.fas.fa-check
            p.mb-0  Sirven como historial ambiental del agroecosistema.
          li
            i.fas.fa-check
            p.mb-0  Permite medir el impacto positivo o negativo de las prácticas de manejo ecológico o agroecológico, o el avance del agroecosistema cuando se avanza en un proceso de reconversión o transición.              
          li
            i.fas.fa-check
            p.mb-0  Permiten observar cambios bruscos en el agroecosistema y analizar la fuente del problema. Por ejemplo: un descenso en la población de abejas puede indicar alguna fuente de contaminación con agroquímicos.    
          li
            i.fas.fa-check
            p.mb-0  Son documentos válidos tenidos en cuenta en procesos de certificación ecológica o de esquemas de sostenibilidad.             
          li
            i.fas.fa-check
            p.mb-0  Sirven para comparar el agroecosistema con otros aledaños.    
          li
            i.fas.fa-check
            p.mb-0  Sirven para comparar el agroecosistema con otros aledaños.             
          li
            i.fas.fa-check
            p.mb-0  Son un insumo esencial para graficar y procesar la información ambiental del agroecosistema, y en general del plan de manejo aplicado.    


    Separador
    br
    br
    #t_1_5.titulo-segundo.color-secundario
      h2 1.5  Parámetros productivos
    .row.mb-5
      .col-lg-7
        p.mb-4  Dependiendo de lo que se quiera medir al interior de la explotación pecuaria se pueden identificar y cuantificar cuantos parámetros productivos se consideren necesarios, para lo cual es necesario diseñar y diligenciar registros que permitan hacer un seguimiento detallado del comportamiento de estos importantes indicadores.
        h3.titulo-tercero Parámetros productivos
        p.mb-5  Los parámetros productivos son variables cuantificables y observables que permiten analizar detalladamente el comportamiento de las unidades pecuarias en cualquiera de sus etapas, estos permiten evaluar los rendimientos y, además, facilitar la toma de decisiones administrativas teniendo en cuenta factores técnicos y productivos. Algunos de los parámetros productivos que se pueden medir al interior de las principales explotaciones pecuarias son los siguientes:

      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-i4.jpg' alt='imagen decorativa') 

    TabsC.color-primario
      .py-3.py-md-4(titulo="Parámetros productivos bovinos, bufalinos, ovinos y caprinos")
        .row
          .col-lg-12
            h4 Parámetros productivos bovinos, bufalinos, ovinos y caprinos
          .col-md-4.mb-4.mb-md-0
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-t1.jpg' alt='imagen decorativa')             
        
          .col-md-8
            //-- Aqui viene la tabla




    Separador
    br
    br
    #t_1_6.titulo-segundo.color-secundario
      h2 1.6  Buenas prácticas pecuarias

    .row.mb-5.justify-content-center
      .col-lg-10.slideInLeft
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 
              span.text-green  Las buenas prácticas agrícolas y las buenas prácticas pecuarias son acciones encaminadas a la reducción de riesgos de deterioro del medio ambiente y de la contaminación cruzada de los productos agropecuarios;
              span &nbsp;a través de prácticas de manejo la higiénicas y seguras por parte de los trabajadores, contando con los elementos necesarios para tener procesos productivos donde se conserven los productos inocuos y saludables.



































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
