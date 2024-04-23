import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './triangle.component.html',
  styleUrl: './triangle.component.css'
})
export class TriangleComponent {
    public a:number|null = null;
    public b:number|null = null;
    public c:number|null = null;

    public perimetroSuma:number|null = null;
    public semiPeri:number|null = null;
    public plotoSuma:number|null = null;
    public errorMsg:string|null = null;

    public calc(){
      if(this.a != null && this.b != null && this.c != null) {
        this.perimetroSuma = this.a + this.b + this.c;

        this.semiPeri = (this.a + this.b + this.c) / 2; 

        if(
          this.a + this.b > this.c &&
          this.a + this.c > this.b &&
          this.b + this.c > this.a 
        ) {
           this.plotoSuma = Number(Math.sqrt(this.semiPeri * (this.semiPeri - this.a) * (this.semiPeri - this.b) * (this.semiPeri - this.c) ).toFixed(2));
           this.errorMsg = null;
        }
        else {
          if(!(this.a + this.b > this.c)) {
            this.errorMsg = 'Neteisingas trikampis: A + B yra mažiau negu C';
          }
          if(!(this.a + this.c > this.b)) {
            this.errorMsg = 'Neteisingas trikampis, A + C yra mažiau negu B';
          }
            if(!(this.b + this.c > this.a)) {
            this.errorMsg = 'Neteisingas trikampis, B + C yra mažiau negu A';
          }
          this.perimetroSuma = null;
          this.plotoSuma = null;
        }


      }
    }
}
