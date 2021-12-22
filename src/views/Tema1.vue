<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span 1
      h1 Sistemas productivos pecuarios

    
    #t_1_1.titulo-segundo.color-acento-contenido
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
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Características
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
      .col-lg-11(data-aos='slide-left')
        p.mb-0  Para conseguir unidades pecuarias organizadas conforme a los parámetros técnicos es necesario implementar procesos acordes a la normatividad aplicable, definiendo los recursos disponibles y conociendo los procesos que conlleva la implementación de sistemas en diversos entornos rurales para controlar el funcionamiento de la unidad pecuaria, a continuación, se verán sus características.

    .row.mb-5.justify-content-center.green-b
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Versatilidad
              p Es una actividad que se adapta fácilmente a una variedad de condiciones que pueden ser de tipo agroecológico, económico, sociocultural y tecnológico, entre otras.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c1.jpg')})`}")  

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Generación de subproductos
              p En la actividad pecuaria es común la obtención de subproductos los cuales son empleados tanto al interior de la unidad productiva como fuera de ella.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c2.jpg')})`}")  

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Individuos y poblaciones
              p Este tipo de explotaciones, dependiendo de la especie animal, se puede hacer un manejo enfocado en los individuos (en el caso de los bovinos o los equinos) o en las poblaciones (como ocurre con las aves, conejos o cuyes). 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c3.jpg')})`}")  
    .row.mb-5.justify-content-center.green-b
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Movilidad
              p Dependiendo de las condiciones ambientales o de la disponibilidad de alimento, algunas de las explotaciones pecuarias pueden trasladarse de un lugar a otro. Esto se da sobre todo en la producción ganadera, donde es común la migración de animales según las épocas de abundancia o escasez de pasturas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c4.jpg')})`}")  

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .h3 Alojamiento e infraestructura asociada
              p Siempre que se desarrolla un sistema productivo pecuario es necesario asegurar unas instalaciones mínimas para el alojamiento de los animales y una infraestructura complementaria que facilite las labores que demande su manejo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c5.jpg')})`}") 

    Separador
    br
    br
    #t_1_3.titulo-segundo.color-acento-contenido
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

        .row
          .col-md-6.mb-4.mb-md-0
            p Es la fuente de energía que sostiene a los animales que hacen parte del sistema productivo. Puede ser natural, como en el caso de las praderas, o suplementada como se hace en sistemas intensivos avícolas, por ejemplo. 
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s2.png', alt='imagen decorativa')
            figcaption Alimento

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Alcance de la medición
            p Son las construcciones o adecuaciones de infraestructura para el alojamiento de los animales o para facilitar las labores de manejo como ordeño, alimentación.
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s3.png', alt='imagen decorativa')
            figcaption Instalaciones

        .row
          .col-md-6.mb-4.mb-md-0
            p Son elementos que facilitan el manejo de la explotación pecuaria y que se utilizan para diversas labores. Tipos de equipos: ordeño mecánico, nebulización de medicamentos o ensilaje. Herramientas: fumigadora, tijera, pala, martillo.    
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s4.png', alt='imagen decorativa')
            figcaption Equipos y herramientas

        .row
          .col-md-6.mb-4.mb-md-0
            p Corresponde al factor humano y consiste en la forma como se organizan, administran y disponen los componentes del sistema productivo. Igualmente, se relaciona con el desarrollo de las labores necesarias para su sostenimiento.    
          .col-md-6
            figure
              img(src='@/assets/curso/t1-s5.png', alt='imagen decorativa')
            figcaption Manejo


    Separador
    br
    br
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4  Principales explotaciones pecuarias
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
      .col-lg-11(data-aos='slide-left')
        p.mb-0  Las explotaciones pecuarias son tan diversas como lo son las especies animales, pues son múltiples las iniciativas de crianza y beneficio que se han desarrollado en diferentes latitudes. Incluso algunas de ellas pueden resultar exóticas dependiendo del contexto en el que se desarrollen. No obstante, de acuerdo con su importancia económica y el volumen de la producción, en el ámbito nacional las principales explotaciones pecuarias podrían agruparse en las siguientes categorías:
    
    .row.mb-5.justify-content-center
      .col-lg-10
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-info1.png', alt='Texto que describa la imagen')

          div(x="0%" y="5%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Ganado bovino
                  p.mb-3  Es tal vez una de las explotaciones pecuarias más difundida en el mundo y se dedica principalmente a la producción de carne y leche. Se efectúa en sistemas intensivos, semiintensivos y extensivos en múltiples condiciones agroecológicas.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p1.png', alt='imagen decorativa')

          div(x="0%" y="23%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Porcinos
                  p.mb-3  La producción porcícola se desarrolla en múltiples climas y altitudes, en sistemas que pueden ser extensivos e intensivos.
                  p.mb-3  Estas explotaciones se orientan principalmente a la producción de carne, con destino al consumo directo y a la industria. Igualmente, es común la producción de lechones.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p2.png', alt='imagen decorativa')

          div(x="0%" y="40%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Avícola
                  p.mb-3  Esta es una de las industrias más grandes que existen en el mundo, pues es una de las proteínas de origen animal más consumidas. En la industria avícola destacan la producción de huevo, pollo de engorde y pollo de levante.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p3.png', alt='imagen decorativa')

          div(x="0%" y="55%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Búfalos
                  p.mb-3  La producción de carne y leche de búfalo se desarrolla, principalmente, en zonas de trópico bajo, donde se dan condiciones de alta temperatura. Son una fuente importante de proteína. 
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p4.png', alt='imagen decorativa')

          div(x="0%" y="70%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Equinos
                  p.mb-3  A este grupo pertenecen, principalmente, caballos, asnos y mulares. Estos animales se utilizan a menudo como apoyo en las labores del campo, en el deporte, las exposiciones, la producción de genética, la recreación y la producción de carne. 
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p5.png', alt='imagen decorativa')                    

          div(x="0%" y="88%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Ovinos
                  p.mb-3  Es uno de los sistemas de ganadería más antiguos y conocidos del mundo. Estos animales, por lo general, se destinan para la obtención de carne, especialmente los camuros, y lana, como en el caso de las ovejas. Estos animales poseen un amplio rango de adaptación climática. 
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p6.png', alt='imagen decorativa')    

          div(x="100%" y="5%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Caprinos
                  p.mb-3  Junto con los ovinos, los caprinos también pertenecen al grupo de los pequeños rumiantes y son una de las explotaciones pecuarias más populares debido a su gran capacidad adaptativa. En este grupo se destaca la producción de cabras doble propósito. 
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p7.png', alt='imagen decorativa')   

          div(x="100%" y="23%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Otras aves
                  p.mb-3  Además del pollo de engorde y la gallina ponedora, existen otras aves que igualmente se consideran de importancia económica debido a su participación en el ámbito comercial. 
                  p.mb-3  Entre estas se encuentran pavos, patos, codornices, gansos, palomas y aves ornamentales. Estos animales se encuentran en múltiples rangos de altitud y temperatura, lo cual resulta muy favorable desde el punto de vista técnico. 

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p8.png', alt='imagen decorativa')   


          div(x="100%" y="40%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Otras especies menores
                  p.mb-3  Dentro de este grupo de especies menores destacan actividades productivas como la cunicultura y la producción de cuy. 
                  p.mb-3  Estos animales se constituyen en fuente importante de alimento a muy bajo costo. Además de la carne, su piel también es aprovechable.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p9.png', alt='imagen decorativa')   

          div(x="100%" y="55%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Peces
                  p.mb-3  Este es otro de los grandes grupos de especies animales capaces de constituir proyectos productivos con altos niveles de rentabilidad. 
                  p.mb-3  Este tipo de proteínas tienen una alta demanda en diversos espacios, además que estos montajes se adaptan a diversas condiciones agroecológicas.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p10.png', alt='imagen decorativa')   

          div(x="100%" y="70%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Especies no convencionales
                  p.mb-3  Recientemente, algunas especies animales han empezado a adquirir relevancia en el escenario productivo debido a su potencial alimenticio. 
                  p.mb-3  Dentro de este grupo destacan reptiles como iguanas, babillas y tortugas hicoteas. También existen explotaciones de caracoles, avestruces, llamas y alpacas. 

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p11.png', alt='imagen decorativa')   

          div(x="100%" y="88%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-7
                  .h4 Insectos y anélidos
                  p.mb-3  Existen iniciativas de cría de mariposas con fines ornamentales; explotación apícola para la obtención de miel y polen, larvas de gusano de seda, lombriz roja californiana para la producción de proteína animal o para la transformación de los subproductos de la industria agropecuaria.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t1-p12.png', alt='imagen decorativa')   


    .titulo-tercero 
      h3  Aplicabilidad de los registros
    p.mb-5  Los registros son muy útiles para evaluar y monitorear la situación ambiental del agroecosistema, entre otras aplicaciones:
    .row.mb-5
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-n1.jpg' alt='imagen decorativa') 
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
            p.mb-0  Son evidencias útiles para procesos pedagógicos o de investigación.            
          li
            i.fas.fa-check
            p.mb-0  Son un insumo esencial para graficar y procesar la información ambiental del agroecosistema, y en general del plan de manejo aplicado.    


    Separador
    br
    br
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Parámetros productivos
    .row.mb-5
      .col-lg-7
        p.mb-4  Dependiendo de lo que se quiera medir al interior de la explotación pecuaria se pueden identificar y cuantificar cuantos parámetros productivos se consideren necesarios, para lo cual es necesario diseñar y diligenciar registros que permitan hacer un seguimiento detallado del comportamiento de estos importantes indicadores.
        .titulo-tercero 
          h3  Parámetros productivos
        p.mb-5  Los parámetros productivos son variables cuantificables y observables que permiten analizar detalladamente el comportamiento de las unidades pecuarias en cualquiera de sus etapas, estos permiten evaluar los rendimientos y, además, facilitar la toma de decisiones administrativas teniendo en cuenta factores técnicos y productivos. Algunos de los parámetros productivos que se pueden medir al interior de las principales explotaciones pecuarias son los siguientes:

      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-i4.jpg' alt='imagen decorativa') 

    TabsC.color-primario
      .py-3.py-md-4(titulo="Parámetros productivos bovinos, bufalinos, ovinos y caprinos")
        .row
          .col-lg-12.mb-4
            .h5 Parámetros productivos bovinos, bufalinos, ovinos y caprinos
          .col-md-4.mb-4.mb-md-0
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-t1.jpg' alt='imagen decorativa')             
        
          .col-md-8
            .tabla-a.color-acento-contenido.mb-5.slideInLeft 
              table
                thead
                  tr
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(rowspan='11') Bovinos - bufalinos - ovinos - caprinos
                    td Peso promedio al nacer.
                    td Kg.
                  tr
                    td Peso promedio al destete.
                    td Kg.
                  tr
                    td Edad promedio al destete.
                    td Meses
                  tr
                    td Número de terneros.
                    td Número de animales
                  tr
                    td Número de terneras.
                    td  Número de animales
                  tr
                    td  Porcentaje de nacimiento de hembras. 
                    td  Porcentaje
                  tr
                    td  Mortalidad anual de lactantes. 
                    td  Número de animales
                  tr
                    td  Mortalidad anual de adultos. 
                    td  Número de animales
                  tr
                    td  Producción de leche diaria. 
                    td  Litros
                  tr
                    td  Número mensual de partos. 
                    td  Número de partos
                  tr
                    td  Ganancia de peso mensual. 
                    td  Kilogramos / mes

      .py-3.py-md-4(titulo="Parámetros productivos para aves")
        .row
          .col-lg-12.mb-4
            .h5 Parámetros productivos para aves
          .col-md-4.mb-4.mb-md-0
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-t2.png' alt='imagen decorativa')             
        
          .col-md-8
            .tabla-a.color-acento-contenido.mb-5.slideInLeft
              table
                thead
                  tr
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(rowspan='11') Aves
                    td Aves que inician - aves que finalizan.
                    td Número de animales
                  tr
                    td Mortalidad diaria.
                    td Número de animales
                  tr
                    td Mortalidad acumulada.
                    td Porcentaje
                  tr
                    td Peso corporal.
                    td Gramos
                  tr
                    td Longitud del pico.
                    td Milímetros
                  tr
                    td Longitud del tarso.
                    td Centímetros
                  tr
                    td Consumo de alimento diario.
                    td Gramos
                  tr
                    td Conversión de alimento.
                    td Kilogramo / Kilogramo
                  tr
                    td Masa del huevo.
                    td Gramos
                  tr
                    td Huevos día.
                    td Número de huevos
                  tr
                    td Porcentaje de pérdida de huevos.
                    td Porcentaje
            

      .py-3.py-md-4(titulo="Parámetros productivos para porcinos")
        .row
          .col-lg-12.mb-4
            .h5 Parámetros productivos para porcinos
          .col-md-4.mb-4.mb-md-0
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-t3.png' alt='imagen decorativa')             
        
          .col-md-8
            .tabla-a.color-acento-contenido.mb-5.slideInLeft 
              table
                thead
                  tr
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(rowspan='10') Porcinos
                    td Edad a la primera monta.
                    td Meses
                  tr
                    td Peso corporal.
                    td Kilogramos
                  tr
                    td Conversión de alimento.
                    td Kilogramos
                  tr
                    td Edad al sacrificio.
                    td Días
                  tr
                    td Intervalo destete monta.
                    td Meses
                  tr
                    td Abortos.
                    td Número de abortos
                  tr
                    td Porcentaje de partos.
                    td Porcentaje
                  tr
                    td Lechones nacidos vivos por camada.
                    td Número de lechones
                  tr
                    td Lechones nacidos muertos.
                    td Número de lechones
                  tr
                    td Partos/Cerda/Año.
                    td Número de partos

                    
                                       

      .py-3.py-md-4(titulo="Parámetros productivos para especies menores")
        .row
          .col-lg-12.mb-4
            .h5 Parámetros productivos para especies menores
          .col-md-4.mb-4.mb-md-0
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-t4.png' alt='imagen decorativa')             
        
          .col-md-8
            .tabla-a.color-acento-contenido.mb-5.slideInLeft 
              table
                thead
                  tr
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(rowspan='10') Especies menores (conejos - cuyes)
                    td Edad destete.
                    td Días
                  tr
                    td  Peso crías al nacer. 
                    td  Gramos 
                  tr
                    td  Número de crías al año. 
                    td  Número de animales
                  tr
                    td  Partos al año. 
                    td  Número de partos 
                  tr
                    td  Peso. 
                    td  Kilogramos
                  tr
                    td  Camadas/hembra/año. 
                    td  Número de camadas 
                  tr
                    td  Peso crías al destete. 
                    td  Gramos
                  tr
                    td  Edad al sacrificio. 
                    td  Días 
                  tr
                    td  Madurez sexual machos.
                    td  Días
                  tr
                    td  Madurez sexual hembras. 
                    td  Días

      .py-3.py-md-4(titulo="Parámetros productivos para peces")
        .row
          .col-lg-12.mb-4
            .h5 Parámetros productivos para peces
          .col-md-4.mb-4.mb-md-0
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t1-t5.png' alt='imagen decorativa')             
        
          .col-md-8
            .tabla-a.color-acento-contenido.mb-5.slideInLeft 
              table
                thead
                  tr
                    th Especie
                    th Parámetro productivo
                    th Unidad
                tbody
                  tr
                    td(rowspan='10') Peces
                    td Peso inicial
                    td Kilogramos
                  tr
                    td Peso final
                    td  Kilogramos 
                  tr
                    td  Edad al sacrificio 
                    td  Días
                  tr
                    td  Densidad por metro cúbico 
                    td  Peces / m³ 
                  tr
                    td  Ingesta total individuo 
                    td  Gramos
                  tr
                    td  Longitud total final individuo 
                    td  Centímetros 
                  tr
                    td  Mortalidad 
                    td  Porcentaje
     





    Separador
    br
    br
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6  Buenas prácticas pecuarias

    .row.mb-5.justify-content-center
      .col-lg-10.slideInLeft
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i5.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 
              span.text-green  Las buenas prácticas agrícolas y las buenas prácticas pecuarias son acciones encaminadas a la reducción de riesgos de deterioro del medio ambiente y de la contaminación cruzada de los productos agropecuarios;
              span &nbsp;a través de prácticas de manejo la higiénicas y seguras por parte de los trabajadores, contando con los elementos necesarios para tener procesos productivos donde se conserven los productos inocuos y saludables.

    .titulo-tercero 
      h3  Buenas Prácticas Pecuarias - BPP
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ic1.svg' alt='icono decorativa')    
      .col-lg-8
        p.mb-0  Según el Instituto Colombiano Agropecuario, estas se relacionan con las prácticas que se deben llevar a cabo en los sistemas pecuarios para disminuir los riesgos físicos, químicos y biológicos que puedan llegar a afectar la salud de los consumidores.
      .col-lg-3
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-l1.png' alt='imagen decorativa')    
    
    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-quinto.color-acento-contenido
          .h5 Principales aspectos de las Buenas Prácticas Pecuarias - BPP
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-ix1.svg' alt='imagen decorativa')    

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Principales aspectos de las Buenas Prácticas Pecuarias (BPP)" :icono="require('@/assets/curso/t1-ic0.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Principales aspectos de las Buenas Prácticas Pecuarias (BPP)
            p De acuerdo con la FAO, consisten en “la aplicación del conocimiento disponible a la utilización sostenible de los recursos naturales básicos para la producción, en forma benévola, de productos agrícolas alimentarios y no alimentarios inocuos y saludables, a la vez que se procuran la viabilidad económica y la estabilidad social”.
        
          .col-md-5
            figure.slideInLeft
              img(src='@/assets/curso/t1-m1.jpg', alt='Texto que describa la imagen')
    
      .py-4.py-md-5(titulo="Marco normativo de las Buenas Prácticas Pecuarias (BPP) –  Buenas Prácticas Ganaderas (BPG)" :icono="require('@/assets/curso/t1-ic2.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            .h4 Marco normativo de las Buenas Prácticas Pecuarias (BPP) –  Buenas Prácticas Ganaderas (BPG)
            p De acuerdo con lo expuesto por el Instituto Colombiano Agropecuario, existe un marco normativo para todos los aspectos relacionados con las buenas prácticas (sean pecuarias o ganaderas) que contribuye a la disminución de los riesgos a la salud asociados con el consumo de alimentos de origen animal.
        
          .col-md-5
            figure.slideInLeft
              img(src='@/assets/curso/t1-tb1.jpg', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Protocolos para acceder a la certificación" :icono="require('@/assets/curso/t1-ic3.svg')")
        .row
          .col-md-12.mb-5.mb-md-0
            .h4 Protocolos para acceder a la certificación
        
          .col-md-6
            figure.slideInLeft
              img(src='@/assets/curso/t1-list1.svg', alt='imagen decorativa')
          .col-md-6
            figure.slideInRight
              img(src='@/assets/curso/t1-list2.svg', alt='imagen decorativa')




  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
