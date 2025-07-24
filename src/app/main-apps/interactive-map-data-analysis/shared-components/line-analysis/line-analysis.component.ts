import { Component } from '@angular/core';
import { EChartsOption, ECharts } from 'echarts';
import data from '../../../../helper/data.json'

@Component({
  selector: 'app-line-analysis',
  standalone: false,
  templateUrl: './line-analysis.component.html',
  styleUrl: './line-analysis.component.scss'
})
export class LineAnalysisComponent {
  data = data
  options: EChartsOption;
  charts: ECharts

  constructor() {

  }
  ngOnInit(): void {
    let data: any = this.data
    let sum_total = data.reduce((n, d) => n + d.performanceIndicator, 0);
    data.forEach(element => {
      element.value = element.performanceIndicator
      element.parcent = ((element.performanceIndicator / sum_total) * 100).toFixed(0) == '0' ? ((element.performanceIndicator / sum_total) * 100).toFixed(2) + '%' : ((element.performanceIndicator / sum_total) * 100).toFixed(2) + '%';
      element.parcent_num = ((element.performanceIndicator / sum_total) * 100).toFixed(0);
    });


    this.options = {
      color: ['#B49164'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          var check = data.find(d => d.name == params[0].name);

          return `
   <div class="mb-3  ">
  <p class="text-white">${check.name}</p>
</div>
<div class="d-flex gap-2 mt-2 align-items-center w-100">
  <div class="col-12 text-white ">
    Performance Indicator (${check.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})
  </div>

</div>

      `


        },
        extraCssText: '#fff',
        backgroundColor: '#323539'
      },
      grid: {
        right: '3%',
        left: '150px',
        bottom: '0%',
        top: '5%',
        containLabel: false
      },

      yAxis: [
        {
          position: 'left',
          type: 'category',

          data: data.map(d => d.name),
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            color: '#fff',
            formatter: function (name) {
              var legendCount = data.find(d => d.name == name);
              return `${legendCount.name}  ${legendCount.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

            },
          },
        }
      ],
      xAxis: {
        inverse: false,
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: data.map(d => d.value)

        }
      ]
    };

    this.charts?.setOption(this.options);
    this.charts?.resize();

  }
}
