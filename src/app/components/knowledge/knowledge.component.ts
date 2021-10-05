import { Component, OnInit } from '@angular/core';
import { Knowledge } from "../../services/knowledge-api"
@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  knowledges: [] | any;

  constructor(
    private knowledgeService: Knowledge
  ) {     this.showAll()
    }

  ngOnInit(): void {
    this.showAll()
  }

  showAll(): any {
    this.knowledgeService.getGuardians().subscribe(result => {
      this.knowledges = result;
      console.log(this.knowledges)
    })

  }

}
