import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{path: '', pathMatch: 'full',redirectTo: 'home-results'},
  {path: '', pathMatch: 'full',redirectTo: 'login'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },  
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'aula', loadChildren: './pages/aula/aula.module#AulaPageModule' },
  { path: 'professor', loadChildren: './pages/professor/professor.module#ProfessorPageModule' },
  { path: 'campo', loadChildren: './pages/campo/campo.module#CampoPageModule' },
  { path: 'lembrete', loadChildren: './pages/lembrete/lembrete.module#LembretePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
