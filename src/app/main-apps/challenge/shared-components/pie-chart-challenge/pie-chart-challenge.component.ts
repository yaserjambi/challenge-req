import { Component } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-pie-chart-challenge',
  standalone: false,
  templateUrl: './pie-chart-challenge.component.html',
  styleUrl: './pie-chart-challenge.component.scss'
})
export class PieChartChallengeComponent {
  data: any
  options: EChartsOption;
  charts: ECharts

  constructor(private challengeService: ChallengeService) {
    this.challengeService.getDataFilter().subscribe(data => {

      let sum_total = data.reduce((n, d) => n + d.performanceIndicator, 0);
      data.forEach(element => {
        element.value = element.performanceIndicator
        element.parcent = ((element.performanceIndicator / sum_total) * 100).toFixed(0) == '0' ? ((element.performanceIndicator / sum_total) * 100).toFixed(2) + '%' : ((element.performanceIndicator / sum_total) * 100).toFixed(2) + '%';
        element.parcent_num = ((element.performanceIndicator / sum_total) * 100).toFixed(0);
      });

      this.options = {
        legend: {
          orient: 'vertical',
          left: 'right',
          top: 20,
          formatter: function (name) {
            var legendCount = data.find(d => d.name == name);
            return '{name|' + name + '}{count|' + legendCount.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '}';
          },
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            fontSize: 13,
            rich: {
              count: {
                backgroundColor: 'none',
                color: '#65b4f3',
                fontSize: 14,
                width: 50,
                padding: [0, 5, 0, 5],
                fontWeight: "bold"
              },
              name: {
                backgroundColor: 'none',
                color: '#65b4f3',
                fontWeight: 'bold',
                fontSize: 14,
                padding: [0, 10, 0, 10],
              }
            }
          },
          show: false
        },
        tooltip: {
          trigger: 'item',
          position: ['40%', '0%'],
          textStyle: {
            color: '#fff',
          },
          backgroundColor: '#323539',
          show: true
        },

        series: [{
          name: 'Performance Indicator',
          type: 'pie',
          radius: 130,
          center: ['50%', '50%'],

          data: data,
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            },
            itemStyle: {
              borderWidth: 0,
              shadowBlur: 0
            }
          },
          label: {
            show: true,
            position: 'inside',
            formatter: function (name: any) {
              return `${name.data.name}`;
            },
            color: '#000',

          },
          labelLine: {
            show: false

          },

        }]
      };

      this.charts?.setOption(this.options);
      this.charts?.resize();
    })
  }
}
