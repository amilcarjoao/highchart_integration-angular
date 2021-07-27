import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// Alternatively, this is how to load Highstock. Highmaps is similar.
// import Highcharts from 'highcharts/highstock';

// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);
@Component({
  selector: "app-highchart",
  templateUrl: "./highchart.component.html",
  styleUrls: ["./highchart.component.css"]
})




/* // Create a timer
let start = +new Date(); */

// Generate the chart

export class HighchartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {

    chart: {
      events: {
          load: function () {
                  this.setTitle(null, {
                      text: 'Built chart in ms'
                  });
          }
      },
      zoomType: 'x'
  },

  rangeSelector: {

      buttons: [{
          type: 'day',
          count: 3,
          text: '3d'
      }, {
          type: 'week',
          count: 1,
          text: '1w'
      }, {
          type: 'month',
          count: 1,
          text: '1m'
      }, {
          type: 'month',
          count: 6,
          text: '6m'
      }, {
          type: 'year',
          count: 1,
          text: '1y'
      }, {
          type: 'all',
          text: 'All'
      }],
      selected: 3
  },

  yAxis: {
      title: {
          text: 'Temperature (°C)'
      }
  },

  title: {
      text: 'Hourly temperatures in Vik i Sogn, Norway, 2009-2017',
      align: 'left'
  },

  subtitle: {
      text: 'Built chart in ...', // dummy text to reserve space for dynamic subtitle
      align: 'left'
  },

/*           series: [{
            name: 'Temperature',
            data: data.data,
            pointStart: data.pointStart,
            pointInterval: data.pointInterval,
            tooltip: {
                valueDecimals: 1,
                valueSuffix: '°C'
            }
        }] */

}

  ngOnInit() {
    var chart = Highcharts.chart("container", this.chartOptions );
  }
}

