import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KnowledgeComponent} from "../app/components/knowledge/knowledge.component"
import {NewitemComponent} from "../app/components/newitem/newitem.component"
const routes: Routes = [
{path:'',redirectTo:"knowledge",pathMatch:'full'},
{path:'knowledge',component:KnowledgeComponent},
{path:'admin/knowledge/new',component:NewitemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
