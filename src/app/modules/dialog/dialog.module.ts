import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OccupantsAddDialogComponent } from './components/occupants-add-dialog/occupants-add-dialog.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';

const materialModules = [
];

const primeNgModules = [
  ButtonModule,
  InputTextModule
];

const dialogComponents = [
  OccupantsAddDialogComponent
];

@NgModule({
  declarations: [...dialogComponents],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    ...primeNgModules,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [...dialogComponents],
  providers: [],
})
export class CMADialogModule { }