<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.justify-content-center
      .col-lg-10.slideInLeft
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t0-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 El conocimiento previo de los procesos que conlleva la implementación de una explotación agropecuaria minimiza los riesgos, reduce los costos y contribuye a asegurar que el producto final cumpla con las exigencias del mercado en términos de calidad e inocuidad.


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YHP2t8J54K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
