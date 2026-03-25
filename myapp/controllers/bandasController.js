const bandas = require('../db').lista;

function listadoBandas(req, res) {
  res.render('listadoBandas', { bandas });
}

function detalleBanda(req, res) {
  let banda = null;
  for (let i = 0; i < bandas.length; i++) {
    if (bandas[i].id == req.params.id) {
      banda = bandas[i];
      break;
    }
  }

  if (!banda) return res.render('detalleBanda', { banda: null, id: req.params.id });

  res.render('detalleBanda', { banda });
}

function porGenero(req, res) {
  let genero = req.params.genero;
  if (!genero) genero = '';
  const bandasFiltradas = [];
  for (let i = 0; i < bandas.length; i++) {
    if (bandas[i].genero.toLowerCase() === genero.toLowerCase()) {
      bandasFiltradas.push(bandas[i]);
    }
  }

  res.render('porGenero', { genero, bandas: bandasFiltradas });
}

module.exports = {
  listadoBandas,
  detalleBanda,
  porGenero,
};

