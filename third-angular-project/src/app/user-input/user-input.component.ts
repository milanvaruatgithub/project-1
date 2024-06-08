import { Component, EventEmitter, Output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { investmentinput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<investmentinput>();

  enterdinitialinvestmment =signal('0');
  enteredannualinvestment=signal('0');
  enterexpextedreturn=signal('5');
  enteredduration=signal('10');



onsubmit()
{
  this.calculate.emit(
    {
      initialInvestment: +this.enterdinitialinvestmment(),
      annualInvestment: +this.enteredannualinvestment(),
      duration: +this.enteredduration(),
      expectedReturn: +this.enterexpextedreturn()
    }
  );
}

}
