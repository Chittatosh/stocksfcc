import createChart from './createChart';

const getUrl = symbol =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=UAIQGUDL11QBESD8`;

const pushStock = ({ symbol, jsonData }) => {
  const seriesObj = jsonData['Time Series (Daily)'];
  const dateList = Object.keys(seriesObj);
  dateList.reverse();
  const highList = dateList.map(dateStr => [
    new Date(dateStr).getTime(),
    Number(seriesObj[dateStr]['4. close']),
  ]);
  window.highStockList.push({ name: symbol, data: highList });
};

const initChart = symbolList => {
  window.highStockList = [];
  let callsLeft = symbolList.length;
  symbolList.forEach(async symbol => {
    const jsonData = await fetch(getUrl(symbol)).then(res => res.json());
    if (jsonData['Time Series (Daily)']) pushStock({ symbol, jsonData });
    callsLeft -= 1;
    // Create the chart when all data is loaded
    if (!callsLeft) createChart();
  });
};

const addToChart = async symbol => {
  const jsonData = await fetch(getUrl(symbol)).then(res => res.json());
  const indexToAdd = window.highStockList.findIndex(
    stock => stock.name === symbol,
  );
  if (indexToAdd === -1) {
    if (jsonData['Time Series (Daily)']) pushStock({ symbol, jsonData });
    const lastIndex = window.highStockList.length - 1;
    const colorIndex = lastIndex >= 10 ? 10 - lastIndex : lastIndex;
    // eslint-disable-next-line no-underscore-dangle
    window.highStockList[lastIndex]._colorIndex = colorIndex;
    createChart();
  }
};

const removeFromChart = symbol => {
  const indexToRemove = window.highStockList.findIndex(
    stock => stock.name === symbol,
  );
  if (indexToRemove + 1) {
    window.highStockList.splice(indexToRemove, 1);
    createChart();
  }
};

export { initChart, addToChart, removeFromChart };
