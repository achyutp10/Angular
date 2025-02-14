import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TaskServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // private tasksService: TasksService;

  // constructor() {
  //   this.tasksService = new TasksService();
  // }

  // constructor(tService: TasksService) {
  //   this.tasksService = tService;
  // }

  // constructor(private tasksService: TasksService) {
  // }

  constructor(@Inject(TaskServiceToken) private tasksService:TasksService) {
  }

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title, description})
    this.formEl()?.nativeElement.reset();
  }
}
