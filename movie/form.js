function renderForm(movie) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href=" /style.css" />
    <title>.........</title>
  </head>
  <body>
    <form action="/movie/save" method="post">
      <div>
        <ul>
          <li>Name-Username : นาย ธนดล จงรักษ์</li>
        </ul>
      </div>
    <tbody>
      <input type="hidden" id="id" name="id" value="${movie.id}" />
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value="${movie.title}" />
      </div>
      <div>
        <label for="id">Year:</label>
        <input type="text" id="year" name="year" value="${movie.year}" />
      </div>
      <div>
        <button type="submit">save</button>
      </div>
    </form>
    </tbody>
  </body>
  </html>  
    `}; // backtick = Alt + 96
       
module.exports = renderForm;