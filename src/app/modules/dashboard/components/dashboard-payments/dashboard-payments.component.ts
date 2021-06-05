import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { PAYMENTSBREADCRUMBS } from 'src/app/shared/constants/breadcrumbs';
import { GenericContainer } from 'src/app/shared/generics/generic-container';
import { ISimpleItem } from 'src/app/shared/generics/generic-model';

@Component({
  selector: 'cma-dashboard-payments',
  templateUrl: './dashboard-payments.component.html',
  styleUrls: ['./dashboard-payments.component.scss']
})
export class DashboardPaymentsComponent extends GenericContainer implements OnInit {
  public breadCrumbItems: ISimpleItem[] = PAYMENTSBREADCRUMBS;
  public settingItems: MenuItem[];
  public actionItems: MenuItem[];
  public filterOptions: ISimpleItem[] = [
    { label: 'Citizenship', value: 'citizenship' },
    { label: 'Contact No.', value: 'contactNo' },
    { label: 'ID No.', value: 'idNo' },
    { label: 'ID Type', value: 'idType' },
    { label: 'Occupation', value: 'occupation' },
    { label: 'Gender', value: 'gender' }
  ];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    super();

    this.form = this.fb.group({
      filterKeyword: [null],
      fieldFilter: [null]
    });
  }

  ngOnInit(): void {
    this.settingItems = [
      {
        label: 'Move To',
        items: [
          { label: 'Orientation', icon: 'pi pi-fw pi-info-circle' },
          { label: 'Move-In', icon: 'pi pi-fw pi-info-circle' }
        ]
      },
      {
        label: 'Data',
        items: [
          { label: 'Import', icon: 'pi pi-fw pi-cloud-download' },
          { label: 'Export', icon: 'pi pi-fw pi-cloud-upload' }
        ]
      }, {
        label: 'Calendar',
        items: [
          { label: 'Orientation', icon: 'pi pi-fw pi-calendar' },
          { label: 'Move-in', icon: 'pi pi-fw pi-calendar-plus' }
        ]
      }
    ];
  }
}