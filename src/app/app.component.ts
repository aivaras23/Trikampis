import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriangleComponent } from './triangle/triangle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TriangleComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Trikampis';
}
