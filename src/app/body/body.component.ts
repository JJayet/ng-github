import { SearchType } from '../models/githubModels'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  value: string = 'Clear me'
  searchTypes = Object.keys(SearchType).map(x => SearchType[x])

  constructor() { }

  ngOnInit() {
  }

}
