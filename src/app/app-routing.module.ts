import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeberFormComponent } from './memeber-form/memeber-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: 'create',
    pathMatch: 'full',
    component: MemeberFormComponent,
  },
  {
    path: 'member',
    pathMatch: 'full',
    component: MemberComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolComponent,
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticleComponent,
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventComponent,
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    component: MemeberFormComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: MemberComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
