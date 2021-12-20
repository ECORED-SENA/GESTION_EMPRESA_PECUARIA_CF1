<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Organización de recursos

    .row.mb-5.align-items-center.slideInUp
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Una vez se han identificado los recursos disponibles en la unidad productiva, es necesario desarrollar un inventario de lo que existe al interior de ella. Un inventario esencialmente es una relación esquematizada y con un alto grado de detalle de los recursos de los que se dispone al interior de la empresa pecuaria.
            span.text-green  En este orden de ideas, es importante definir los formatos que permitan realizar esta labor para proceder a organizar los recursos en función de las metas de producción.

      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t4-i1.jpg' alt='imagen decorativa')  


    
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  Recursos técnicos

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t4-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 
              span.text-green Como toda empresa, la unidad pecuaria para su funcionamiento requiere de unos recursos que al organizarse y articularse definen el éxito de la explotación, cualquiera que esta sea.
              | &nbsp;Dentro de estos sistemas productivos, se han definido básicamente tres clases de recursos sobre los cuales se basa toda la actividad, por lo que el análisis detallado de cada uno de ellos en el entorno productivo es una tarea fundamental en el proceso de planeación.


    .tarjeta.bg-sliders.p-4.mb-5.shadow-box
      .row
        .col-lg-1
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
        .col-lg-6
          .h4 Recursos técnicos
          p.mb-0  Estos hacen referencia a los medios físicos o materiales de los que dispone la empresa pecuaria para el desarrollo de su actividad productiva. Estos se pueden dividir en tangibles, cuando se pueden encontrar en una forma física, o intangibles cuando están representados en tecnología o cualquier otro bien inmaterial.   
        .col-lg-5
          figure(data-aos='flip-right')
            img.nW.centered(src='@/assets/curso/t4-i3.png' alt='imagen decorativa') 
    .neg-margin-x.bg-curved
      .titulo-quinto.color-acento-contenido
        h4 Tipos de recursos presentes en la empresa pecuaria
      .row.justify-content-center.mb-5
        .col-lg-8
          figure(data-aos='flip-up')
            img.nW.centered(src='@/assets/curso/t4-i4.svg' alt='imagen decorativa')        


      Separador
      br
      br
    
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2  Recursos humanos
      p.mb-5  Elementos que se pueden tener en cuenta al momento de seleccionar el personal (recurso humano)

      .tarjeta.bg-sliders.p-4.mb-5.shadow-box
        .row
          .col-lg-1
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
          .col-lg-6
            .h4 Recurso humano
            p.mb-3  Es tal vez el recurso más importante con el que cuenta la unidad pecuaria, puesto que todas y cada una de las labores que se desarrollan al interior de la unidad productiva requieren de la intervención del equipo de trabajo. En este punto es importante considerar las labores que se realizan en la unidad productiva y estimar la demanda de mano de obra con base en ellas (tiempos y movimientos en la empresa). 
            p.mb-3  Para lograr estimaciones más precisas, es importante identificar las tareas y medir el tiempo que demanda cada una de ellas. De esta forma, es posible obtener promedios que posteriormente se pueden emplear para la programación de actividades.

          .col-lg-5
            figure(data-aos='flip-right')
              img.nW.centered(src='@/assets/curso/t4-i5.png' alt='imagen decorativa') 

      .row.mb-5.justify-content-center
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .h3 Habilidades y competencias
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Habilidades para trabajo en equipo.
                  li
                    i.fas.fa-check
                    p.mb-0  Habilidad analítica y de resolución de problemas.   
                  li
                    i.fas.fa-check
                    p.mb-0  Capacidad para tomar decisiones.
                  li
                    i.fas.fa-check
                    p.mb-0  Comportamiento cordial, respetuoso y colaborativo.                     
                                  
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t4-f1.svg')})`}")  

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .h3 Competencias fundamentales
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Profesionalismo.
                  li
                    i.fas.fa-check
                    p.mb-0  Transparencia.
                  li
                    i.fas.fa-check
                    p.mb-0  Eficiencia.
                      
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t4-f2.svg')})`}")  
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                .h3 Habilidades generales
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Aprendizaje continuo.
                  li
                    i.fas.fa-check
                    p.mb-0  Liderazgo.
                  li
                    i.fas.fa-check
                    p.mb-0  Trabajo en equipo.
                      
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t4-f3.svg')})`}")  

      .row.mb-5
        .col-lg-7(data-aos='slide-left')
          p.mb-3  Buena parte del éxito de las explotaciones pecuarias radica en el entrenamiento que recibe el talento humano, del grado de preparación con el que cuenta para la ejecución de las labores y de haber desarrollado las competencias necesarias para desempeñarse en determinada actividad. Es así como en las actividades de planeación es importante identificar las habilidades, capacidades y destrezas de cada uno de los miembros de la planta de personal con el fin de coordinar las acciones pertinentes para aprovechar esos talentos individuales.
        .col-lg-5
          figure(data-aos='flip-right')
            img.nW.centered(src='@/assets/curso/t4-i6.jpg' alt='imagen decorativa') 







    Separador
    br
    br
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3  Recursos ambientales
    .tarjeta.bg-sliders.p-4.mb-5.shadow-box
      .row
        .col-lg-1
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
        .col-lg-6
          .h4 Recursos ambientales
          p.mb-3  Otro de los recursos necesarios para adelantar la actividad productiva de manera eficiente, es la identificación de los recursos ambientales, en términos de materiales aprovechables, pero también de servicios ecosistémicos. Para caracterizar la oferta de servicios ambientales, es necesario identificar las condiciones agroecológicas de la zona.
        .col-lg-5
          figure(data-aos='flip-up')
            img.nW.centered(src='@/assets/curso/t4-i7.png' alt='imagen decorativa')           

    .titulo-tercero 
      h3  Condiciones agroecológicas
    .row.mb-5.justify-content-center
      .col-lg-10
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t4-info1.svg', alt='imagen decorativa')

          div(x="15%" y="86%" numero="+")
            .tarjeta.color-primario.p-4.shadow-box
              p Temperatura, humedad relativa, brillo solar, precipitación, vientos. El conocimiento de estas variables permite identificar a qué fenómenos climáticos se puede enfrentar la explotación pecuaria para poder actuar en consecuencia. 

          div(x="50%" y="86%" numero="+")
            .tarjeta.color-primario.p-4.shadow-box
              p La edafología hace referencia al suelo. En este aspecto es clave identificar las propiedades físicas del suelo (infiltración, textura, porosidad) así como sus propiedades químicas (acidez, salinidad, conductividad eléctrica). Las condiciones del suelo se relacionan directamente con la disponibilidad de alimento en sistemas de pastoreo. 

          div(x="85%" y="86%" numero="+")
            .tarjeta.color-primario.p-4.shadow-box
              p El conocimiento de la biodiversidad del entorno, permite identificar recursos aprovechables bien sea para la construcción de instalaciones o para la obtención de servicios ambientales como bosques protectores de fuentes hídricas. 
    
    p.mb-5  De acuerdo con sus características, los inventarios en una explotación pecuaria pueden clasificarse de la siguiente manera:
    
    .row.mb-3.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Inventario de materias primas e insumos")
            .col-md-12.mb-4.mb-md-0
              .tabla-a.color-acento-contenido.mb-5 
                table
                  thead
                    tr
                      th Uso
                      th Descripción
                      th Marca
                      th Fecha de vencimiento
                      th Unidad
                      th  Cantidad
                      th  Valor comercial unitario                      
                      th  Valor total
                                          
                  tbody
                    tr
                      td Fertilizante
                      td  Urea, bulto 50 kilogramos 
                      td  Yara 
                      td  23-12-2025 
                      td  Bulto           
                      td  30 
                      td  90.000 
                      td  2.700.000

          .row(titulo="Inventario de animales")
            .col-md-12.mb-4.mb-md-0
              figure(data-aos='flip-up')
                img.nW.centered(src='@/assets/curso/t4-table1.png' alt='imagen decorativa')                  

          .row(titulo="Inventario de cobertura del suelo")
            .col-md-12.mb-4.mb-md-0
              figure(data-aos='flip-up')
                img.nW.centered(src='@/assets/curso/t4-table2.png' alt='imagen decorativa')
                
          .row(titulo="Inventario de equipos y herramientas")
            .col-md-12.mb-4.mb-md-0
              figure(data-aos='flip-up')
                img.nW.centered(src='@/assets/curso/t4-table3.png' alt='imagen decorativa')                         

          .row(titulo="Inventario de instalaciones")
            .col-md-12.mb-4.mb-md-0
              figure(data-aos='flip-up')
                img.nW.centered(src='@/assets/curso/t4-table4.png' alt='imagen decorativa')   

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.tarjeta--gris.p-4
          p.mb-0  Para la elaboración de inventarios acordes con las necesidades de la explotación pecuaria, es clave identificar en primera instancia qué se quiere cuantificar y cómo se va a clasificar. Algunos ejemplos de las columnas que pueden llevar los inventarios de materias primas, animales, herramientas y suelos son los siguientes. 


    .neg-margin-x.bg-curved
      #t_4_4.titulo-segundo.color-acento-contenido
        h2 4.4  Elaboración de cronogramas
      
      p.mb-5  Con base en el análisis de recursos disponibles, se procede a la elaboración de los cronogramas de trabajo que son herramientas gráficas, esenciales en la planeación, y en las cuales se plasman las actividades a realizar y se estiman los tiempos necesarios para cumplirlas.

      .row.mb-5.justify-content-center
        .col-lg-10
          p.mb-5.text-bold Para la elaboración de un cronograma en una empresa pecuaria es importante conocer lo siguiente:
          ImagenInfografica.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t4-info2.svg', alt='imagen decorativa')

            div(x="5%" y="13%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p El tiempo que puede invertir una persona en determinadas actividades. Por ejemplo, alimentación de peces, montaje de cercas. 

            div(x="94%" y="13%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p Festividades y actividades socioculturales de los habitantes de la región.

            div(x="100%" y="50%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p Tipo de transporte predominante empleado en la zona.
                
            div(x="94%" y="88%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p Tiempos de desplazamiento entre la unidad productiva y los principales centros de consumo. 

            div(x="5%" y="88%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p Ciclos productivos de las diferentes especies. Es decir, por ejemplo, el tiempo que se requiere entre nacimiento y destete, entre inseminación y nacimiento, entre siembra de alevinos y recolección de adultos.
                
            div(x="0%" y="50%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p El comportamiento de las condiciones climáticas en la unidad productiva: temporadas secas, temporadas lluviosas, épocas de mayor incidencia de vientos, entre otras.




      
      p.mb-5  Un ejemplo clásico de cronograma es el que se presenta a continuación, donde las actividades se presentan mes a mes. 
      .row.mb-5.justify-content-center
        .col-lg-10
          p.mb-3.text-bold  Ejemplo de cronograma de actividades
          figure(data-aos='slide-left')
            img(src='@/assets/curso/t4-t1.svg' alt='imagen decorativa')           

      p.mb-5  En algunos cronogramas, es posible combinar las actividades que se van a desarrollar en la explotación con eventos externos a la unidad productiva, lo cual es de mucha utilidad cuando se están programando las actividades mensuales o semanales, pues permite prepararse para eventuales contingencias.
      .row.mb-5.justify-content-center
        .col-lg-10
          p.mb-3.text-bold  Ejemplo de cronograma de actividades con eventos programados
          figure(data-aos='slide-right')
            img(src='@/assets/curso/t4-t2.svg' alt='imagen decorativa')      


      .row.mb-5
        .col-lg-1
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
        .col-lg-11
          p.mb-3  Si bien en la explotación pecuaria se cuenta con un cronograma de actividades que indica los tiempos en los cuales se desarrollarán las actividades, es importante hacer una buena gestión de contingencias. Una contingencia es una situación fuera de lo común, que puede presentarse o no, con la capacidad de alterar el normal funcionamiento de la unidad pecuaria. Las contingencias no son evitables, pero sus impactos sí se pueden minimizar.

      
      .row.mb-5.justify-content-center
        .col-lg-10
          p.mb-3.text-bold  Para el manejo de las contingencias, se definen las siguientes fases:
          ImagenInfografica.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t4-info3.svg', alt='imagen decorativa')

            div(x="10%" y="13%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box
                p Se basa en acciones para evitar o prevenir que se presente determinada situación, como mantener protocolos de bioseguridad, identificar e inventariar las amenazas, almacenar correctamente los productos tóxicos, entre otras. 

            div(x="90%" y="13%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box          
                p Es la identificación de los recursos necesarios para la atención de la contingencia de una forma rápida y eficaz. Parte de ello es la elaboración de un plan de contingencia con sus respectivos protocolos.   

            div(x="90%" y="88%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box          
                p Es la etapa que se da después de superar la contingencia y corresponde con un periodo de restauración de las áreas afectadas. Igualmente, en este momento, se hace una evaluación del manejo de la contingencia con el fin de elaborar los respectivos planes de mejora.
            div(x="10%" y="88%" numero="+")
              .tarjeta.color-primario.p-4.shadow-box          
                p En esta etapa se lleva a cabo la implementación del plan de contingencia de acuerdo con el protocolo diseñado.  






















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
