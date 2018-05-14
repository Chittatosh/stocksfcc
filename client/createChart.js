const createChart = () => {
  console.log('createChart');
  window.Highcharts.stockChart('chartElement', {
    rangeSelector: {
      selected: 4,
    },
    yAxis: {
      labels: {
        formatter() {
          const percent = this.value;
          const sign = percent > 0 ? '+' : '';
          return `${sign} ${percent}%`;
        },
      },
      plotLines: [
        {
          value: 0,
          width: 2,
          color: 'silver',
        },
      ],
    },
    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true,
    },
    series: window.highStockList,
  });
};

export default createChart;
