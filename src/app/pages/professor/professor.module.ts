import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfessorPage } from 'src/app/pages/professor/professor.page';
import { ProfessorFormPage } from 'src/app/pages/professor/professor-form.page';
import { ProfessorFilterPage } from 'src/app/pages/professor/professor-filter.page';


const routes: Routes = [
  {
    path: '',
    component: ProfessorPage
  },
  {
    path: 'professor-form',
    component: ProfessorFormPage
  },
  {
    path: 'professor-filter',
    component: ProfessorFilterPage
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
  declarations: [ProfessorPage, ProfessorFilterPage, ProfessorFormPage]
})
export class ProfessorPageModule {}
