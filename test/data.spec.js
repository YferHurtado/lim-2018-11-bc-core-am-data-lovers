/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('../src/data.js');
/*const input = [ {
  'data': {
    '1960': 0.567483954656432,
    '1961': 0.580176490663546,
    '1962': 0.59399709570379,
    '1963': 0.607004319238493,
    '1964': 0.617365684248006,
    '1965': 0.625279258497252,
    '1966': 0.633179870889549,
    '1967': 0.637545556793987,
    '1968': 0.6412411735455,
    '1969': 0.646394853232849,
    '1970': 0.653935190413508,
    '1971': 0.665049593689898,
    '1972': 0.676013353061327,
    '1973': 0.685950632502911,
    '1974': 0.692711695835005,
    '1975': 0.696076002892393,
    '1976': 0.6946822217576,
    '1977': 0.688951212131611,
    '1978': 0.68436872907515,
    '1979': 0.685910747106625,
    '1980': 0.695355121450109,
    '1981': 0.709967502715607,
    '1982': 0.727089973280264,
    '1983': 0.745230451130117,
    '1984': 0.761915614295249,
    '1985': 0.776270290475632,
    '1986': 0.790097911501954,
    '1987': 0.801148970109826,
    '1988': 0.8106787034609,
    '1989': 0.819222776608114,
    '1990': 0.827036859496035,
    '1991': 0.831728451047024,
    '1992': 0.835690100312875,
    '1993': 0.840934768542926,
    '1994': 0.84901271657242,
    '1995': 0.860427932175607,
    '1996': 0.872155006812599,
    '1997': 0.886596731219553,
    '1998': 0.904861758839868,
    '1999': 0.927365106744117,
    '2000': 0.953290868686834,
    '2001': 0.985588724907004,
    '2002': 1.05002707742701,
    '2003': 1.1507939246332,
    '2004': 1.27022917815132,
    '2005': 1.37994492874021,
    '2006': 1.3822779074946,
    '2007': 1.35956326923607,
    '2008': 1.32856403606364,
    '2009': 1.30866808179188,
    '2010': 1.30819880011585,
    '2011': 1.30778060664324,
    '2012': 1.3204740971465,
    '2013': 1.34146402055841,
    '2014': 1.36509068036482,
    '2015': 1.38899024590975,
    '2016': 1.40004346269942,
    '2017': 1.41484859363568
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Población de 75 a 79 años, mujeres (% de la población femenina)',
  'indicatorCode': 'SP.POP.7579.FE.5Y'
},
{
  'data': {
    '1960': '',
    '1961': '',
    '1962': '',
    '1963': '',
    '1964': '',
    '1965': '',
    '1966': '',
    '1967': '',
    '1968': '',
    '1969': '',
    '1970': '',
    '1971': '',
    '1972': '',
    '1973': '',
    '1974': '',
    '1975': '',
    '1976': '',
    '1977': '',
    '1978': '',
    '1979': '',
    '1980': '',
    '1981': '',
    '1982': '',
    '1983': '',
    '1984': '',
    '1985': '',
    '1986': '',
    '1987': '',
    '1988': '',
    '1989': '',
    '1990': '',
    '1991': '',
    '1992': '',
    '1993': '',
    '1994': '',
    '1995': '',
    '1996': '',
    '1997': '',
    '1998': '',
    '1999': '',
    '2000': '',
    '2001': '',
    '2002': '',
    '2003': '',
    '2004': '',
    '2005': '',
    '2006': 0.3,
    '2007': '',
    '2008': 0.8,
    '2009': 1,
    '2010': 0.8,
    '2011': 0.6,
    '2012': 0.6,
    '2013': '',
    '2014': '',
    '2015': '',
    '2016': '',
    '2017': ''
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)',
  'indicatorCode': 'SG.VAW.REFU.ZS'
},
{
  'data': {
    '1960': '',
    '1961': '',
    '1962': '',
    '1963': '',
    '1964': '',
    '1965': '',
    '1966': '',
    '1967': '',
    '1968': '',
    '1969': '',
    '1970': 15.2815504074097,
    '1971': 13.3423204421997,
    '1972': 14.1351003646851,
    '1973': 13.7966899871826,
    '1974': 14.5591802597046,
    '1975': 14.3904104232788,
    '1976': 16.3112506866455,
    '1977': '',
    '1978': '',
    '1979': '',
    '1980': '',
    '1981': '',
    '1982': '',
    '1983': '',
    '1984': '',
    '1985': '',
    '1986': '',
    '1987': '',
    '1988': '',
    '1989': '',
    '1990': '',
    '1991': '',
    '1992': '',
    '1993': '',
    '1994': '',
    '1995': '',
    '1996': '',
    '1997': '',
    '1998': '',
    '1999': '',
    '2000': '',
    '2001': '',
    '2002': '',
    '2003': '',
    '2004': '',
    '2005': '',
    '2006': '',
    '2007': '',
    '2008': '',
    '2009': '',
    '2010': '',
    '2011': '',
    '2012': '',
    '2013': '',
    '2014': '',
    '2015': '',
    '2016': '',
    '2017': ''
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Educacin terciaria, profesores (% de mujeres)',
  'indicatorCode': 'SE.TER.TCHR.FE.ZS'
},
{
  'data': {
    '1960': '',
    '1961': '',
    '1962': '',
    '1963': '',
    '1964': '',
    '1965': '',
    '1966': '',
    '1967': '',
    '1968': '',
    '1969': '',
    '1970': '',
    '1971': '',
    '1972': '',
    '1973': '',
    '1974': '',
    '1975': '',
    '1976': '',
    '1977': '',
    '1978': '',
    '1979': '',
    '1980': '',
    '1981': '',
    '1982': '',
    '1983': '',
    '1984': '',
    '1985': '',
    '1986': '',
    '1987': '',
    '1988': '',
    '1989': '',
    '1990': '',
    '1991': '',
    '1992': '',
    '1993': '',
    '1994': '',
    '1995': '',
    '1996': '',
    '1997': '',
    '1998': '',
    '1999': '',
    '2000': '',
    '2001': '',
    '2002': '',
    '2003': '',
    '2004': '',
    '2005': '',
    '2006': '',
    '2007': '',
    '2008': '',
    '2009': 1,
    '2010': '',
    '2011': 1,
    '2012': '',
    '2013': 1,
    '2014': '',
    '2015': 1,
    '2016': '',
    '2017': 1
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Las mujeres no embarazadas y que no amamantan pueden hacer los mismos trabajos que los hombres (1=sí; 0=no)',
  'indicatorCode': 'SG.JOB.NOPN.EQ'
},
{
  'data': {
    '1960': '',
    '1961': '',
    '1962': '',
    '1963': '',
    '1964': '',
    '1965': '',
    '1966': '',
    '1967': '',
    '1968': '',
    '1969': 5.90000009536743,
    '1970': 4.84000015258789,
    '1971': 4.57000017166138,
    '1972': 4.40000009536743,
    '1973': 4.23000001907349,
    '1974': 4,
    '1975': 4.92000007629395,
    '1976': 5.19999980926514,
    '1977': 5.82000017166138,
    '1978': 6.5,
    '1979': 7.11999988555908,
    '1980': 6.96999979019165,
    '1981': 6.76999998092651,
    '1982': 6.98000001907349,
    '1983': 9.19999980926514,
    '1984': 10.5,
    '1985': 11.789999961853,
    '1986': '',
    '1987': 3.63000011444092,
    '1988': '',
    '1989': 7.92000007629395,
    '1990': 8.60000038146973,
    '1991': 5.80000019073486,
    '1992': 9.39999961853027,
    '1993': '',
    '1994': '',
    '1995': '',
    '1996': 7.07000017166138,
    '1997': 7.69000005722046,
    '1998': 7.75,
    '1999': 7.98999977111816,
    '2000': '',
    '2001': 7.88000011444092,
    '2002': '',
    '2003': '',
    '2004': '',
    '2005': '',
    '2006': '',
    '2007': '',
    '2008': '',
    '2009': '',
    '2010': '',
    '2011': '',
    '2012': '',
    '2013': '',
    '2014': '',
    '2015': '',
    '2016': '',
    '2017': ''
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)',
  'indicatorCode': 'SL.UEM.TOTL.NE.ZS'
},
];

const outputViolence = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': '',
      '2003': '',
      '2004': '',
      '2005': '',
      '2006': 0.3,
      '2007': '',
      '2008': 0.8,
      '2009': 1,
      '2010': 0.8,
      '2011': 0.6,
      '2012': 0.6,
      '2013': '',
      '2014': '',
      '2015': '',
      '2016': '',
      '2017': ''
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)',
    'indicatorCode': 'SG.VAW.REFU.ZS'
  },
];

const outputpopulation = [{
  'data': {
    '1960': 0.567483954656432,
    '1961': 0.580176490663546,
    '1962': 0.59399709570379,
    '1963': 0.607004319238493,
    '1964': 0.617365684248006,
    '1965': 0.625279258497252,
    '1966': 0.633179870889549,
    '1967': 0.637545556793987,
    '1968': 0.6412411735455,
    '1969': 0.646394853232849,
    '1970': 0.653935190413508,
    '1971': 0.665049593689898,
    '1972': 0.676013353061327,
    '1973': 0.685950632502911,
    '1974': 0.692711695835005,
    '1975': 0.696076002892393,
    '1976': 0.6946822217576,
    '1977': 0.688951212131611,
    '1978': 0.68436872907515,
    '1979': 0.685910747106625,
    '1980': 0.695355121450109,
    '1981': 0.709967502715607,
    '1982': 0.727089973280264,
    '1983': 0.745230451130117,
    '1984': 0.761915614295249,
    '1985': 0.776270290475632,
    '1986': 0.790097911501954,
    '1987': 0.801148970109826,
    '1988': 0.8106787034609,
    '1989': 0.819222776608114,
    '1990': 0.827036859496035,
    '1991': 0.831728451047024,
    '1992': 0.835690100312875,
    '1993': 0.840934768542926,
    '1994': 0.84901271657242,
    '1995': 0.860427932175607,
    '1996': 0.872155006812599,
    '1997': 0.886596731219553,
    '1998': 0.904861758839868,
    '1999': 0.927365106744117,
    '2000': 0.953290868686834,
    '2001': 0.985588724907004,
    '2002': 1.05002707742701,
    '2003': 1.1507939246332,
    '2004': 1.27022917815132,
    '2005': 1.37994492874021,
    '2006': 1.3822779074946,
    '2007': 1.35956326923607,
    '2008': 1.32856403606364,
    '2009': 1.30866808179188,
    '2010': 1.30819880011585,
    '2011': 1.30778060664324,
    '2012': 1.3204740971465,
    '2013': 1.34146402055841,
    '2014': 1.36509068036482,
    '2015': 1.38899024590975,
    '2016': 1.40004346269942,
    '2017': 1.41484859363568
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Población de 75 a 79 años, mujeres (% de la población femenina)',
  'indicatorCode': 'SP.POP.7579.FE.5Y'
}];

const outputeducation = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': 15.2815504074097,
      '1971': 13.3423204421997,
      '1972': 14.1351003646851,
      '1973': 13.7966899871826,
      '1974': 14.5591802597046,
      '1975': 14.3904104232788,
      '1976': 16.3112506866455,
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': '',
      '2003': '',
      '2004': '',
      '2005': '',
      '2006': '',
      '2007': '',
      '2008': '',
      '2009': '',
      '2010': '',
      '2011': '',
      '2012': '',
      '2013': '',
      '2014': '',
      '2015': '',
      '2016': '',
      '2017': ''
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Educacin terciaria, profesores (% de mujeres)',
    'indicatorCode': 'SE.TER.TCHR.FE.ZS'
  },
];

const outputjob = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': '',
      '2003': '',
      '2004': '',
      '2005': '',
      '2006': '',
      '2007': '',
      '2008': '',
      '2009': 1,
      '2010': '',
      '2011': 1,
      '2012': '',
      '2013': 1,
      '2014': '',
      '2015': 1,
      '2016': '',
      '2017': 1
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Las mujeres no embarazadas y que no amamantan pueden hacer los mismos trabajos que los hombres (1=sí; 0=no)',
    'indicatorCode': 'SG.JOB.NOPN.EQ'
  },
];

const outputunemployment = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': 5.90000009536743,
      '1970': 4.84000015258789,
      '1971': 4.57000017166138,
      '1972': 4.40000009536743,
      '1973': 4.23000001907349,
      '1974': 4,
      '1975': 4.92000007629395,
      '1976': 5.19999980926514,
      '1977': 5.82000017166138,
      '1978': 6.5,
      '1979': 7.11999988555908,
      '1980': 6.96999979019165,
      '1981': 6.76999998092651,
      '1982': 6.98000001907349,
      '1983': 9.19999980926514,
      '1984': 10.5,
      '1985': 11.789999961853,
      '1986': '',
      '1987': 3.63000011444092,
      '1988': '',
      '1989': 7.92000007629395,
      '1990': 8.60000038146973,
      '1991': 5.80000019073486,
      '1992': 9.39999961853027,
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': 7.07000017166138,
      '1997': 7.69000005722046,
      '1998': 7.75,
      '1999': 7.98999977111816,
      '2000': '',
      '2001': 7.88000011444092,
      '2002': '',
      '2003': '',
      '2004': '',
      '2005': '',
      '2006': '',
      '2007': '',
      '2008': '',
      '2009': '',
      '2010': '',
      '2011': '',
      '2012': '',
      '2013': '',
      '2014': '',
      '2015': '',
      '2016': '',
      '2017': ''
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)',
    'indicatorCode': 'SL.UEM.TOTL.NE.ZS'
  },
];
describe('worldbank', () => {
  it('debería ser un objeto', () => {
    expect(typeof WORLDBANK).toBe('object');
  });
});

describe('filtrado de population', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterByIndicator).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterByIndicator(input, 'population')).toEqual(outputpopulation);
  });
});

describe('filtrado de education', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterByIndicator).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterByIndicator(input, 'education')).toEqual(outputeducation);
  });
});

describe('filtrado de violence', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterByIndicator).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterByIndicator(input, 'violence')).toEqual(outputViolence);
  });
});

describe('fltrado de unemployment', () => {
  it('debería ser una función', () => {
    expect(typeof worldbank.filterByIndicator).toBe('function');
  });
  it('debería retornar indicador de acuerdo a indicatorCode', () => {
    expect(worldbank.filterByIndicator(input, 'unemployment')).toEqual(outputunemployment);
  });
}); */

// TEST DE FUNCION PROMEDIO //
const inputPromedio = {
  'data': {
    '2002': 31.4799995422363,
    '2003': 29.6299991607666,
    '2004': 27.6299991607666,
    '2005': 27.2099990844727,
    '2006': 26.9699993133545,
    '2007': 27.6700000762939,
    '2008': 26.9599990844727,
    '2009': 27.3600006103516,
    '2010': 25.3400001525879,
    '2011': 24.7999992370605,
    '2012': 25.0400009155273,
    '2013': 24.0900001525879,
    '2014': 24.2099990844727,
    '2015': 21.6800003051758,
    '2016': 23.7399997711182,
    '2017': 23.7600002288818
  }
};

const outputPromedio = 26.10;

describe('compute es una funcion'), () => {
  it('deberia ser una función', () => {
    expect(typeof window.compute).toBe('funcion');
  });
};
it('retorna el promedio de los valores de indicadores'), () => {
  expect(window.compute(inputPromedio)).toEqual(outputPromedio);
};
