import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CascadingComponent} from './cascading/cascading.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {GetDataComponent} from './get-data/get-data.component';
import {PostDataComponent} from './post-data/post-data.component';
import {TableComponent} from "./table/table.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'cascading', component: CascadingComponent},
    {path: 'form', component: TemplateDrivenFormComponent},
    {path: 'formreactive', component: ReactiveFormComponent},
    {path: 'get-data', component: GetDataComponent},
    {path: 'post-data', component: PostDataComponent},
    {path: 'table', component: TableComponent},
    {path: '', component: CascadingComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes), // Thêm RouterModule vào imports và đưa routes vào forRoot()
    ],
    exports: [RouterModule], // Xuất RouterModule để có thể sử dụng ở bên ngoài module này
})
export class AppRoutingModule {
}
