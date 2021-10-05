import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http"
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {KnowledgeComponent} from "../app/components/knowledge/knowledge.component"
import {NewitemComponent} from "../app/components/newitem/newitem.component"

@NgModule({
  declarations: [
    AppComponent,
    KnowledgeComponent,
    NewitemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
