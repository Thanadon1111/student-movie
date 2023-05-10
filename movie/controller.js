const {getAll,remove, get,save} = require('./model');
const renderForm = require('./form');

async function listAction(request, response) {
  const movies = await getAll();
  const pugPath = `${__dirname}/views/list`; 
  response.render(pugPath,{movies}); 
}

async function removeAction(request, response) {
  const id = parseInt(request.params.id, 10);
  await remove(id);
  response.redirect(request.baseUrl);
}

async function formAction(request, response) {
  let movie = { id: '', title: '', year: '' };

  if (request.params.id) {
    movie = await get(parseInt(request.params.id, 10));
  }

  const body = renderForm(movie);
  response.send(body);
}

async function saveAction(request, response) {
  const movie = {
    id: request.body.id,
    title: request.body.title,
    year: request.body.year,
  };
 
  await save(movie);
  response.redirect(request.baseUrl);
}

module.exports = {listAction , removeAction , formAction ,saveAction } 