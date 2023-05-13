let data =[
    {id : 1 , title : 'JOHN WICK 1-4', grade :'2014'},
    {id : 2 , title : 'Harry Potter 1-7', grade :'2001'},
    {id : 3 , title : 'Fantastic Beasts 1-3', grade :'2016'},
    {id : 4 , title : 'Avenger 1-4', grade:'2012'},
    {id : 5 , title : 'avatar 1-2', grade :'2009'},
];
function getAll() {
    return Promise.resolve(data);
}
function remove(id){
    data = data.filter((student)=> student.id !==id);
    return Promise.resolve();
}
module.exports = {getAll, remove}