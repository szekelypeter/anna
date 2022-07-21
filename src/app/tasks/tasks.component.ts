import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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

    answer = new FormControl("", [Validators.required])
    controls = {
        answer: this.answer
    }

    form = new FormGroup(this.controls)

    roundTitle = ["első"]
    question = ["question one?"]
    questionTitle = ["question one?"]
    label = ["yeah qeuestionone"]
    task = ["This is a simple task"]
    taskTitle = ["This is a simple task"]
    placeTitle = ["Hotel annabella strandja"]
    placesDesc = ["Go to here!"]
    placesMaps=["https://www.google.com/maps/place/Hotel+Annabella+strandja/@46.9573625,17.8929885,16z/data=!4m8!1m2!2m1!1sanna+hotel+balaton!3m4!1s0x4769bddf72a8c2ff:0xa003588c2709805b!8m2!3d46.9556342!4d17.9000456"]

    constructor(private taskService: TaskService, private router: Router) {
        this.phase = taskService.phase
        this.round = taskService.round
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
                if (this.answer.valid) {
                    this.phase = "place"
                    this.round++
                    break;
                } else {
                    this.form.markAllAsTouched()
                    break;
                }

            }
        }
        this.router.navigate(
            [],
            { queryParams: { phase: this.phase, round: this.round } }
          );
    }
}