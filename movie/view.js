function render(movies) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Movie list</title>
    <link rel="stylesheet" href="style.css">
    <title>.......</title>
  </head>
  <body>
    <table>
      <thead><tr><th>Id4</th><th>Title</th></tr></thead>
        ${movies
          .map((movie) => `<tr><td>${movie.id}</td><td>${movie.title}</td></tr>`)
          .join('')}
    </table>
  </body>
  </html>
  `}; // backtick = Alt + 96
  
  // table>th*2+tr>td*2
  
  module.exports = render;