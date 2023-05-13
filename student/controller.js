const {getAll,remove} =require('./model');
const render = require('./view');

async function listAction(request,response) {
    const data = await getAll();
    const body = render(data);
    response.send(body);

}
async function removeAction(request,response){
const id = parseInt(request.params.id,10);
await remove(id);
response.redirect(request.baseUrl)
}
module.exports={listAction,removeAction};