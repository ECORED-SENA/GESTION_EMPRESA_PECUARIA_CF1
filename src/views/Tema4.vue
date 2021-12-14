<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Organización de recursos

    
    #t_4_1.titulo-segundo.color-secundario
      h2 4.1  Recursos técnicos


    Separador
    br
    br
    #t_4_2.titulo-segundo.color-secundario
      h2 4.2  Recursos humanos


    Separador
    br
    br
    #t_4_3.titulo-segundo.color-secundario
      h2 4.3  Recursos ambientales




    Separador
    br
    br
    #t_4_4.titulo-segundo.color-secundario
      h2 4.4  Elaboración de cronogramas





































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
