import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LembretePage } from 'src/app/pages/lembrete/lembrete.page';

import { LembreteFormPage } from './lembrete-form.page';

const routes: Routes = [
  {
    path: '',
    component: LembretePage
  },
  {
    path: 'lembrete-form',
    component: LembreteFormPage
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
  declarations: [LembretePage, LembreteFormPage]
})
export class LembretePageModule {}
