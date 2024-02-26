import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  passwordToggle(): void {
    const input = document.getElementById("password") as HTMLInputElement;
    if (input.type === "password") {
      const image = document.getElementById("eye-icon") as HTMLImageElement;
      image.src = "assets/icons/visibility-off.svg";
      input.type = "text";
    } else if (input.type === "text") {
      const image = document.getElementById("eye-icon") as HTMLImageElement;
      image.src = "assets/icons/visibility-on.svg";
      input.type = "password";
    }
  }

  ngOnInit(): void {
    
  }
}
