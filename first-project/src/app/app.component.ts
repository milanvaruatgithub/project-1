import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
  loadedfeature = 'recipe';

  onnavigate(feature: string)
  {
    this.loadedfeature = feature;
  }
}
