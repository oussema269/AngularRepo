// src/app/services/bloc.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bloc {
  idBloc: number;
  nomBloc: string;
  capaciteBloc: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlocsService {
  private apiUrl = 'http://192.168.50.4:8089/tpfoyer/bloc';

  constructor(private http: HttpClient) {}

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/retrieve-all-blocs`);
  }

  getBlocById(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.apiUrl}/retrieve-bloc/${id}`);
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.apiUrl}/add-bloc`, bloc);
  }

  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/modify-bloc`, bloc);
  }

  deleteBloc(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-bloc/${id}`);
  }

  getBlocsWithoutFoyer(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/trouver-blocs-sans-foyer`);
  }

  getBlocsByNameAndCapacity(name: string, capacity: number): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/get-bloc-nb-c/${name}/${capacity}`);
  }
}

