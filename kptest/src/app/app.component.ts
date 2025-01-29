import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kptest';
  studentName = "Ivan";
  studentLastName = "Marchenko";
  studentId = "S00273436";

  todoTitle = "To do list";

  public thingsToDo: string[] = [
    "Learn JavaScript",
    "Learn Angular",
    "Learn Redux"
  ]

  public thingsCompleted: string[] = [];

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  };
}