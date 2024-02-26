import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

import { BatchDeliveryComponent } from './sections/batch-delivery/batch-delivery.component';
import { ComputerInventoryComponent } from './sections/computer-inventory/computer-inventory.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';

export const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: '/login'},
   { path : 'login' , component : LoginComponent },
   { path : 'signup' , component : SignupComponent },
   { path : 'recovery' , component : RecoveryComponent },
   { path : 'batch-delivery' , component : BatchDeliveryComponent },
   { path : 'computer-inventory' , component : ComputerInventoryComponent },
   { path : 'dashboard' , component : DashboardComponent },
];
