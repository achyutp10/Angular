import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { LoggingService } from './app/logging.service';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

export const TaskServiceToken = new InjectionToken<TasksService>('tasks-service-token')

// bootstrapApplication(AppComponent, {providers: [LoggingService]}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [{provide: TaskServiceToken, useClass: TasksService}],
}).catch((err) => console.error(err));
