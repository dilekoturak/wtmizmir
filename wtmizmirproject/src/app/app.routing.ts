import {RouterModule, PreloadAllModules} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {StudyComponent} from "./study/study.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'study', component: StudyComponent, pathMatch: 'full'},

    ], {preloadingStrategy: PreloadAllModules, enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
