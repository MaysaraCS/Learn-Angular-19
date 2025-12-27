import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  // we access signal as a method
  firstName = signal("Maysara");

  lastName = signal<string>("Mohamed");

  courseName: string = "Angular";

  rollNo = signal<number>(0);
  constructor(){
    const value = this.firstName();
    setTimeout(()=>{
      this.courseName = "react js";
      this.firstName.set("ahmed");
      debugger;
    }, 5000);
  }

  onIncrement(){
    this.rollNo.update(oldValue=> oldValue+1)
  }
}
