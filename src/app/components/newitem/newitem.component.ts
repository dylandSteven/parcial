import { Component, OnInit } from '@angular/core';
import { Knowledge } from "../../services/knowledge-api"

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {
  content:string|any;
  summary:string|any;
  urlToImage:string|any;
  title:string|any;

  constructor(private knowledgeService: Knowledge
  ) {

  }

  ngOnInit(): void {
  }
  
  addData():any
  {
    this.knowledgeService.addPublication(this.title,this.urlToImage,this.summary,this.content).
    subscribe(result=>
      {
        console.log(result)
      })
  }
  refresh(): void { window.location.reload(); }
}
