import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  callValue: number = 0;
  funT: any = 'NoFunction';

  callNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickMethod(val: string, type: any) {
    if(type == 'number'){
      this.onNumberClick(val);
    }
    else if(type == 'function'){
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string){
    if(this.callNumber != 'noValue'){
      this.callNumber = this.callNumber + val;
    }
    else{
      this.callNumber = val;
    }
    this.callValue = parseFloat(this.callNumber);
  }

  onFunctionClick(val : string){
    if(val == 'c') {
      this.clearAll();
    }
    else if(this.funT == 'NoFunction'){
      this.firstNumber = this.callValue;
      this.callValue = 0;
      this.callNumber = 'noValue';
      this.funT = val;
    }
    else if(this.funT != 'NoFunction'){
      this.secondNumber = this.callValue;

      // Calculate
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){
    if(this.funT == '+'){
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') this.onEqualClick();
    }
    else if(this.funT == '-'){
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') this.onEqualClick();
    }
    else if(this.funT == '*'){
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
      if(val == '=') this.onEqualClick();
    }
    else if(this.funT == '/'){
      const total = this.firstNumber / this.secondNumber;
      if(val == '=') this.onEqualClick();
    }
    else if(this.funT == '%'){
      const total = this.firstNumber % this.secondNumber;
      if(val == '=') this.onEqualClick();
    }
  }

  totalAssignValues(total: number, val: string){
    this.callValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.callNumber = 'noValue';
    this.funT = val;
  }

  onEqualClick() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funT = "NoFunction";
    this.callNumber = "noValue";
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funT = "NoFunction";
    this.callNumber = "noValue";
    this.callValue = 0;
  }
}
