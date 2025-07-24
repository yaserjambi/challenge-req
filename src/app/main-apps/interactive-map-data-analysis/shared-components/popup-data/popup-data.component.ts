import { Component, Input } from '@angular/core';
import { InteractiveMapDataAnalysisService } from '../../interactive-map-data-analysis.service';

@Component({
  selector: 'app-popup-data',
  standalone: false,
  templateUrl: './popup-data.component.html',
  styleUrl: './popup-data.component.scss'
})
export class PopupDataComponent {
  @Input() data = null
  displayDetails = false
  constructor(private interactiveMapDataAnalysisService: InteractiveMapDataAnalysisService) {
    this.interactiveMapDataAnalysisService.getWindow().subscribe(data => {
      this.displayDetails = false
    })
  }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data.performanceIndicator >= 80) {
      this.data.color = "#0dbb95"
    }
    if (this.data.performanceIndicator <= 79 && this.data.performanceIndicator >= 40) {
      this.data.color = "#a58813"
    }
    if (this.data.performanceIndicator <= 39 && this.data.performanceIndicator >= 10) {
      this.data.color = "#681010"
    }
    if (this.data.performanceIndicator <= 9 && this.data.performanceIndicator >= 0) {
      this.data.color = "#36474b"
    }


  }
}
