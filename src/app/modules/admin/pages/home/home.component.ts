import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private URL = '//111.231.101.150:8801';
  goodsCategory: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getGoodsCategoryList().subscribe(
      value => {
        this.goodsCategory = value.results;
      }
    );

  }

  // 提取所有商品类别
  getGoodsCategoryList(page = 1 , pageSize = 20 , goodsCategory = ''): Observable<any> {

    const params = new HttpParams()
      .set('name_contains', goodsCategory.toString().trim().toLowerCase() )
      .set('page', page.toString() )
      .set('page_size', pageSize.toString() );

    return this.http.get<any>(this.URL + '/goods_category/', {params});
  }}
