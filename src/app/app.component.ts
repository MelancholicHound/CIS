import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { SignupComponent } from './pages/signup/signup.component';

import { AccountComponent } from './components/account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { BatchDeliveryComponent } from './sections/batch-delivery/batch-delivery.component';
import { ComputerInventoryComponent } from './sections/computer-inventory/computer-inventory.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RecoveryComponent,
    SignupComponent,
    AccountComponent,
    HeaderComponent,
    NavigationComponent,
    BatchDeliveryComponent,
    ComputerInventoryComponent,
    DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CIS';
}
