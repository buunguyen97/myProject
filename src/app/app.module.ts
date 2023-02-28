import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseCardComponent } from './course-card/course-card.component';
import { CascadingComponent } from './cascading/cascading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HightLightDirective } from './Directives/hight-light.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';
import { TableComponent } from './table/table.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseCardComponent,
    CascadingComponent,
    PageNotFoundComponent,
    HightLightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    TableComponent,
    DeleteDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
