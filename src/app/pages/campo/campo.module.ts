import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CampoFormPage } from 'src/app/pages/campo/campo-form.page';

import { CampoPage } from './campo.page';

const routes: Routes = [
  {
    path: '',
    component: CampoPage
  },
  {
    path: 'campo-form',
    component: CampoFormPage
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
  declarations: [CampoPage, CampoFormPage]
})
export class CampoPageModule {}
