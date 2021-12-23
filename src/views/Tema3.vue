<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planificación de la unidad productiva
    .row.mb-5.align-items-center.slideInUp
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Como en todo proyecto productivo, el proceso de planificación es una de las etapas fundamentales, pues en ella se define el área a ocupar, el número de animales a alojar, los recursos necesarios, la cantidad de alimento requerido, los materiales a emplear y la cantidad de personal necesaria para adelantar las distintas labores. El éxito o el fracaso del proyecto pecuario, depende en buena medida del análisis detallado de cada uno de los siguientes aspectos. 

      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t3-i1.jpg' alt='imagen decorativa')  

    .tarjeta.bg-sliders.shadow-box.p-5.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            p En cualquier explotación pecuaria, sin importar la especie, es necesario contar con instalaciones que atiendan las necesidades básicas de los animales; refugio, agua y alimento. 
          .col-md-6
            figure
              img(src='@/assets/curso/t3-s1.png', alt='imagen decorativa')
              figcaption Instalaciones pecuarias
        .row
          .col-md-6.mb-4.mb-md-0
            p El tipo de instalaciones a emplear, así como el área a construir, dependen principalmente del número de animales a alojar, de las condiciones agroecológicas de la zona, de la disponibilidad de recursos y del tipo de explotación que se desee implementar.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s2.png', alt='imagen decorativa')
              figcaption Instalaciones pecuarias
        .row
          .col-md-6.mb-4.mb-md-0
            p Principales instalaciones pecuarias:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Cerramiento  
              li
                i.fas.fa-check
                p.mb-0  Manejo 
              li
                i.fas.fa-check
                p.mb-0 Alimentación  
              li
                i.fas.fa-check
                p.mb-0  Alojamiento                 
              li
                i.fas.fa-check
                p.mb-0 Cuidados especiales 
              li
                i.fas.fa-check
                p.mb-0  Almacenamiento 
                
          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-s3.png', alt='imagen decorativa')
              figcaption Instalaciones pecuarias

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Cerramiento
            p Tienen el propósito de contener los animales en un área determinada: cercas, espalderas, cercas vivas, enmallados y muros. 
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s4.png', alt='imagen decorativa')
              figcaption Cerramiento

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Manejo
            p Se construyen para facilitar las labores de manejo de los animales: corrales, embarcaderos, apretaderos, parideras, casetas de ordeño y apriscos.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s5.png', alt='imagen decorativa')
              figcaption Manejo

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Alimentación
            p Facilitan la dispensación del agua, el alimento y los suplementos a los animales: comederos y bebederos.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s6.png', alt='imagen decorativa')
              figcaption Alimentación

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Alojamiento
            p Permiten contener a los animales durante su ciclo productivo y resguardarlos de los depredadores. Especialmente se utilizan para especies menores: jaulas, galpones, porquerizas y camas.
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s7.png', alt='imagen decorativa')
              figcaption Alojamiento             

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Cuidados especiales
            p Son instalaciones que facilitan el cuidado de los animales en situaciones especiales, enfermos o durante la cría: pesebreras y establos. 
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s8.png', alt='imagen decorativa')
              figcaption Cuidados especiales  

        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Almacenamiento 
            p Almacenamiento de materias primas, insumos, medicamentos, alimentos y productos: bodegas, almacenes y graneros. 
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t3-s9.png', alt='imagen decorativa')
              figcaption Almacenamiento   

    
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Instalaciones pecuarias
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 El diseño de las instalaciones pecuarias depende de diversos factores, pero básicamente está en función de la especie animal, los factores agroecológicos de la zona y la disponibilidad de materiales.
    .titulo-tercero
      h3  Diseños y características
    p.mb-5  El diseño de las instalaciones pecuarias depende de diversos factores, pero básicamente está en función de la especie animal, los factores agroecológicos de la zona y la disponibilidad de materiales. Igualmente, antes de establecer cualquier instalación es importante considerar, entre otros, los siguientes factores: 
    .row.mb-5
      .col-lg-7
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0 Ubicación en zonas alejadas de centros urbanos o vías principales afectadas por el ruido. 
          li
            i.fas.fa-check
            p.mb-0 En zonas cálidas se recomienda orientar las instalaciones en sentido oriente occidente con el fin de conseguir la mayor cantidad de sombra posible.  
          li
            i.fas.fa-check
            p.mb-0 Áreas de fácil acceso para revisar el estado de los animales. 
          li
            i.fas.fa-check
            p.mb-0  En lo posible garantizar el acceso a servicios básicos como agua y electricidad.  
          li
            i.fas.fa-check
            p.mb-0 Lugares donde se facilite el ingreso del alimento. 
          li
            i.fas.fa-check
            p.mb-0 Sitios que garanticen la seguridad de los animales y del personal operativo.
          li
            i.fas.fa-check
            p.mb-0 Definir si es una explotación intensiva, semiintensiva o extensiva.                         
      .col-lg-5
        figure
          img.nW.centered(src='@/assets/curso/t3-i3.png', alt='imagen decorativa')

    p.mb-5  Dentro de los principales diseños de instalaciones pecuarias se tienen los siguientes:
    .tarjeta.tarjeta--yellow.p-4.mb-5.shadow-box
      LineaTiempoC.color-acento-contenido(text-small)
        .row.p-4(titulo="Corrales")
          .col-lg-12
            .h4 Corrales
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Permiten el alojamiento de los animales durante el desarrollo de tareas cotidianas como vacunación, palpación, desparasitación y marcado. Cuentan con una zona denominada apretadero, la cual facilita estas labores. Tienen una zona techada con comederos y bebederos por lo que funcionan como caseta de ordeño. Ejemplo en la siguiente imagen.
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b1.png', alt='imagen decorativa')        
          .col-md-6
            p.mb-3 Este diseño de corral es adecuado únicamente para el manejo animal, pues solo está dotado de apretadero y embarcadero. Carece de cubierta, por lo que evidentemente está diseñado para que los animales no permanezcan allí durante mucho tiempo. Ejemplo en la siguiente imagen.
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b2.png', alt='imagen decorativa')     
        .row.p-4(titulo="Establos")
          .col-md-6.mb-4.mb-md-0
            .h4 Establos
            p.mb-3 El establo debe proporcionar protección al animal frente a la intemperie y se constituye en un espacio de refugio en donde además se puede alimentar y beber. Deben tener pisos blandos, generalmente de tierra, para permitir el drenaje de la orina.
          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b3.png', alt='imagen decorativa')     
        .row.p-4(titulo="Pesebreras")
          .col-md-6.mb-4.mb-md-0
            .h4 Pesebreras
            p.mb-3 Estas permiten un alojamiento adecuado a los animales en momentos de especial cuidado. Además de la cubierta cuentan con un enceramiento que los protege de los elementos. En su interior se cuenta con implementos para el cuidado de los animales, agua y alimento. 
          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b4.png', alt='imagen decorativa')    

        .row.p-4(titulo="Porquerizas")
          .col-lg-12
            .h4 Porquerizas
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El uso de determinados diseños de porquerizas depende del tipo de explotación, principalmente. En el caso de pequeñas explotaciones se pueden emplear modelos en los cuales se tiene un área para el cerdo reproductor, jaulas de maternidad y una zona de levante o engorde, tal como se presenta en la imagen. 
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b5.png', alt='imagen decorativa')        
          .col-md-6
            p.mb-3 En explotaciones intensivas, especialmente las que se dedican a la producción de carne, las instalaciones maximizan el uso de las áreas, por lo que los animales disponen de menos espacio para movilizarse.
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b6.png', alt='imagen decorativa')     

        .row.p-4(titulo="Jaulas")
          .col-md-6.mb-4.mb-md-0
            .h4 Jaulas
            p.mb-3 En la producción de especies menores bajo sistemas intensivos, principalmente de carne, se emplean jaulas como la de la imagen. En ellas se restringe la movilidad del animal y se le proporciona agua y alimento.
            p.mb-3  En sistemas extensivos se emplean jaulas itinerantes, las cuales se pueden desplazar de un lugar a otro dependiendo de la disponibilidad de alimento, permitiendo al animal la posibilidad de pastorear.

          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b7.png', alt='imagen decorativa')    

        .row.p-4(titulo="Apriscos")
          .col-md-6.mb-4.mb-md-0
            .h4 Apriscos
            p.mb-3 Estos se construyen elevados del suelo, aproximadamente a 80 cm, en un sistema que se denomina tarima. Con este sistema se evita que los animales entren en contacto con las excretas, además que facilita el aseo de las instalaciones. Igualmente, el sitio de ordeño también se debe ubicar sobre una tarima, lo cual facilita la labor del operario.
          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b8.png', alt='imagen decorativa')    

        .row.p-4(titulo="Galpones")
          .col-md-6.mb-4.mb-md-0
            .h4 Galpones para aves
            p.mb-3 La producción de aves de corral se puede realizar de forma extensiva, semi-intensiva e intensiva. Dependiendo del tipo de explotación así mismo se debe escoger el diseño del galpón. En la fotografía se observa un montaje semi-intensivo el cual tiene unos requerimientos mínimos, como son el encerramiento y la cubierta. 
            p.mb-3  Por otro lado, en las explotaciones intensivas la demanda de insumos, recursos, equipos y mano de obra es mucho mayor, pues por unidad de área se tiene una mayor cantidad de animales, los cuales demandan gran cantidad de alimentos, medicinas y agua, entre otras cosas. Generalmente este tipo de estructuras utilizan una cubierta a dos aguas, con cortinas laterales para el manejo de la temperatura, y un piso cubierto con un material blando, principalmente, cascarilla de arroz.

          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b9.png', alt='imagen decorativa')    

        .row.p-4(titulo="Estanques")
          .col-md-6.mb-4.mb-md-0
            .h4 Estanques para peces
            p.mb-3 En la actualidad existen múltiples diseños los cuales se acomodan a las necesidades de los productores y la disponibilidad de recursos. Estos pueden ser cavados directamente en el suelo o construidos con materiales que permitan almacenar el agua necesaria para la explotación, como es el caso de los estanques de geomembrana que se aprecian en la fotografía.

          .col-md-6
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t3-b10.png', alt='imagen decorativa')  


    .titulo-tercero
      h3  Áreas mínimas
    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img.nW(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
      .col-lg-11(data-aos='slide-left')
        p.mb-0  Cada una de las especies pecuarias tiene unos requerimientos mínimos de espacio en los cuales puede desarrollarse normalmente y satisfacer sus necesidades básicas. Con base en este requerimiento, por animal, es posible estimar el área a construir para alojar a los animales en buenas condiciones, de acuerdo con lo recomendado para cumplir con las Buenas Prácticas Pecuarias - BPP.
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-5(titulo="Ganado bovino - bufalino")
        h4 Ganado bovino - bufalino
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr
                th 
                th Área de descanso por animal adulto
                th Área de alimentación por animal adulto
                th Ancho de plaza comedero por animal adulto
            tbody
              tr
                td.text-bold Ganado bovino – bufalino
                td  5 m²
                td  2,5 m² 
                td  0,8 m 
        .row
          .col-lg-4
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t3-d1.png' alt='imagen decorativa')               
          .col-lg-8
            p El área de la pradera se estima mediante la medición de la cantidad de forraje disponible por metro cuadrado de potrero. Para esto es importante saber que un animal adulto, en el caso de bovinos, puede consumir hasta el 10 % de su peso en alimento al día. Es decir que si una vaca pesa 350 kilogramos, en un día consumirá 35 kilogramos de forraje. Si por cada metro cuadrado se tienen, por ejemplo, 2,8 kilogramos de forraje, para saber qué área de pastoreo requiere el animal basta con dividir los kilogramos que debe consumir el animal entre los kilogramos que produce un metro cuadrado. 

      .tarjeta.color-acento-botones.p-5(titulo="Equinos")
        h4 Áreas mínimas para equinos
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th 
                th Área pesebrera por adulto
                th Ancho de plaza adulto
            tbody
              tr
                td.text-bold  Caballos – mulares (pesado)
                td  11,5 m²
                td  0,9 m - 1 m
              tr
                td.text-bold  Asnos (semipesado)
                td  8,5 m² - 10 m²
                td  0,9 m
        p.mb-0  El ancho de plaza indica el espacio que ocupa un equino en el comedero teniendo en cuenta su longitud transversal. 
        
      .tarjeta.color-acento-botones.p-5(titulo="Porcinos")
        h4 Áreas mínimas para porcinos
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th 
                th Área porqueriza por animal
            tbody
              tr
                td.text-bold  Lechones
                td  0,25 m²
              tr
                td.text-bold  Adultos jóvenes
                td  0,5 m²
              tr
                td.text-bold  Adultos
                td  1 m²
              tr
                td.text-bold  Jaula para cerdas de cría
                td  0,9 m² (ancho 0,45 m x largo 2,20 m)

        p.mb-0  En las explotaciones semitecnificadas, el espacio para la cerda de cría con sus lechones puede ser de 7 m², donde el 60 %, aproximadamente, del área es para la cerda y el restante 40 % es para las crías. 

      .tarjeta.color-acento-botones.p-5(titulo="Caprinos")
        h4 Áreas mínimas para caprinos
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th 
                th Área cubierta
                th Área descubierta             
            tbody
              tr
                td.text-bold  Recién nacidos (0 a 3 meses)
                td  1 m²
                td  1 m²
              tr
                td.text-bold  Destetos (4 a 8 meses)
                td  1,5 m²
                td  2 m²
              tr
                td.text-bold  Adultos
                td  2 m²
                td  2,5 m²
              tr
                td.text-bold  Gestantes
                td  2,5 m²
                td  2,5 m²  
              tr
                td.text-bold  Machos
                td  3 m²
                td  3 m²
      .tarjeta.color-acento-botones.p-5(titulo="Ovinos")
        h4 Áreas mínimas para ovinos
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Categoría
                th Área
            tbody
              tr
                td.text-bold  Ovejas
                td  1,5 – 2 m²
              tr
                td.text-bold  Crías (3 a 4 animales)
                td  1 m²
              tr
                td.text-bold  Corderas (2 a 3 animales)
                td  1 m²
              tr
                td.text-bold  Machos
                td  4 – 6 m²               

      .tarjeta.color-acento-botones.p-5(titulo="Especies menores")
        h4 Áreas mínimas para especies menores
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t3-e1.svg' alt='imagen decorativa')     

      .tarjeta.color-acento-botones.p-5(titulo="Peces")
        h4 Peces
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Especie
                th Densidad final. Aproximado de peces por m²
            tbody
              tr
                td.text-bold  Cachama blanca
                td  4
              tr
                td.text-bold  Mojarra roja
                td  15
              tr
                td.text-bold  Tilapia
                td  4 - 15

        p.mb-3  La densidad de animales por m² depende en buena medida del caudal de agua del estanque. Para caudales de entre 1 y 3 litros por segundo las densidades pueden ser de 4 peces por m². En caudales de 40 a 60 litros por segundo, es posible tener densidades de hasta 20 peces por m². 

    .titulo-tercero
      h3  Dimensiones
    
    .row.mb-5
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5
          p.mb-3  Las dimensiones de las instalaciones para la cría de especies pecuarias dependen del número de animales que se desee alojar. Puesto que existe información detallada sobre las densidades que se manejan en las diversas explotaciones, sean intensivas, semiintensivas y extensivas, es fácil calcular qué área construida se requiere para asegurar el bienestar animal. 
          p.mb-3  Para el cálculo de áreas solamente se debe conocer el área que ocupa un solo ejemplar, por lo que es importante definir con cuántos animales se iniciará la explotación. 
          p.mb-3  A continuación, se presentan algunos ejemplos.

      .col-lg-5 
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t3-i4.jpg' alt='imagen decorativa')

    .cajon.border-box.mb-5
      .row
        .col-lg-6
          .p-3
            .h4 Corral para ganado bovino
            p.mb-3  Área por animal adulto: 5 m² - número de animales: 10 – ancho de plaza comedero: 0,8 m
            p.mb-3  Con base en estos datos, en primer lugar, se estima el área total del corral:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  5 m²/ animal x 10 animales = 50 m². Es decir que para alojar a los 10 animales se debe construir un corral de por lo menos 50 metros cuadrados.    
            p.mb-3 En segundo lugar, se calcula el espacio del comedero:
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  0,8 m ancho de plaza/ animal x 10 animales = 8 metros. Esto indica que la longitud del comedero debe ser de por lo menos 8 metros lineales.
            p.mb-3  En tercer lugar, se distribuye el área del corral, de acuerdo con los datos obtenidos en los anteriores pasos.   

        .col-lg-6(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i5.svg')})`}"
          )  


    .row.mb-5
      .col-lg-1
        figure(data-aos='flip-left')
          img.nW(src='@/assets/curso/t1-ic1.svg' alt='imagen decorativa')        
      .col-lg-11(data-aos='slide-left')
        p.mb-0  En este caso se obtiene un corral de 50 metros cuadrados efectivos con dos comederos de 4 metros de largo cada uno y un bebedero. Este tipo de corrales, para alojamiento temporal, generalmente son cubiertos por lo que con esta estimación también es posible identificar la necesidad de materiales para esta estructura. 

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.border-box
          .row
            .col-lg-6
              .p-4
                .h4 Galpón para pollos de engorde
                p.mb-3  En el caso de los pollos de engorde se estima que en sistemas intensivos se pueden tener hasta 12 animales por metro cuadrado, por lo que, por ejemplo, para un montaje de 100 pollos las dimensiones de la instalación serían conforme a los siguientes parámetros:
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Número de animales por metro cuadrado: 12
                  li
                    i.fas.fa-check
                    p.mb-0  Número de animales para la explotación: 100

                p.mb-3 Primero se determina el área necesaria para los 100 pollos. Esto se logra dividiendo el número total de animales a alojar por el número de animales que se alojan por metro cuadrado.
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  100 animales por alojar ÷ 12 animales/ m² = 8,3 m². 
                      span.text-green Es decir que el área que necesaria para alojar 100 pollos es de 8,3 metros cuadrados.
  

            .col-lg-6
              .wrap


    p.mb-5  Para estimar la densidad de animales por unidad de área, es importante conocer las diferentes unidades de área, longitud y volumen empleadas en la agricultura, con el fin de hacer las respectivas conversiones. A continuación, se presentan las más empleadas.
    .titulo-quinto.color-acento-contenido
      h4  Principales unidades empleadas en actividades pecuarias
    .row.mb-5
      .col-lg-4
        figure(data-aos='flip-left')  
          img(src='@/assets/curso/t3-i7.jpg' alt='imagen decorativa')              
      .col-lg-8 
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Unidades de longitud")
            .row.justify-content-center
              .col-md-8
                .tabla-a.color-acento-botones.mb-5 
                  table
                    thead
                      tr
                        th Unidad
                        th Equivalencia en metros
                    tbody
                      tr
                        td.text-bold Metro
                        td 1
                      tr
                        td.text-bold Kilómetro
                        td 1.000
                      tr
                        td.text-bold Decámetro
                        td 10
                      tr
                        td.text-bold Decímetro
                        td 0,1
                      tr
                        td.text-bold Centímetro
                        td 0,01
                      tr
                        td.text-bold Milímetro
                        td 0,001
                      tr
                        td.text-bold Milla
                        td 1.609,34
                      tr
                        td.text-bold Pie
                        td 0,3048
                      tr
                        td.text-bold Yarda
                        td 0,9144
                      tr
                        td.text-bold Pulgada
                        td 0,0254

          .py-3.py-md-4(titulo="Unidades de Área")
            .row.justify-content-center
              .col-md-8
                .tabla-a.color-acento-botones.mb-5 
                  table
                    thead
                      tr
                        th Unidad
                        th Equivalencia en m²
                    tbody
                      tr
                        td.text-bold Hectárea
                        td 10.000
                      tr
                        td.text-bold Acre
                        td 4.046,86
                      tr
                        td.text-bold Pie²
                        td 0,092
                      tr
                        td.text-bold Pulgada²
                        td 0.00064516
                      tr
                        td.text-bold Yarda²
                        td 0.83
                      tr
                        td.text-bold Km²
                        td 1.000.000
                      tr
                        td.text-bold Fanegada
                        td 6.400

          .py-3.py-md-4(titulo="Unidades de volumen")
            .row.justify-content-center
              .col-md-8
                .tabla-a.color-acento-botones.mb-5 
                  table
                    thead
                      tr
                        th Unidad
                        th Equivalencia en Litros
                    tbody
                      tr
                        td.text-bold Metro³
                        td 1.000
                      tr
                        td.text-bold Galón EEUU
                        td 3,78
                      tr
                        td.text-bold Pinta EEUU
                        td 0,47
                      tr
                        td.text-bold Onza líquida
                        td 0,029
                      tr
                        td.text-bold Mililitro
                        td 0,001
                      tr
                        td.text-bold Pie³
                        td 28,31
                      tr
                        td.text-bold  Pulgada³
                        td 0,016
                      tr
                        td.text-bold  Galón imperial
                        td  4,54 
                      tr
                        td.text-bold  Pinta imperial
                        td  0,56 
                      tr
                        td.text-bold  Onza líquida imperial
                        td  0,028 

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-4  Las instalaciones para el alojamiento, manejo, protección y alimentación de las especies pecuarias deben proporcionar, entre otras cosas, lo siguiente:
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  Protección frente a los elementos: lluvia, frío, viento, sol, calor, humedad.
            li
              i.fas.fa-check
              p.mb-0 Un piso seco, firme, bien drenado y no resbaladizo que sea resistente a la orina y los excrementos. 
            li
              i.fas.fa-check
              p.mb-0  Protección frente a depredadores.
            li
              i.fas.fa-check
              p.mb-0  Espacio para desplazarse y ejercitarse.
            li
              i.fas.fa-check
              p.mb-0 Dependiendo del sistema, es ideal disponer de una zona de pastoreo. 

    .neg-margin-x.bg-curved
      .titulo-tercero
        h3  Instalaciones
      p.mb-5  Las instalaciones pecuarias más comunes para las principales explotaciones pecuarias son las siguientes:

      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.white-card.shadow-box.p-4
          .row.justify-content-center.mb-3.h-100
            .col-8
              img(src='@/assets/curso/t3-card1.png' alt='AvatarTop')
          h2.text-center Bovinos - bufalinos
          p.text-center Cercas, corrales, establos, salas de ordeño, comederos, saladeros, bebederos.

        .tarjeta.white-card.shadow-box.p-4
          .row.justify-content-center.mb-3.h-100
            .col-8
              img(src='@/assets/curso/t3-card2.png' alt='AvatarTop')
          h2.text-center Equinos
          p.text-center Cercas, corrales, establos, pesebreras, comederos, bebederos. 

        .tarjeta.white-card.shadow-box.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t3-card3.png' alt='AvatarTop')
          h2.text-center Aves
          p.text-center Corrales, galpones, camas de postura, incubadoras, comederos, bebederos.      

        .tarjeta.white-card.shadow-box.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t3-card4.png' alt='AvatarTop')
          h2.text-center Porcinos
          p.text-center Porquerizas, parideras, corrales, comederos, bebederos. 

        .tarjeta.white-card.shadow-box.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t3-card5.png' alt='AvatarTop')
          h2.text-center Ovinos - caprinos
          p.text-center Apriscos, plataformas de ordeño, comederos, bebederos.
          
        .tarjeta.white-card.shadow-box.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t3-card6.png' alt='AvatarTop')
          h2.text-center Especies menores
          p.text-center Corrales, jaulas individuales, jaulas grupales, comederos, bebederos.
        .tarjeta.white-card.shadow-box.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/t3-card7.png' alt='AvatarTop')
          h2.text-center Peces
          p.text-center Estanques, jaulas flotantes.           

      p.mb-5  Otras instalaciones recomendadas para las en la cría de especies pecuarias se describen a continuación, que han de estar acorde a las características de cada especie y los recursos disponibles.
      .row.mb-5
        .col-lg-7
          .h4 Comederos, bebederos y saladeros
          .col-lg-12
            .wrap2.blue-box.p-4.mb-4
              p.mb-0  Existen múltiples diseños de comederos, los cuales se ajustan a las condiciones de cada explotación y a la disponibilidad de recursos. En el caso de los bovinos, bufalinos y equinos, los comederos a menudo consisten en recipientes o estructuras de mampostería que pueden tener un largo variable y una profundidad de entre 20 a 25 cm. En algunas explotaciones estos comederos se elaboran a partir de materiales reutilizados como llantas o canecas plásticas abiertas por la mitad longitudinalmente. En el caso de los porcinos, ovinos y caprinos, las dimensiones de estos recipientes cambian para lograr la comodidad del animal al momento de alimentarse.

          p.mb-4  En las explotaciones porcinas, es común la instalación de bebederos automáticos o “chupos” los cuales se conectan directamente al sistema de conducción de agua para que el animal tome el líquido de forma directa.
          p.mb-4  En sistemas avícolas y de otras especies menores, los comederos y bebederos son portátiles y diseñados especialmente para evitar el desperdicio de agua y alimento.
        .col-lg-5
          figure(data-aos='flip-left')  
            img(src='@/assets/curso/t3-i8.png' alt='imagen decorativa')    

      .row.mb-5.justify-content-center
        .col-lg-3
          .tarjeta.p-4.text-center
            figure(data-aos='flip-left')  
              img(src='@/assets/curso/t3-i9.png' alt='imagen decorativa')  
            .h4 Bebederos automáticos para cerdos          

        .col-lg-3
          .tarjeta.p-4.text-center
            figure(data-aos='flip-left')  
              img(src='@/assets/curso/t3-i10.png' alt='imagen decorativa')  
            .h4 Bebederos automáticos para aves

        .col-lg-3
          .tarjeta.p-4.text-center
            figure(data-aos='flip-left')  
              img(src='@/assets/curso/t3-i11.png' alt='imagen decorativa')  
            .h4 Comedero para aves


      .row.mb-5
        .col-lg-4
          figure(data-aos='flip-up')  
            img(src='@/assets/curso/t3-i12.jpg' alt='imagen decorativa')           
        .col-lg-8(data-aos='slide-up')  
          p.mb-5  En lo relacionado con la construcción de comederos y saladeros se recomienda lo siguiente:
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0  Utilizar materiales fáciles de asear y manipular, que resistan la corrosión, las inclemencias del clima y el uso por parte de los animales.
            li
              i.fas.fa-check
              p.mb-0  Construir cubiertas que los protejan del sol y la lluvia para evitar el deterioro del alimento que se deposite allí.  
            li
              i.fas.fa-check
              p.mb-0  Ubicarlos en zonas de fácil acceso para todos los animales.  
            li
              i.fas.fa-check
              p.mb-0  Adecuarlos a las condiciones de cada explotación pecuaria.
          p.mb-3  Dependiendo de la explotación pecuaria y del ciclo donde se encuentre, existen algunas instalaciones complementarias que son necesarias para el desarrollo de la actividad productiva.    

    .tarjeta.bg-sliders.shadow-box.p-5.mb-5
      SlyderA
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 Estas instalaciones por lo general se encargan de dar confort a los animales, facilitar las labores y proporcionar los cuidados necesarios para su sostenibilidad. 
            p.mb-3  Las instalaciones más comunes que se encuentran en las unidades pecuarias cumplen las siguientes funciones.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-m1.png', alt='imagen decorativa')
              figcaption Instalaciones complementarias

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El control de temperatura es uno de los factores más críticos sobre todo en procesos de cría. Para esto se emplean cortinas que, dependiendo de la necesidad, se pueden abrir o cerrar.
            p.mb-3  También existen sistemas de calefacción que utilizan energía eléctrica o combustible para alimentar lámparas, por medio de los cuales se puede regular la temperatura en las camas, en el caso de cerdos, o en las jaulas en el caso de pollos recién nacidos.
          .col-md-6
            figure
              img(src='@/assets/curso/t3-m2.png', alt='imagen decorativa')
              figcaption Control de temperatura

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 La oxigenación de estanques, en la cría de peces, es necesaria para garantizar la oxigenación del agua, por lo que en algunos casos es imperioso adecuar las instalaciones para la operación de estos equipos. 
          .col-md-6
            figure
              img(src='@/assets/curso/t3-m3.png', alt='imagen decorativa')
              figcaption Oxigenación de estanques

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 La aireación y ventilación en sistemas intensivos es común que se requiera ventilar el lugar de alojamiento, especialmente en épocas calurosas, por lo que se deben adecuar instalaciones que faciliten la circulación del aire y la disipación de gases nocivos. 
          .col-md-6
            figure
              img(src='@/assets/curso/t3-m4.png', alt='imagen decorativa')
              figcaption Aireación y ventilación 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El manejo de residuos en todas las explotaciones pecuarias se producen residuos sólidos, por lo que es necesario adecuar espacios en los que se haga un manejo técnico de estos desechos bien sea para su disposición parcial o a su disposición final. 
          .col-md-6
            figure
              img(src='@/assets/curso/t3-m5.png', alt='imagen decorativa')
              figcaption Manejo de residuos 

        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-3 El bombeo de agua en algunas explotaciones el acceso al agua puede llegar a ser limitante, por lo que una de las alternativas es el bombeo de agua. Teniendo en cuenta estas condiciones, es necesario adecuar instalaciones que cumplan con este objetivo. 
          .col-md-6
            figure
              img(src='@/assets/curso/t3-m6.png', alt='imagen decorativa')
              figcaption Bombeo de agua


    .titulo-tercero
      h3  Elección de materiales de construcción
    .row.mb-5
      .col-lg-7
        p.mb-3 Para elegir los materiales con los que se construirán las instalaciones en la unidad pecuaria, es importante determinar si es una explotación intensiva o semiintensiva, el número de animales a alojar, la disponibilidad de recursos y las condiciones agroecológicas de la zona. Debido a que las instalaciones deben ofrecer seguridad y protección, tanto a los animales como al personal que allí labora, es importante elegir materiales resistentes frente a las condiciones del entorno y que tengan alta durabilidad. En términos generales, los materiales más empleados para la construcción de instalaciones pecuarias son los siguientes:
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i13.jpg', alt='imagen decorativa')

    .titulo-quinto.color-acento-contenido
      h4 Principales materiales de construcción empleados en instalaciones pecuarias
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Material
                th Ventajas
                th  Desventajas            
            tbody
              tr
                td.text-bold  Madera
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0 Fácil de trabajar 
                    li
                      i.fas.fa-check
                      p.mb-0  Disponibilidad
                    li
                      i.fas.fa-check
                      p.mb-0  Segura para los animales  
                    li
                      i.fas.fa-check
                      p.mb-0  Liviana y resistente
                    li
                      i.fas.fa-check
                      p.mb-0  Diversidad de formas y usos  
                    li
                      i.fas.fa-check
                      p.mb-0  Bajos costos de instalación
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo  
                    li
                      i.fas.fa-check
                      p.mb-0  Uso restringido
                    li
                      i.fas.fa-check
                      p.mb-0  Poca durabilidad  
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo de mantenimiento

              tr
                td.text-bold  Madera plástica 
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0 Durable 
                    li
                      i.fas.fa-check
                      p.mb-0  Seguro para animales y personas
                    li
                      i.fas.fa-check
                      p.mb-0  Amable con el ambiente  
                    li
                      i.fas.fa-check
                      p.mb-0  Bajos costos de mantenimiento
                    li
                      i.fas.fa-check
                      p.mb-0  Buen aislante térmico  
                  
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Poca disponibilidad  
                    li
                      i.fas.fa-check
                      p.mb-0  Difícil de trabajar
                    li
                      i.fas.fa-check
                      p.mb-0  Uso limitado a postes y recipientes  
                    li
                      i.fas.fa-check
                      p.mb-0  Altos costos de instalación

              tr
                td.text-bold  Metal
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Durable  
                    li
                      i.fas.fa-check
                      p.mb-0  Seguro para el uso de animales
                    li
                      i.fas.fa-check
                      p.mb-0  Diversidad de usos  
                    li
                      i.fas.fa-check
                      p.mb-0  Fácil de trabajar
                td
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo de instalación 
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo de mantenimiento
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo de transporte  
                    li
                      i.fas.fa-check
                      p.mb-0  Baja capacidad como aislante térmico 
              
              tr
                td.text-bold  Mampostería
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Durable  
                    li
                      i.fas.fa-check
                      p.mb-0  Fácil de trabajar
                    li
                      i.fas.fa-check
                      p.mb-0  Bajos costos de instalación  
                    li
                      i.fas.fa-check
                      p.mb-0  Seguro para animales y personas
                    li
                      i.fas.fa-check
                      p.mb-0  Diversidad de usos y formas  
                    li
                      i.fas.fa-check
                      p.mb-0  Alta capacidad de aislamiento térmico
                td
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo de transporte de materiales  
                    li
                      i.fas.fa-check
                      p.mb-0  Difícil acceso a algunos predios
                
              tr
                td.text-bold  Guadua
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Alta durabilidad  
                    li
                      i.fas.fa-check
                      p.mb-0  Alta flexibilidad
                    li
                      i.fas.fa-check
                      p.mb-0  Diversidad de usos y aplicaciones  
                    li
                      i.fas.fa-check
                      p.mb-0  Seguro para el manejo animal
                    li
                      i.fas.fa-check
                      p.mb-0  Alta disponibilidad  
                    li
                      i.fas.fa-check
                      p.mb-0  Bajo costo de mantenimiento
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Alto costo de instalación  
                    li
                      i.fas.fa-check
                      p.mb-0  Costos de transporte al sitio definitivo
          
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.tarjeta--gris.p-4
          p.mb-0  En algunas instalaciones pecuarias hay una tendencia creciente hacia el uso de materiales reutilizados, como canecas, contenedores o estibas, entre otros, los cuales son una alternativa interesante desde el punto de vista económico y ambiental de la explotación. La elección del tipo de materiales a emplear se da a criterio del productor, dependiendo de sus condiciones y las exigencias de la explotación que se planee desarrollar.



    Separador
    br
    br
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Equipos empleados en explotaciones pecuarias
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i14.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0
              span.text-green Los equipos son elementos mecánicos que requieren de una fuente de alimentación diferente a la fuerza humana, que se emplean para el desarrollo de diversas labores.
              | Estos facilitan el trabajo del campo, reducen la demanda de mano de obra, aumentan la eficiencia en las labores y hacen más cómodas las tareas cotidianas al interior de la explotación pecuaria. Entre los principales equipos que se pueden encontrar en el ámbito pecuario están los siguientes.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Aseo y desinfección")
        .row
          .col-lg-7
            h4 Equipos para aseo y desinfección
            p Estos equipos se utilizan en labores de aseo y desinfección de áreas frecuentadas por los animales y los operarios. En este grupo de encuentran, por ejemplo, las fumigadoras a motor, hidrolavadoras e insufladoras a motor.
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn1.png', alt='imagen decorativa')

      .tarjeta.color-acento-botones.p-4(titulo="Transporte")
        .row
          .col-lg-7
            h4 Equipos para transporte
            p Estos se utilizan para llevar cargas al interior de la unidad pecuaria. Generalmente pueden emplearse tractores o motocultores para cumplir con este propósito.
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn2.png', alt='imagen decorativa')

      .tarjeta.color-acento-botones.p-4(titulo="Bombeo")
        .row
          .col-lg-7
            h4 Equipos para bombeo
            p Con estos equipos se asegura la disponibilidad de agua en donde sea que lo requiera la unidad productiva. Estos, además, deben estar complementados por componentes para la conducción del líquido.
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn3.png', alt='imagen decorativa')

      .tarjeta.color-acento-botones.p-4(titulo="Vacunación")
        .row
          .col-lg-7
            h4 Equipos para vacunación
            p.mb-3 En algunas explotaciones avícolas de tipo intensivo se utilizan equipos de vacunación masivos llamados nebulizadores.
            p.mb-3  Estos tienen la facultad de reducir el medicamento un tipo de gota muy pequeña que es aspirada por los animales.
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn4.png', alt='imagen decorativa')

      .tarjeta.color-acento-botones.p-4(titulo="Procesamiento de forrajes")
        .row
          .col-lg-7
            h4 Equipos para procesamiento de forrajes
            p.mb-3 Uno de los principales usos de los equipos en las explotaciones pecuarias es la producción de alimento, pues manualmente es una actividad que demanda mano de obra excesivamente. 
            p.mb-3  Estos equipos se utilizan para el corte, la cosecha y el almacenamiento del forraje, lo que significa una disminución sustancial de los costos de operación.  
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn5.png', alt='imagen decorativa')

      .tarjeta.color-acento-botones.p-4(titulo="Piscicultura")
        .row
          .col-lg-7
            h4 Equipos para piscicultura
            p.mb-3 En la industria piscícola intensiva se requieren equipos que garanticen la oxigenación y recirculación del agua ya que sin esto difícilmente los peces sobreviven. 
            p.mb-3  Entre los equipos más empleados en este tipo de montajes están: inyectores de oxígeno, mangueras difusoras, aireadores tipo <i>splash</i> y bombas eléctricas.
            p.mb-3  En sistemas más recientes, estos equipos están empleando como fuente de alimentación sistemas fotovoltaicos.
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn6.png', alt='imagen decorativa')

      .tarjeta.color-acento-botones.p-4(titulo="Procesamiento de desechos")
        .row
          .col-lg-7
            h4 Equipos para procesamiento de desechos
            p.mb-3 Una explotación pecuaria eficiente requiere de un excelente manejo de los desechos que se generan en la actividad productiva. 
            p.mb-3  En sistemas intensivos se utilizan las desbrozadoras, las cuales tiene la capacidad de convertir los residuos vegetales en pequeñas partículas que pueden ser procesadas posteriormente como compost. 
            p.mb-3  Igualmente, estos equipos se emplean para triturar y homogeneizar los desechos después de un proceso previo como la elaboración de bokashi o la obtención de humus de lombriz.
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t2-nn7.png', alt='imagen decorativa')





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
