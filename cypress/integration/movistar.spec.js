import pageObjectMovistar from '../support/pageObject/homePage.js'


describe ('Pruebas Movistar', ()=>{
    beforeEach(()=>{
        cy.visit('https://tienda.movistar.com.ar')
    })
   it('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52 ', ()=>{
        pageObjectMovistar.clickSearchmini();
        pageObjectMovistar.typeSearchInput('A52{enter}');
        pageObjectMovistar.resultMsgDeBusqueda('have.text',"Resultados de búsqueda para: 'A52'");
        pageObjectMovistar.clickComprar();
        pageObjectMovistar.modeloTelefono('have.text', 'Samsung Galaxy A52');
        pageObjectMovistar.condicionDePago('contain', 'Hasta 12 cuotas sin interés ');
        pageObjectMovistar.caractDeCompra()
    })
   it('CP002 - Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', ()=>{
        pageObjectMovistar.filtrarPor(0);
        pageObjectMovistar.filtroPrecios('li','$200.000 y superior');
        pageObjectMovistar.verificacionUrl('include', '/?price=200000-300000');
        pageObjectMovistar.filtrarPor(0);
        pageObjectMovistar.filtroMemoria('li','256GB');
        pageObjectMovistar.verificacionUrl('include', '/?movistar_internalmemory=916&price=200000-300000');
        pageObjectMovistar.filtrarPor(0);
        pageObjectMovistar.filtrosActivos('contain', '$200.000 - $300.000', '256GB')
        pageObjectMovistar.evideciaFiltros()

    })
    it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', ()=>{
        pageObjectMovistar.selecCelLista(2);
        pageObjectMovistar.opcinesDFinaciacion();
        pageObjectMovistar.selecBanco('contain','Credicoop');
        pageObjectMovistar.selecTarjeta('contain','Visa');
        pageObjectMovistar.FinanciacionCoutas('60')
    })
    it('CP004 - Ver la disponibilidad del servicio de internet por zona - Movistar Hogar- Map Google', ()=>{
        pageObjectMovistar.pantallaCelular();
        pageObjectMovistar.scrollAbajo(0,5000);
        pageObjectMovistar.telefonicaHogar();
        pageObjectMovistar.fibraOpticaHogar('contain','Línea Hogar',1000);
        pageObjectMovistar.scrollAbajo();
        pageObjectMovistar.verDispinibilidad();
        pageObjectMovistar.lineaFijaHogar();
        pageObjectMovistar.ingreseDirección('Jerónimo Salguero 3084');
        pageObjectMovistar.direccionMapGoogle();
        pageObjectMovistar.itemEdificio();
        pageObjectMovistar.botonSiguiente();
        pageObjectMovistar.mensajeNoPrestaServicio('have.text','Por el momento no podemos ofrecerte Movistar Fibra.')   

    })
})

