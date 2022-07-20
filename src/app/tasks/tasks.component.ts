import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TaskService } from "../services/task.service";

@Component({
    selector: "tasks-page",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent {
    phase = ""
    round = 0

    questions = []
    tasks = []
    placesDesc = []
    placesMaps=[]
    placesImages=[]

    constructor(private taskService: TaskService, private router: Router) {
        this.phase = taskService.phase
        this.round = taskService.round
        sessionStorage.setItem("route", "../tasks")
        sessionStorage.setItem("round", this.round.toString())
        sessionStorage.setItem("phase", this.phase)
    }

    next(event: any) {
        switch(this.phase) {
            case "place": {
                this.phase = "task"
                break;
            }
            case "task": {
                this.phase = "question"
                break;
            }
            case "question": {
                this.phase = "place"
                this.round++
                break;
            }
        }
        sessionStorage.setItem("round", this.round.toString())
        sessionStorage.setItem("phase", this.phase)
        this.router.navigate(
            [],
            { queryParams: { phase: this.phase, round: this.round } }
          );
    }
}