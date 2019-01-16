/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Obteniendo data worldbank
const arrData = Object.entries(WORLDBANK);
const data = copyData(arrData);

// Obteniendo indicadores por pais
const indicatorsPER = getData(data, 0);
const indicatorsMEX = getData(data, 1);
const indicatorsCHL = getData(data, 2);
const indicatorsBRS = getData(data, 3);

// Obteniendo indicadores de población
const filterPopPer = filterPopulation(indicatorsPER);
const filterPopMex = filterPopulation(indicatorsMEX);
const filterPopChl = filterPopulation(indicatorsCHL);
const filterPopBrs = filterPopulation(indicatorsBRS);

// Obteniendo indicadores de educación
const filterEduPer = filterEducation(indicatorsPER);
const filterEduMex = filterEducation(indicatorsMEX);
const filterEduChl = filterEducation(indicatorsCHL);
const filterEduBrs = filterEducation(indicatorsBRS);

// Obteniendo indicadores de violencia
const filterViolencePer = filterViolence(indicatorsPER);
const filterViolenceMex = filterViolence(indicatorsMEX);
const filterViolenceChl = filterViolence(indicatorsCHL);
const filterViolenceBrs = filterViolence(indicatorsBRS);

// Obteniendo indicadores de desempleo
const filterUnemploymentPer = filterUnemployment(indicatorsPER);
const filterUnemploymentMex = filterUnemployment(indicatorsMEX);
const filterUnemploymentChl = filterUnemployment(indicatorsCHL);
const filterUnemploymentBrs = filterUnemployment(indicatorsBRS);

// Obteniendo indicadores de literacy
const filterLiteracyPer = filterLiteracy(indicatorsPER);
const filterLiteracyMex = filterLiteracy(indicatorsMEX);
const filterLiteracyChl = filterLiteracy(indicatorsCHL);
const filterLiteracyBrs = filterLiteracy(indicatorsBRS);

// MENÚ DE NAVEGACIÓN
const inicial = document.getElementById('pagina-inicio');
const per = document.getElementById('pagina-peru');
const mex = document.getElementById('pagina-mexico');
const chl = document.getElementById('pagina-chile');
const brsl = document.getElementById('pagina-brasil');
const footer = document.getElementById('pie-de-pagina');

const inicialb = document.getElementById('inicio');
const perub = document.getElementById('peru-menu');
const mexb = document.getElementById('mexico-menu');
const chlb = document.getElementById('chile-menu');
const brslb = document.getElementById('brasil-menu');

// PANTALLA INICIO
inicialb.addEventListener('click', () => {
  inicial.style.display = 'block';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'none';
  footer.style.display = 'block';
});
// PANTALLA PERÚ
perub.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'block';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'none';
  footer.style.display = 'none';
});
// PANTALLA MÉXICO
mexb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'block';
  chl. style.display = 'none';
  brsl.style.display = 'none';
  footer.style.display = 'none';
});
// PANTALLA CHILE
chlb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'block';
  brsl.style.display = 'none';
  footer.style.display = 'none';
});
// PANTALLA BRASIL
brslb.addEventListener('click', () => {
  inicial.style.display = 'none';
  per.style.display = 'none';
  mex.style.display = 'none';
  chl. style.display = 'none';
  brsl.style.display = 'block';
  footer.style.display = 'none';
});

// se da click en el boton de la pantalla inicio para cuando empiece el proyecto
inicialb.click();

// ------------------------- PERÚ ----------------------------------- //

// BOTONES PERÚ

const btnPopulation = document.getElementById('boton-population');
const btnViolence = document.getElementById('boton-violence');
const btnEducation = document.getElementById('boton-education');
const btnUnemployment = document.getElementById('boton-unemployment');
const btnAlfabet = document.getElementById('boton-alfabetizacion');

const peruTableContainer = document.getElementById('tables-peru');
const mexicoTableContainer = document.getElementById('tables-mex');
const chilTableContainer = document.getElementById('tables-chile');
const brasilTableContainer = document.getElementById('tables-brasil');

// APLICANDO SORT//
// SELECT
let selectedContainer;// el container por pais
let selectedData;// el tipo de indicador seleccionado

function crearTablaIndicador(indicadores, contenedor) {
  contenedor.innerHTML = ''; // SE LIMPIA LA TABLA//

  let tbl = document.createElement('table');
  let hrow = tbl.insertRow();
  createTableCell('Indicador', hrow);
  createTableCell('Valor', hrow);
  createTableCell('', hrow);// ESTA VACIO PORQUE NO TIENE TITULO Y AHI VA LONK VER MAS//


  for (indicador of indicadores) {
    // CREAR LINK
    let link = document.createElement('a');
    let linkText = document.createTextNode('Ver');
    link.onclick = function() {
      showDetalle(contenedor, indicador);
    };
    link.href = '#';
    link.appendChild(linkText);

    const average = compute(indicador);
    let row = tbl.insertRow();

    createTableCell(indicador.indicatorName, row);
    createTableCell(average, row);
    row.appendChild(link); // le asigno el elemento <a> de ver mas //
  }
  contenedor.appendChild(tbl);

selectedContainer = contenedor; // cada vez que se da un clic a un indicaddor se guarda el contenedor
selectedData = indicadores; //cada vez que se da un clic a un indicaddor se guarda los datos de ese indicador para poder ordenarlo si desea
}

// CRENADO FUNCOIN QUE SE EJECUTA LA CAMBIAR ELV ALOR DEL SELECTOR EN EL HTML//
const selectChangeTextPopulation = (id) => { // RECIBE COMO PARAMETRO EL ID DEL INDICADORS
  let elSelect = document.getElementById(id);
  let selectOp = elSelect.options[elSelect.selectedIndex].text;
  selectedContainer.innerHTML = '';

  let sortedData = sortData(selectedData, selectOp);

  crearTablaIndicador(sortedData, selectedContainer)
};

function CrearEventoTablaIndicador(boton,indicadores, contenedor) {
  boton.addEventListener('click', () => {
    crearTablaIndicador(indicadores,contenedor);
  });
}

CrearEventoTablaIndicador(btnPopulation,filterPopPer,peruTableContainer);
CrearEventoTablaIndicador(btnViolence,filterViolencePer,peruTableContainer);
CrearEventoTablaIndicador(btnEducation,filterEduPer,peruTableContainer);
CrearEventoTablaIndicador(btnUnemployment,filterUnemploymentPer,peruTableContainer);
CrearEventoTablaIndicador(btnAlfabet,filterLiteracyPer,peruTableContainer);

// ------------------------- MEXICO ----------------------------------- //


// BOTONES MÉXICO
const btnPopMex = document.getElementById('boton-populationMex');
const btnVioMex = document.getElementById('boton-violenceMex');
const btnEduMex = document.getElementById('boton-educationMex');
const btnUneMex = document.getElementById('boton-unemploymentMex');
const btnAlfMex = document.getElementById('boton-alfabetizacionMex');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML
CrearEventoTablaIndicador(btnPopMex,filterPopMex,mexicoTableContainer);
CrearEventoTablaIndicador(btnVioMex,filterViolenceMex,mexicoTableContainer);
CrearEventoTablaIndicador(btnEduMex,filterEduMex,mexicoTableContainer);
CrearEventoTablaIndicador(btnUneMex,filterUnemploymentMex,mexicoTableContainer);
CrearEventoTablaIndicador(btnAlfMex,filterLiteracyMex,mexicoTableContainer);

// ------------------------- CHILE ----------------------------------- //

// botones CHILE

const btnPopCh = document.getElementById('boton-populationChil');
const btnVioCh = document.getElementById('boton-violenceChil');
const btnEduCh = document.getElementById('boton-educationChil');
const btnUnemCh = document.getElementById('boton-unemploymentChil');
const btnAlfCh = document.getElementById('boton-alfabetizacionChil');


// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML
CrearEventoTablaIndicador(btnPopCh,filterPopChl,chilTableContainer);
CrearEventoTablaIndicador(btnVioCh,filterViolenceChl,chilTableContainer);
CrearEventoTablaIndicador(btnEduCh,filterEduChl,chilTableContainer);
CrearEventoTablaIndicador(btnUnemCh,filterUnemploymentChl,chilTableContainer);
CrearEventoTablaIndicador(btnAlfCh,filterLiteracyChl,chilTableContainer);
// ------------------------- BRASIL ----------------------------------- //

// botones BRASIL
const btnPopBra = document.getElementById('boton-populationBra');
const btnVioBra = document.getElementById('boton-violenceBra');
const btnEduBra = document.getElementById('boton-educationBra');
const btnUnemBra = document.getElementById('boton-unemploymentBra');
const btnAlfBra = document.getElementById('boton-alfabetizacionBra');

// MOSTRAR DATA FILTRADA EN LOS DIVS DEL HTML
CrearEventoTablaIndicador(btnPopBra,filterPopBrs,brasilTableContainer);
CrearEventoTablaIndicador(btnVioBra,filterViolenceBrs,brasilTableContainer);
CrearEventoTablaIndicador(btnEduBra,filterEduBrs,brasilTableContainer);
CrearEventoTablaIndicador(btnUnemBra,filterUnemploymentBrs,brasilTableContainer);
CrearEventoTablaIndicador(btnAlfBra,filterLiteracyBrs,brasilTableContainer);

// MENÚ
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

// TABLA
function createTableCell(value, parent) {
  // inserta una celda en la fila creada
  let newCell = parent.insertCell();

  // añade contenido a la celda
  let text = document.createTextNode(value);
  newCell.appendChild(text);
}


// let resultsPERU = dataForYear.filter(number => number > 1);

const showDetalle = (contenedor,indicador) => {
  contenedor.innerHTML = '';

  let tbl = document.createElement('table');

  let hrow = tbl.insertRow();
  createTableCell('Año', hrow);
  createTableCell('Cantidad', hrow);

  for (let i in indicador.data) {
    let row = tbl.insertRow();
    createTableCell(i, row);
    createTableCell(indicador.data[i], row);
  }

  contenedor.appendChild(tbl);
};
