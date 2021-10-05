import { Injectable } from '@angular/core';
// Interfaces
import {knowledge} from "../models/klowledge.model"
// Http
import { HttpClient, HttpParams } from '@angular/common/http';
// observables
import { Observable } from 'rxjs';

import {map} from "rxjs/operators"


@Injectable({
    providedIn: 'root'
})

export class Knowledge
{
    private basePath = 'http://localhost:3000/api/v1/knowledge';
    apiEndPoint = '';
    constructor(private http: HttpClient) { }

    getGuardians()
    {
        return this.http.get<knowledge[]>("http://localhost:3000/knowledge")
        .pipe(map((res:any)=>{
            return res;
        }))
    }
    addPublication(
        title:string,
        urlToImage:string,
        summary:string,
        content:string){
        return this.http.post<Knowledge>('http://localhost:3000/api/v1/knowledge/',{   
            title:title,
            urlToImage:urlToImage,
            summary:summary,
            content:content
            }
        )}

        
}