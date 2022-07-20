import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { NamesComponent } from './names/names.component';
import { TaskResolver } from './services/task.resolver';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
 
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
