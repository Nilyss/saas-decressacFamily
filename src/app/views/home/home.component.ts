import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <body class="body">
      <header></header>
      <main>
        <app-form></app-form>
      </main>
      <footer></footer>
    </body>
  `,
  styles: ['.body {background: #2b2a33; min-height: 100vh;}'],
})
export class HomeComponent {}
