class pageObjectMovistar {
    elementos ={
       //elementos de la Página de inicio
        searchMini: ()=> cy.get('#search_mini_form > .actions'),
        searchInput: ()=> cy.get('#search'),
        msgDeBusqueda: () =>  cy.get('[data-ui-id="page-title-wrapper"]'),
        listaProductos: ()=> cy.get('[class="item product product-item"]'),
        //elementos página de búsqueda
        opcionFiltro: () => cy.get('[data-role= title]'),
        opcionPrecio: () => cy.get('[attribute = "price"]'),
        opcionMemoria: () => cy.get('[attribute="movistar_internalmemory"]'),
        filtrosAplicados: () => cy.get('.filter-value'),
        eviFiltros: () => cy.get('[class="column main"]'),
        url: () => cy.url(),
        //elementos de la página de Respuesta
        msgDeBusqueda: () =>  cy.get('[data-ui-id="page-title-wrapper"]'),
        botonComprar: () => cy.get('[title = Comprar]'),
        condiFinanciacion: () => cy.get('#open-installments-modal'),
        selectBanco: () => cy.get('#selectBank'),
        selecTarjeta: () => cy.get('#selectCardByBank'),
        //elementos de la página de compra
        modeloCelular: () =>  cy.get('.base'),
        pagoCuotas: () => cy.get('.price-installments > p > [display="inline"]'),
        carecteristicaPreCompra: () => cy.get('[class="product-info-main"]'),
        opcionesDeFinanciacion: () => cy.get('tbody[id="bodyTable"]'),
        //elementos prueba celular 
        sizePantalla: () => cy.viewport(360,760),
        delizaAbajo: () => cy.scrollTo('0%','60%'),
        seleccionHogar: () => cy.get('#individual > :nth-child(1) > .footer-column-content > .title'),
        lineaHogar: () => cy.get('#individual > :nth-child(1) > .footer-column-content > .content > .links > :nth-child(2) > a'),
        disponibilidadZona: () => cy.get('.row > :nth-child(2) > .c-plan__get'),
        telefonoHogar: () => cy.get('.optionsGotLine > :nth-child(2) > label'),
        direccionHogar: () => cy.get('#localidad'),
        seleccionDireccion: () => cy.get('[class="pac-matched"]'),
        seleccionaEdificio: () => cy.get('[style="margin-right: 1rem"] > label'),
        selecionaSiguiente: () => cy.get('#btn-linea-sin-verificar'),
        mensajeFinal: () => cy.get('.title'),
    }
    //obejtos de la pgina de inicio.
    clickSearchmini(){
        this.elementos.searchMini().click()
    }
    typeSearchInput(busquedaEquipo){
        this.elementos.searchInput().type(busquedaEquipo)
    }
    selecCelLista(posicionEnLista){
        this.elementos.listaProductos().eq(posicionEnLista).click()
    }
    //objetos de la página de busquedas y resultados
    resultMsgDeBusqueda(verifica,mensaje){
        this.elementos.msgDeBusqueda().should(verifica,mensaje).log('Se debe comprobar que el resultado de la busqueda indique el modelo A52')
   }
    clickComprar(){
        this.elementos.botonComprar().first().click()
    }
    opcinesDFinaciacion(){
        this.elementos.condiFinanciacion().click()
    }
    selecBanco(verifica,banco){
        this.elementos.selectBanco().select(banco).should(verifica,banco)
    }
    selecTarjeta(verifica,tarjeta){
        this.elementos.selecTarjeta().select(tarjeta).should(verifica,tarjeta)
    }
    filtrarPor(posicionEnLista){
        this.elementos.opcionFiltro().eq(posicionEnLista).click()
    }   
    filtroPrecios(tagLista,rangoPrecio){
        this.elementos.opcionPrecio().contains(tagLista,rangoPrecio).click()
    }
    filtroMemoria(tagLista,rangomemoria){
        this.elementos.opcionMemoria().contains(tagLista,rangomemoria).click()
    }
    verificacionUrl(incluye,url){
        this.elementos.url().should(incluye,url).wait(1200)
    }
    filtrosActivos(verifica, rangoPrecio,rangomemoria){
        this.elementos.filtrosAplicados().should(verifica,rangoPrecio).and(verifica,rangomemoria)
    }
    evideciaFiltros(){
        this.elementos.eviFiltros().screenshot().log('Se evidencia que están activos los filtros por "Precio" y "Memoria"')
    }

    //objetos de la página de compra
    modeloTelefono(verifica, mensaje){
        this.elementos.modeloCelular().should(verifica,mensaje)
   }
    condicionDePago(verifica, mensaje){
        this.elementos.pagoCuotas().should(verifica,mensaje)
    }
    caractDeCompra(){
        this.elementos.carecteristicaPreCompra().screenshot().log('Se comprueba que modelo del teléfono sea A52 y se pueda pagar a 12 cuotas')
    }
    FinanciacionCoutas(cantidadCuotas){
        this.elementos.opcionesDeFinanciacion().contains('td',cantidadCuotas)
    }

    //objetos prueba celular
    pantallaCelular(){
        this.elementos.sizePantalla()
    }
    scrollAbajo(){
        this.elementos.delizaAbajo()
    }
    telefonicaHogar(){
        this.elementos.seleccionHogar().click()
    }
    fibraOpticaHogar(contiene,texto,espera){
        this.elementos.lineaHogar().wait(espera).should(contiene,texto).click()
    }
    verDispinibilidad(){
        this.elementos.disponibilidadZona().click()
    }
    lineaFijaHogar(){
        this.elementos.telefonoHogar().click()
    }
    ingreseDirección(direccion){
        this.elementos.direccionHogar().type(direccion)
    }
    direccionMapGoogle(){
        this.elementos.seleccionDireccion().first().invoke('show').click()
    }
    itemEdificio(){
        this.elementos.seleccionaEdificio().click()
    }
    botonSiguiente(){
        this.elementos.selecionaSiguiente().wait(500).click()
    }
    mensajeNoPrestaServicio(verifica,mensajeServicio){
        this.elementos.mensajeFinal().should(verifica,mensajeServicio);
    }
}

module.exports = new pageObjectMovistar();
