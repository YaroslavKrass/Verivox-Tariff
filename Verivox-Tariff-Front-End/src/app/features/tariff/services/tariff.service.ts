import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Tariff, TariffResp } from "../models/tariffs.model";

@Injectable({ providedIn: 'root' })
export class TariffService {
  constructor(private http: HttpClient) { }

  search(consumption: number): Observable<Tariff[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('consumption', consumption);

    return this.http.get<TariffResp>('http://localhost:3000/client-api/tariffs', { params: queryParams })
      .pipe(
        map(resp => resp.consumption)
      )
  }
}
