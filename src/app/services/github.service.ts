import { SearchType } from '../models/githubModels'
import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {
  githubUri = "https://api.github.com"

  constructor(private http: Http) { }

  private extractValue<T>(res: Response) : T {
    let body = res.json()
    return <T>body.data
  }

  search(searchType: SearchType, query: string) {
    return this.http
    .get(`${this.githubUri}/search/${searchType}?q=${query}`)
    .map(res => this.extractValue(res))
  }

}
