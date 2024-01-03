import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path: 'content/:id',
  component:ContentComponent,
  pathMatch:'prefix'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
