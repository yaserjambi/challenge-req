import { Component } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-filter-challenge',
  standalone: false,
  templateUrl: './filter-challenge.component.html',
  styleUrl: './filter-challenge.component.scss'
})
export class FilterChallengeComponent {
  dataList = []
  keysObjects = []
  filterData: any
  filterList: any
  constructor(private challengeService: ChallengeService) {
    this.challengeService.getData().subscribe(data => {
      this.dataList = data
      this.filterData = {}
      this.filterList = {}
      let arrayAvoid = ['location']
      for (let value in this.dataList[0]) {
        if (!arrayAvoid.includes(value)) {
          this.keysObjects.push(value)
          this.filterData[value] = []
          this.filterList[value] = []
        }
      }
      this.filter()
    })
  }


  filter() {
    let dataList = this.dataList
    for (let value in this.filterData) {
      if (this.filterData[value].length !== 0) {
        dataList = dataList.filter(d => this.filterData[value].includes(d[value]))
      }
    }

    for (let value in this.filterList) {
      let arrayRemoveDuplicate = this.dataList.filter((obj, index) => {
        return index === this.dataList.findIndex(o => obj[value] === o[value]);
      }).map(d => d[value])
      this.filterList[value] = arrayRemoveDuplicate
    }
    if (this.filterData.name.length !== 0) {
      this.challengeService.setDataFilter(this.dataList.filter(d => this.filterData.name.includes(d.name)))
    } else {
      this.challengeService.setDataFilter(this.dataList)
    }
  }

}
