import { Component, ViewChild } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-table-challenge',
  standalone: false,
  templateUrl: './table-challenge.component.html',
  styleUrl: './table-challenge.component.scss'
})
export class TableChallengeComponent {
  data = []
  displayedColumns = []
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private challengeService: ChallengeService) {
    this.challengeService.getDataFilter().subscribe(data => {
      this.displayedColumns = []
      data.forEach(element => {
        delete element.location
      });
      this.data = data
      for (let value in this.data[0]) {
        this.displayedColumns.push(value)
      }

      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
