import { Component } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import data from '../../../helper/data.json'
@Component({
  selector: 'app-challenge-list',
  standalone: false,
  templateUrl: './challenge-list.component.html',
  styleUrl: './challenge-list.component.scss'
})
export class ChallengeListComponent {
  constructor(private challengeService: ChallengeService) {

  }


  ngOnInit() {
    this.challengeService.setData(data)
  }

  toMap() {

  }
}
