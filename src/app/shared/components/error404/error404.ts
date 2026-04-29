import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  imports: [],
  templateUrl: './error404.html',
  styleUrl: './error404.scss',
})
export class Error404 {
btnTop: number = 50;
  btnLeft: number = 50;
  
  messages: string[] = [
    "YOU BROKE THE INTERNET.",
    "THE VOID HAS CONSUMED THIS URL.",
    "ERROR 404: REALITY NOT FOUND.",
    "WHY ARE YOU STILL HERE?",
    "ABORT! ABORT! ABORT!",
    "THEY ARE WATCHING YOU.",
    "01000101 01010010 01010010 01001111 01010010"
  ];
  currentMessage: string = this.messages[0];
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Change the threatening message every 150 milliseconds
    this.intervalId = setInterval(() => {
      this.currentMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
    }, 150);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  teleportButton() {
    // Randomize button position between 10% and 90% of the viewport
    this.btnTop = Math.floor(Math.random() * 80) + 10;
    this.btnLeft = Math.floor(Math.random() * 80) + 10;
  }

  goHome() {
    alert("YOU ACTUALLY CAUGHT IT?! Fine. Sending you back to reality.");
    this.router.navigate(['/']);
  }
}
