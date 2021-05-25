import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Error404Component } from './core/component/error-404/error404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CourseModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path: '', redirectTo: 'courses', pathMatch: 'full'
    },
    
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
