describe("Test Suite - conjunto de pruebas", () => {

    beforeEach (( ) => {                                                // HOOK <----
        cy.visit("https://bright-english.vercel.app/")
    });

//-------------------------------------------------------Perspectiva: Usuario NO logeado----------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        it("Test 1 - Validando Imagenes, elementos y textos en la Home pag ---> Perspectiva: Usuario NO logeado", () => {
//1. barra de navegación principal superior:
            cy.get(".gap-5").should("be.visible")
            cy.get(":nth-child(1) > .p-1").should("be.visible")
            cy.get(".gap-5").contains("+549 011 3456 7891")
            cy.get(".gap-5 > :nth-child(2) > .p-1").should("be.visible")
            cy.get(".gap-5").contains("bright.english@email.com.ar")
            cy.get(".gap-2 > .d-flex").should("be.visible")
            cy.get(".gap-2 > .d-flex > .d-none").contains("Ingresar")

//2. barra de navegación secundaria superior:
            cy.get(".p-0").should("be.visible")                                         // Se valida el logo de la Institución.
            cy.get("#responsive-navbar-nav").should("be.visible")
            cy.get("#responsive-navbar-nav").contains("Inicio")
            cy.get("#responsive-navbar-nav").contains("Clase")
            cy.get("#responsive-navbar-nav").contains("Examenes")
            cy.get("#responsive-navbar-nav").contains("Servicios")
            cy.get("[href='/consultation'] > .text-uppercase").contains("Consultas")
        
//3. Contenido central - Baner / Carrucel de imagenes e información:
            cy.get(".active > .flex-md-row-reverse > .d-flex > .w-xl-100").should("be.visible") //Carrucel izq.
            cy.get(".active > .flex-md-row-reverse > .d-none > .discount").should("be.visible") //Carrucel der. DESCUENTO IMG.
            

//4. Carrucel en movimento:
            cy.get(".active > .carousel-caption").contains("Cursos de Inglés") //Texto principal del carrucel 1/3
                cy.get(".active > .carousel-caption").contains("Para alumnos de todos los niveles y edades.") //Texto secundario del carrucel 1/3
                    cy.get(".active > .carousel-caption").contains("Inscripción Abierta ") //Texto terciario del carrucel 1/3
                        cy.get(".active > .carousel-caption").contains(" 2023") //Texto cuarto del carrucel 1/3    
                            // QUEDA PENDIENTE POR AUTOMATIZAR LA VALIDACION DE TEXTO 2 y 3 de: 3/3

            cy.get(".carousel-indicators").should("be.visible")
                cy.get("[aria-label='Slide 1']").should("be.visible") //indicador del carrucel 1.
                    cy.get("[aria-label='Slide 2']").should("be.visible") //indicador del carrucel 2.
                        cy.get("[aria-label='Slide 3']").should("be.visible") //indicador del carrucel 3.

            
            cy.get('.carousel-control-prev-icon').should("be.visible") //Boton para movimiento Previo VISIBLE
            cy.get('.carousel-control-next-icon').should("be.visible") //Boton para movimiento Siguiente VISIBLE

            
//5. Footer:
        cy.get(".bg-dark.text-white").should("be.visible")
            cy.get(".bg-dark.text-white").contains(" 2023 - Términos y condiciones")

            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(1)").should("be.visible") // Facebook
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(2)").should("be.visible") // Instagram
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(3)").should("be.visible") // Youtube
        })




//-------------------------------------------------------Perspectiva: Estudiante Logeado debidamente----------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


        it("Test 2 - Validando Imagenes, elementos, textos, funciones y comunicación entre modulos/secciones. (Sección: Home -> Perspectiva: Estudiante Logeado debidamente", () => {  
            cy.get(".gap-2 > .d-flex").click()
            cy.get("h2").contains("Por favor ingresa tus datos")
            cy.get("input._input_ue3uc_23").type("Fabio@test.com")
            cy.get("div._input_ue3uc_23 > input").type("pass.test")
            cy.get("._button_ue3uc_13").click()

//1. barra de navegación principal superior:
            cy.get(".gap-5").should("be.visible")                                           //Validación barra/panel principal superior.
            cy.get(":nth-child(1) > .p-1").should("be.visible")                             //Valida logo Whatsapp
            cy.get(".gap-5 > :nth-child(1) > .text-white").contains("+549 011 3456 7891")
            cy.get(".gap-5 > :nth-child(2) > .p-1").should("be.visible")                    // Valida logo email
            cy.get(":nth-child(2) > .text-white").contains("bright.english@email.com.ar")    
            cy.get(".ms-2").contains("Campus")                                              //PERSPECTIVA ESTUDIANTE LOGEADO DEBIDAMENTE.
            cy.get(".p-0").should("be.visible")                                             //Logo de la institución.
            cy.get("#responsive-navbar-nav").contains("Inicio")
            cy.get("#responsive-navbar-nav").contains("Clase")
            cy.get("#responsive-navbar-nav").contains("Examenes")
            cy.get("#responsive-navbar-nav").contains("Servicios")
            cy.get("[href='/consultation'] > .text-uppercase").contains("Consultas")


//********************************************************************************************** VALIDACIÓN SECCIÓN "INICIO", ESTANDO LOGEADO COMO ESTUDIANTE DEBIDAMENTE. (1)

                cy.get(".ms-auto > [href='/']").click()                                         //Click en el boton de INICIO desde la sección Campus. 
//2. barra de navegación secundaria superior:
                cy.get(".p-0").should("be.visible")                                             // Se valida el logo de la Institución.
                cy.get("#responsive-navbar-nav").should("be.visible")
                    cy.get("#responsive-navbar-nav").contains("Inicio")                         // 1 
                    cy.get("#responsive-navbar-nav").contains("Clase")                          // 2 
                    cy.get("#responsive-navbar-nav").contains("Examenes")                       // 3 
                    cy.get("#responsive-navbar-nav").contains("Servicios")                      // 4 
                    cy.get("[href='/consultation'] > .text-uppercase").contains("Consultas")

//3. Contenido central - Baner / Carrucel de imagenes e información:
            cy.get(".active > .flex-md-row-reverse > .d-flex > .w-xl-100").should("be.visible") //Carrucel izq.
            cy.get(".active > .flex-md-row-reverse > .d-none > .discount").should("be.visible") //Carrucel der. DESCUENTO IMG.


//4. Carrucel en movimento:
            cy.get(".active > .carousel-caption").contains("Cursos de Inglés") //Texto principal del carrucel 1/3
                cy.get(".active > .carousel-caption").contains("Para alumnos de todos los niveles y edades.") //Texto secundario del carrucel 1/3
                    cy.get(".active > .carousel-caption").contains("Inscripción Abierta ") //Texto terciario del carrucel 1/3
                         cy.get(".active > .carousel-caption").contains(" 2023") //Texto cuarto del carrucel 1/3    
                            // QUEDA PENDIENTE POR AUTOMATIZAR LA VALIDACION DEL CARRUCEL 2/3.

            cy.get(".carousel-indicators").should("be.visible")
                cy.get("[aria-label='Slide 1']").should("be.visible") //indicador del carrucel 1.
                cy.get("[aria-label='Slide 2']").should("be.visible") //indicador del carrucel 2.
                cy.get("[aria-label='Slide 3']").should("be.visible") //indicador del carrucel 3.


            cy.get('.carousel-control-prev-icon').should("be.visible") //Boton para movimiento Previo VISIBLE
                cy.get(".carousel-control-prev-icon").click()
                cy.get(".carousel-control-prev-icon").click()
                cy.get(".carousel-control-prev-icon").click()
            cy.get('.carousel-control-next-icon').should("be.visible") //Boton para movimiento Siguiente VISIBLE
                cy.get(".carousel-control-next-icon").click()
                cy.get(".carousel-control-next-icon").click()
                cy.get(".carousel-control-next-icon").click()

//5. Footer:
            cy.get(".bg-dark.text-white").should("be.visible")
            cy.get(".bg-dark.text-white").contains(" 2023 - Términos y condiciones")

            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(1)").should("be.visible") // Facebook
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(2)").should("be.visible") // Instagram
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(3)").should("be.visible") // Youtube


//********************************************************************************************** VALIDACIÓN SECCIÓN "CLASES", ESTANDO LOGEADO COMO ESTUDIANTE DEBIDAMENTE. (2)
            cy.get("[href='/class']").click()      //Dar click en la sección CLASES.
            cy.get("._clases_margin_k6e4x_1 > :nth-child(1) > .text-center").contains("Cursos para cada necesidad")
            
            cy.get("._clases_text_k6e4x_14").contains("Nuestros cursos están destinados a quienes quieran comunicarse efectivamente en inglés ofreciendo distintas modalidades para cada necesidad. Brindamos clases individuales, grupales en grupos reducidos, también contamos con apoyo escolar y preparación de exámenes internacionales para niños, jóvenes y adultos.")
            cy.get("._clases_text_k6e4x_14").contains("Nuestra metodología permite desarrollar la habilidad oral y escrita, el estudio de la gramática, la pronunciación y el uso correcto del idioma, en un ambiente amable y dinámico.")
            cy.get("._form_container_k6e4x_26 > .text-center").contains("Completa el formulario con tus datos y nos pondremos en contacto para asesorarte y completar la inscripción")
            


            // Footer:
            cy.get(".bg-dark.text-white").should("be.visible")
            cy.get(".bg-dark.text-white").contains(" 2023 - Términos y condiciones")

            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(1)").should("be.visible") // Facebook
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(2)").should("be.visible") // Instagram
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(3)").should("be.visible") // Youtube
            
            //Falta validar imagen y lista desplegables.
            cy.get(".ms-auto > [href='/']").click()  

//********************************************************************************************** VALIDACIÓN SECCIÓN "EXAMENES", ESTANDO LOGEADO COMO ESTUDIANTE DEBIDAMENTE. (3)
            cy.get("[href='/exams']").click()
                cy.get("._examenes_title_pfskb_15").contains("Exámenes Internacionales")
                
                    cy.get(":nth-child(1) > ._examenes_subtitle_pfskb_22").contains("CAMBRIDGE")
                        cy.get(":nth-child(1) > :nth-child(2) > ._exam_card_lf8r6_1 > .align-items-center > .p-4 > .card-body > ._exam_cardText_lf8r6_14").contains("KET (Key English Test)")
                        cy.get(":nth-child(1) > :nth-child(3) > ._exam_card_lf8r6_1 > .align-items-center > .p-4 > .card-body > ._exam_cardText_lf8r6_14").contains("PET (Preliminary English Test)")
                        cy.get(":nth-child(4) > ._exam_card_lf8r6_1 > .align-items-center > .p-4 > .card-body > ._exam_cardText_lf8r6_14").contains("FCE (First English Test)")

                    cy.get(":nth-child(2) > ._examenes_subtitle_pfskb_22").contains("EXÁMENES")
                        cy.get(":nth-child(2) > :nth-child(2) > ._exam_card_lf8r6_1 > .align-items-center > .p-4 > .card-body > ._exam_cardText_lf8r6_14").contains("IELTS (International English Language Testing System)")
                        cy.get(":nth-child(2) > :nth-child(3) > ._exam_card_lf8r6_1 > .align-items-center > .p-4 > .card-body > ._exam_cardText_lf8r6_14").contains("TOEIC (Test of English for International Communication).")
                       


                        
                        

            // Footer:
            cy.get(".bg-dark.text-white").should("be.visible")
            cy.get(".bg-dark.text-white").contains(" 2023 - Términos y condiciones")

            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(1)").should("be.visible") // Facebook
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(2)").should("be.visible") // Instagram
            cy.get(".bg-dark.text-white").get(".justify-content-md-end > :nth-child(3)").should("be.visible") // Youtube
            cy.get(".ms-auto > [href='/']").click()

 //********************************************************************************************** VALIDACIÓN SECCIÓN "SERVICIOS", ESTANDO LOGEADO COMO ESTUDIANTE DEBIDAMENTE. (4)        
            cy.get("[href='/services']").click()
                cy.get("._title_oo149_12").contains("Nuestros Servicios")
                    
                    cy.get(".justify-content-center > :nth-child(1) > .d-flex > .text-uppercase").contains("Examenes Internacionales")
                        cy.get(":nth-child(1) > .d-flex > .card-text").contains("Elegir bien entre la oferta de exámenes internacionales de inglés es clave para conseguir tus objetivos. Por eso, hemos reunido información esencial para ayudarte en este proceso.")
                            cy.get(":nth-child(1) > .d-flex > .mt-auto > .rounded-5").click()
                                cy.get(".background > :nth-child(1) > .text-white").contains("Elige cómo quieres contactarte con nosotros")
                                    cy.get("[href='/services']").click() //click para regresar a la sección SERVICIOS.




                    cy.get(":nth-child(2) > .d-flex > .text-uppercase").contains("Viajes")
                    //Falta el texto de la tarjeta.
                        cy.get(":nth-child(2) > .d-flex > .mt-auto > .rounded-5").click()
                            cy.get(".background > :nth-child(1) > .text-white").contains("Elige cómo quieres contactarte con nosotros")
                                cy.get("[href='/services']").click() //click para regresar a la sección SERVICIOS.

                    
                    cy.get(":nth-child(3) > .d-flex > .text-uppercase").contains("Traducciones")
                    //Falta el texto de la tarjeta.
                        cy.get(":nth-child(3) > .d-flex > .mt-auto > .rounded-5").click()
                            cy.get(".background > :nth-child(1) > .text-white").contains("Elige cómo quieres contactarte con nosotros")
                                cy.get("[href='/services']").click() //click para regresar a la sección SERVICIOS.

                    
                    cy.get(":nth-child(4) > .d-flex > .text-uppercase").contains("Visas")
                    //Falta el texto de la tarjeta.
                        cy.get(":nth-child(4) > .d-flex > .mt-auto > .rounded-5").click()
                            cy.get(".background > :nth-child(1) > .text-white").contains("Elige cómo quieres contactarte con nosotros")
                                cy.get("[href='/services']").click() //click para regresar a la sección SERVICIOS.

                    cy.get('[href="/consultation"] > .text-uppercase').click()      //SE DA CLICK AL BOTON CONSULTAS.
                        cy.get(".background > :nth-child(1) > .text-white").contains("Elige cómo quieres contactarte con nosotros")  //EN ESTA VENTANA ES QUE VAMOS A REALIZAR UNA CONSULTA.

                    
                    cy.get('.btn-danger').click() //El estudiante realiza esta acción para cerrar cesión.
     
        })


    
//-------------------------------------------------------Perspectiva: Perfil Administrador Logeado -----------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        it("Test 3 - Validando Imagenes, elementos, textos, funciones y comunicación entre modulos/secciones. (Sección: Home -> Perspectiva: Perfil Administrador Logeado", () => {  
            cy.get(".gap-2 > .d-flex").click()
            cy.get("h2").contains("Por favor ingresa tus datos")
            cy.get("input._input_ue3uc_23").type("admin@brightenglish.com")
            cy.get("div._input_ue3uc_23 > input").type("12345")
            cy.get("._button_ue3uc_13").click()

//1. barra de navegación principal superior:
            cy.get(".gap-5").should("be.visible")                                           // Validación barra/panel principal superior.
            cy.get(":nth-child(1) > .p-1").should("be.visible")                             // Valida logo Whatsapp
            cy.get(".gap-5 > :nth-child(1) > .text-white").contains("+549 011 3456 7891")   // Valida Número de Whatsapp
            cy.get(".gap-5 > :nth-child(2) > .p-1").should("be.visible")                    // Valida logo email
            cy.get(":nth-child(2) > .text-white").contains("bright.english@email.com.ar")   // Valida el email correcto
            cy.get(".gap-2 > .d-flex").should("be.visible")                                 // Valida el boton de salida de usuario debe estar visible.

//2. Barra/panel secundario superior.
            cy.get(".sticky-top > .d-flex").should("be.visible")                                // Valida visibilidad de la barra secundaria superior.
            cy.get(".p-0").should("be.visible")                                                 // Logo de la institución.
            cy.get("form > .ms-3").contains("Buscar alumno/empresa")                            // Valida que texto sea visible.
            cy.get("#search-bar").should("be.visible")                                          // Valida visibilidad de la barra de busqueda.
                cy.get("#search-bar").type("Fabio Alberto 95.999.666 $%")                       // Valida ingreso de datos en formato Texto, Numero y signos especiales.
                    cy.get("#search-bar").clear("Fabio Alberto 95.999.666 $%")                  // Valida BORRADO de datos en formato Texto, Numero y signos especiales, en la barra de busqueda.
            cy.get(".sticky-top > .d-flex > .text-black").should("be.visible")                  // Valida la visibilidad del boton "Guardar Cambios"
                cy.get(".sticky-top > .d-flex > .text-black").contains("GUARDAR CAMBIOS")       // Valida texto en el boton.

//.3 Se validad la presencia de los textos siguientes: Datos Personasles -> Profile Container / Cursos -> / Calificaciones -> / Fechas exámenes
            cy.get(".d-block").should("be.visible")                                                                     // Valida visibilidad de la imagen del perfil del alumno.
            
            cy.get("._profile_title_1gi3u_28 > span").should("be.visible").contains("Datos personales")                 // Validad visibilidad y textos, respectivo. (en el "Profile Container")

                    
            cy.get('._profile_container_1gi3u_1 > :nth-child(1) > :nth-child(3) > .ms-3').should("be.visible").contains("Nombre y apellidos")  // Validando texto del "Profile Container" - Input: Nombre y apellidos.
                    cy.get("#name").should("be.visible")                                                                                       // Ventana para inngreso del "Input" en el form de html.
                                                                                                                                               // Validando visibilidad del input para Nombre y Apellidos.
            cy.get(':nth-child(1) > :nth-child(4) > .ms-3').should("be.visible").contains("Fecha de nacimiento")     
                    cy.get("#date").should("be.visible")                                                                                       //
                                                                                                                                               //
            cy.get(':nth-child(1) > :nth-child(5) > .ms-3').should("be.visible").contains("DNI")                                               // 
                    cy.get("#dni").should("be.visible")                                                                                        //
            cy.get(':nth-child(1) > :nth-child(6) > .ms-3').should("be.visible").contains("Dirección")                                         //
                    cy.get("#adress").should("be.visible")                                                                                     //
            cy.get(':nth-child(1) > :nth-child(7) > .ms-3').should("be.visible").contains("Teléfono de contacto")                              // 
                    cy.get("#phone").should("be.visible")                                                                                      //
            cy.get(':nth-child(1) > :nth-child(8) > .ms-3').should("be.visible").contains("E-mail")                                            // 
                    cy.get("#email").should("be.visible")                                                                                      //

                    // **** NO SE PUDO PROBAR FUNCIONALIDAD DEL BOTON "GUARDAR CAMBIOS. -> IMPORTANTE pero si se probo en la linea 253 y  254."

// Se validad la presencia de los textos siguientes: Cursos -> / Calificaciones -> / Fechas exámenes
            cy.get("._courses_title_6zxao_12 > span").should("be.visible").contains("Cursos")
            cy.get("._grades_title_1yjeb_12 > span").should("be.visible").contains("Calificaciones")
            cy.get("._myExam_title_g56q0_12 > span").should("be.visible").contains("Fechas exámenes")
            cy.get("._payment_title_79cra_14 > span").should("be.visible").contains("Pagos")

            cy.get(".gap-2 > .d-flex").should("be.visible").click()                                     //Se valida que el Perfil de administrador pueda cerrar la sesión satisfactoriamente.


        })    





        
    })