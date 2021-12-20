<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mantenimiento de equipos e instalaciones

    
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1  Manuales de operación de equipos


    Separador
    br
    br
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2  Protocolos de mantenimiento de equipos e instalaciones


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
