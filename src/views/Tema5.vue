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
    p.mb-5  A continuación, se verán los protocolos de mantenimiento de equipos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UQ3yq_lsbNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




    Separador
    br
    br
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3  Protocolos de desinfección
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t5-i3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 
              span.text-green Una de las formas de asegurar el cumplimiento de las normas de bioseguridad al interior de la explotación pecuaria, es vigilando los protocolos de desinfección, tanto de equipos como de instalaciones.
              | &nbsp;A continuación, se presentan los principales aspectos que se deben considerar para el diseño e implementación de protocolos de desinfección en las explotaciones pecuarias.
    .row.mb-5
      .col-lg-7
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Desinfección de equipos") Cuando la limpieza de los equipos se realiza sin tener que remover ninguno de sus componentes se dice que este es un proceso CIP (<i>clean-in-place</i>). Por el contrario, cuando la limpieza del equipo requiere del desmonte de alguna de sus partes, se denomina un proceso COP (<i>clean-out-of-place</i>). Generalmente, en la limpieza y desinfección de los equipos se utilizan detergentes con baja producción de espuma.
          div(numero="2" titulo="Desinfección de instalaciones") 
            ul.lista-ul 
              li
                i.fas.fa-check
                p.mb-0 la limpieza de los equipos se realiza sin tener que remover ninguno de sus componentes se dice que este es un proceso CIP (<i>clean-in-place</i>). Por el contrario, cuando la limpieza del equipo requiere del desmonte de alguna de sus partes, se denomina un proceso COP (<i>clean-out-of-place</i>). Generalmente, en la limpieza y desinfección de los equipos se utilizan detergentes con baja producción de espuma.
              li
                i.fas.fa-check
                p.mb-0  Es importante llevar registros siempre de la realización de estas actividades en la explotación pecuaria, ya que permite la trazabilidad.
              li
                i.fas.fa-check
                p.mb-0  Los productos utilizados para la limpieza deben corresponder a productos autorizados para ese fin. Deben estar claramente definidos y contar con sus respectivas fichas técnicas. También se deben definir las concentraciones, modos de empleo, equipos necesarios para su aplicación rotación de productos y cronograma de actividades de limpieza y desinfección.
              li
                i.fas.fa-check
                p.mb-0  En los periodos de descanso, especialmente en aves, es común la realización de los procesos de limpieza y desinfección para eliminar la carga de patógenos que deja en el alojamiento la camada saliente. Es importante aplicar sustancias desinfectantes que reduzcan la población de patógenos y esperar un tiempo prudente para que actúen. Después de esto se procede a instalar la nueva camada.
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i4.jpg' alt='imagen decorativa') 
    
    .titulo-tercero
      h3  Pasos de los procesos de limpieza y desinfección
    .row.mb-5.justify-content-center.green-b
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h4 Limpieza en seco
              p.mb-3  Se utiliza una escoba o un cepillo para barrer todas las impurezas y agentes contaminantes presentes en las superficies de la unidad pecuaria.  
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t5-f1.svg')})`}")  
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h4 Enjuague previo
              p.mb-3  Con la ayuda de agua se quitan pequeñas partículas que no fueron retiradas en la fase de lavado en seco.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t5-f2.svg')})`}")  
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h4 Aplicación de detergente
              p.mb-3  Con el detergente se desprenden la suciedad y las películas bacterianas y las mantienen en solución o suspensión. 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t5-f3.svg')})`}")  
    .row.mb-5.justify-content-center.green-b
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h4 Enjuague posterior
              p.mb-3  Usando agua se retiran los restos de partículas contaminantes que aún permanezcan sobre la superficie. Es igualmente importante retirar los restos de detergente, ya que estos pueden disminuir la eficacia de los agentes desinfectantes que se usen posteriormente. 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t5-f4.svg')})`}")     



      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h4 Aplicación de desinfectante
              p.mb-3  Una vez se retiren las partículas de suciedad y los restos de detergente se procede a desinfectar las superficies.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t5-f5.svg')})`}")        
            

    .titulo-tercero
      h3 Detergentes y desinfectantes
    p.mb-5  Los detergentes facilitan la remoción de las partículas de suciedad, por lo que son recomendados en todos los procesos de limpieza y desinfección. 
    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Detergentes")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-3  Los detergentes facilitan la remoción de las partículas de suciedad, por lo que son recomendados en todos los procesos de limpieza y desinfección. Sin embargo, los detergentes de uso general son poco recomendados en superficies donde se hace procesamiento, en donde se recomienda, en su lugar, el uso de detergentes alcalinos o clorados. 
            p.mb-3  Los detergentes clorados se emplean en superficies que, en ocasiones, resultan difíciles de limpiar, pero no se recomiendan en superficies como el aluminio, debido a que son altamente corrosivos. Es importante mencionar que a pesar de que los detergentes son fundamentales en los procesos de limpieza, no son desinfectantes.   
            p.mb-3  Dentro de la clasificación de los detergentes, existen los de uso general, los alcalino o clorados, los ácidos y los enzimáticos y la eficacia de cualquiera de ellos depende de los siguientes factores:        
          .col-md-5
            figure
              img(src='@/assets/curso/t5-i5.jpg', alt='Texto que describa la imagen')
          .clearfix.mb-5
          .col-lg-12
            figure.slideInLeft
              img(src='@/assets/curso/t5-gx1.svg', alt='Texto que describa la imagen')            

      .py-3.py-md-4(titulo="Desinfectantes")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-3  En cuanto a los desinfectantes se tiene que es posible que estos no requieran enjuague antes de su uso, aunque esto depende del tipo de desinfectante y su concentración. Estos productos deben estar aprobados por la autoridad sanitaria y su empleo debe realizarse siguiendo las recomendaciones del fabricante. 
            p.mb-3  Los productos desinfectantes basados en cloro son los más utilizados en diversas industrias, debido a que toleran aguas calcáreas, son fáciles de conseguir, económicos, además que contrarrestan una amplia variedad de hongos y bacterias. Además del cloro, existen otros compuestos basados en amonio cuaternario, que tienen como desventaja que requieren mayor tiempo de exposición para aumentar su efectividad, lo cual les concede un mayor efecto residual. Debido a que no son eficaces frente a algunos patógenos, es recomendable rotarlos con otros desinfectantes.
          .col-md-5
            figure.slideInLeft
              img(src='@/assets/curso/t5-i6.jpg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Otros tipo de desinfectantes")
        .row
          .col-md-7.mb-4.mb-md-0
            p.mb-3  En una tercera categoría, están los desinfectantes basados en iodo, denominados iodóforos, los cuales resultan altamente eficaces contra diversos patógenos, incluso hongos y levaduras incluso en bajas concentraciones. Otra de sus ventajas, es que son más estables, menos corrosivos, no irritan la piel y funcionan bien con aguas calcáreas. 
            p.mb-3  Otro grupo lo conforman los desinfectantes ácidos. Estos poseen una estructura más estable a altas temperaturas o en presencia de materia orgánica, por lo que se utilizan especialmente en la limpieza de equipos. Finalmente, existen otros agentes desinfectantes entre los cuales se destacan el ozono, la luz ultravioleta y el agua caliente, pero su uso es menos común.
          .col-md-5
            figure.slideInLeft
              img(src='@/assets/curso/t5-i7.jpg', alt='Texto que describa la imagen')



    Separador
    br
    br
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4  Manejo seguro de residuos

    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa') 
      .col-lg-11
        p.mb-3  Para el almacenamiento de estas sustancias desinfectantes y de los detergentes, es importante tener en cuenta las siguientes recomendaciones, debido a que son sustancias peligrosas que pueden llegar a causar daños a la salud de las personas o los animales, si no se toman las debidas precauciones.
    
    .titulo-quinto.color-acento-contenido
      h4 Recomendaciones para almacenamiento de sustancias peligrosas
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i8.jpg' alt='imagen decorativa')      
      .col-lg-4
        SlyderF(columnas="col-12")
          .tarjeta.yellow-custom-card.p-4
            .row.justify-content-center.mb-3
              .col-6
                img.nW.centered(src='@/assets/curso/t5-c1.svg' alt='AvatarTop')
            p.text-center Almacenamiento bajo llave en un lugar destinado únicamente para este tipo de sustancias.         

          .tarjeta.yellow-custom-card.p-4
            .row.justify-content-center.mb-3
              .col-6
                img.nW.centered(src='@/assets/curso/t5-c2.svg' alt='AvatarTop')
            p.text-center Rotulado de los recipientes en los que se guardan los desinfectantes y los detergentes. 

          .tarjeta.yellow-custom-card.p-4
            .row.justify-content-center.mb-3
              .col-6
                img.nW.centered(src='@/assets/curso/t5-c3.svg' alt='AvatarTop')
            p.text-center Señalización de las áreas en las que se almacenan este tipo de productos.  

          .tarjeta.yellow-custom-card.p-4
            .row.justify-content-center.mb-3
              .col-6
                img.nW.centered(src='@/assets/curso/t5-c4.svg' alt='AvatarTop')
            p.text-center Conservar las hojas de seguridad de estos elementos para saber cómo actuar en caso de emergencia. 


          .tarjeta.yellow-custom-card.p-4
            .row.justify-content-center.mb-3
              .col-6
                img.nW.centered(src='@/assets/curso/t5-c5.svg' alt='AvatarTop')
            p.text-center Mantener la bodega en buenas condiciones de ventilación, humedad e iluminación.

    p.mb-5  Como en todas las actividades humanas, las explotaciones pecuarias también son generadoras de residuos de toda índole, y cuando no reciben un manejo apropiado terminan convirtiéndose en foco de contaminación y de proliferación de especies indeseadas.
    .tarjeta.bg-sliders.p-5.mb-5.shadow-box 
      .row.justify-content-center
        .col-lg-1
          figure(data-aos='flip-left')
            img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')           
        .col-lg-6
          .h4 Manejo seguro de residuos
          p.mb-3  Para lograr una eficiente gestión de los residuos sólidos, es necesario, en primer lugar, diferenciarlos unos de otros, de acuerdo con los parámetros de clasificación existentes. En segunda instancia, es imperativo definir el sistema o los sistemas a emplear para hacer una gestión integral de los residuos, de manera que los impactos que estos puedan generar no trasciendan de la unidad productiva.

        .col-lg-5
          figure(data-aos='flip-left')
            img.nW.centered(src='@/assets/curso/t5-i9.png' alt='imagen decorativa')      

    .titulo-tercero
      h3  Clasificación de residuos
    p.mb-5  Los criterios para la clasificación de los residuos sólidos son variados, pero los más utilizados son los siguientes:

    .titulo-quinto.color-acento-contenido
      h4 Clasificación de los residuos sólidos
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t5-g1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              .h4 Residuos reciclables
              p En esta categoría se ubican materiales como cartón, papel, plástico, PVC, polietileno, vidrio y metales. 

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t5-g2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              .h4 Residuos no reciclables
              p Papel o cartón contaminados, restos de comida, bombillas. 

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t5-g3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              .h4 Residuos orgánicos
              p Excretas, plumas, huevos dañados, restos vegetales.
              
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t5-g4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              .h4 Residuos especiales
              p Empaques de productos agroquímicos, residuos de medicamentos, restos anatomopatológicos, empaques de sustancias corrosivas.

    
    .titulo-tercero
      h3  Disposición final
    .row.mb-5
      .col-lg-7
        p.mb-3  La actividad productiva pecuaria, al igual que otras explotaciones, genera una gran cantidad de residuos, la mayoría de ellos orgánicos, los cuales deben manejarse adecuadamente para evitar la proliferación de patógenos, la contaminación de suelos y aguas y la generación de olores ofensivos. La disposición final de los residuos se realiza de acuerdo con el tipo de material que se genere, conforme a la clasificación establecida en la explotación pecuaria. 
        p.mb-3  Respecto a los métodos para la disposición final de estos residuos se tiene lo siguiente:
      .col-lg-5 
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i10.jpg' alt='imagen decorativa')      


    .row.mb-5
      .col-lg-5
        figure(data-aos='slide-left')
          img(src='@/assets/curso/t5-i11.jpg' alt='imagen decorativa')              
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .div(titulo="Residuos reciclables")
            p.mb-3  Estos se depositan en recipientes ubicados dentro de la explotación pecuaria los cuales deben estar debidamente rotulados y dispuestos en un área específica. El sitio de almacenamiento de los residuos debe estar bien ventilado, tener fácil acceso, estar construido con materiales que permitan la limpieza de sus superficies y que disponga de los medios para evitar la entrada de vectores (Decreto 1140 de 2003).
          .div(titulo="Residuos no reciclables")
            p.mb-3   Estos materiales también se almacenan en contenedores debidamente rotulados, los cuales deben indicar claramente qué tipo de materiales se pueden depositar allí. Estos materiales se almacenarán en un lugar destinado para tal fin, el cual debe permitir su fácil limpieza, tener buen acceso y restringir el acceso de vectores.
          .div(titulo="Residuos orgánicos")
            p.mb-3  Este tipo de residuos pueden recibir un manejo especial al interior de la explotación pecuaria, pues son totalmente biodegradables y pueden transformarse en abono fácilmente. La gestión de estos residuos comienza con la separación en la fuente. Los residuos orgánicos se disponen en áreas de compostaje o lombricultivo en las cuales mediante procesos enteramente naturales se degradan. Es importante capacitar al personal sobre la importancia de separar los residuos y hacer una correcta disposición.  
          .div(titulo="Residuos especiales")
            p.mb-3 Este tipo de residuos requieren de un manejo distinto debido a que, por su naturaleza y los componentes que los integran, resultan peligrosos para los animales y para el personal que labora en la unidad productiva. Los envases de plaguicidas deben someterse en primera instancia a un proceso conocido como triple lavado, el cual consiste en enjuagar con agua tres veces el recipiente antes de perforarlo y almacenarlo. En relación con los residuos de vacunas se inactivan sumergiéndolos en soluciones desinfectantes por 24 horas. Por su parte las agujas empleadas para la inyección de medicamentos se disponen en “guardianes”, para su posterior disposición.
            p.mb-3  En algunas explotaciones avícolas el manejo de las mortalidades es uno de los temas más complejos, por lo que en muchas de ellas se opta por enterrar los animales y así se reducen los riesgos de transmisión de enfermedades y olores ofensivos.

















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
