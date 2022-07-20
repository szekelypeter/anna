import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { NamesComponent } from './names/names.component';
import { TaskResolver } from './services/task.resolver';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
 // {
  //  path: "index.html",
   // children: [
    {
      path: "intro",
      component: IntroComponent
    },
    {
      path: "names",
      component: NamesComponent
    },
    {
      path: "tasks",
      resolve: {dummy: TaskResolver},
      component: TasksComponent
    },
    { 
      path: "**",
      redirectTo: "intro"  
    }
  //]
  //},
  //{ 
   // path: "**",
   // redirectTo: "index.html"  
  //}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
