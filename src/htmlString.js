const jsUrl = process.env.NODE_ENV
  ? '/main.js' // production
  : 'http://localhost:3001/main.js'; // dev

const htmlString = `<!doctype html>
  <html class="no-js" lang="en">
    <head>
      <title>Stocksfcc</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#2F3BA2">
      <meta name="Description" content="Yelpnight">
      <link rel="manifest" href="/manifest.json">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body class="container">
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <h1 class="text-center">Chart the Stock Market</h1>
      <div id="chartElement" style="height: 600px; min-width: 300px"></div>
      <div id="root"></div>
      <script src="https://code.highcharts.com/stock/highstock.js"></script>
      <script src="${jsUrl}"></script>
    </body>
    <footer>
      <link rel="stylesheet" href="/react-select.css">
      <link rel="stylesheet" href="/react-virtualized.css">
      <link rel="stylesheet" href="/react-virtualized-select.css">
      <link rel="shortcut icon" href="/favicon.ico"/>
    </footer>
  </html>`;

module.exports = htmlString;
