import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { InteractiveMapDataAnalysisService } from '../interactive-map-data-analysis.service';

@Component({
  selector: 'app-im-data-analysis-list',
  standalone: false,
  templateUrl: './im-data-analysis-list.component.html',
  styleUrl: './im-data-analysis-list.component.scss'
})
export class ImDataAnalysisListComponent {

  constructor(
    private interactiveMapDataAnalysisService: InteractiveMapDataAnalysisService,


  ) {
  }

  ngOnInit() {
    this.generateMapBox()
  }

  generateMapBox() {
    this.interactiveMapDataAnalysisService.map = new mapboxgl.Map({
      container: 'map',
      accessToken: environment.mapbox_accessToken,
      style: 'mapbox://styles/yaserjambi/cm5hy55gd001501pl570vgts1/draft',
      center: [32.80742, 12.60999],
      zoom: 0.76,
      bearing: -30.46,
      pitch: 58.52,
      attributionControl: false
    });


    setTimeout(() => {

      this.interactiveMapDataAnalysisService.map.flyTo({
        center: [41.30048, 22.89087],
        zoom: 6.03,
        bearing: -33.02,
        pitch: 0,
      });

    }, 3000);

    this.interactiveMapDataAnalysisService.map.on('style.load', () => {
      this.interactiveMapDataAnalysisService.map.resize()
      this.interactiveMapDataAnalysisService.generateData()

    })

    this.interactiveMapDataAnalysisService.map.on('click', (event) => {
      this.onClick(event)
    });

    this.interactiveMapDataAnalysisService.map.on('touchend', (event) => {
      this.onClick(event)
    });



  }


  onClick(event): void {
    this.interactiveMapDataAnalysisService.setWindow(null)
  }

}
