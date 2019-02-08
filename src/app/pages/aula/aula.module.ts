import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PopmenuComponent } from '../../components/popmenu/popmenu.component';

import { AulaPage } from './aula.page';
import { AulaFormPage } from './aula-form.page';
import { AulaFilterPage } from './aula-filter.page';

const routes: Routes = [
  {
    path: '',
    component: AulaPage
  },
  {
    path: 'aula-form',
    component: AulaFormPage
  },
  {
    path: 'aula-filter',
    component: AulaFilterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AulaPage, AulaFormPage, AulaFilterPage]
})
export class AulaPageModule {}
