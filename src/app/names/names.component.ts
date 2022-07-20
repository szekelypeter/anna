import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "names-page",
    templateUrl: "./names.component.html",
    styleUrls: ["./names.component.scss"]
})
export class NamesComponent {
   

    firstName = new FormControl("", [Validators.required])
    secondName = new FormControl("", [Validators.required])

    controls = {
        firstName: this.firstName,
        secondName: this.secondName
    }

    form = new FormGroup(this.controls)

    constructor(private router: Router,  private activatedRoute: ActivatedRoute) {}

    next(event: any) {
        this.form.markAllAsTouched()
        if (this.form.valid) {
            this.router.navigate(["../tasks"],{relativeTo: this.activatedRoute, queryParams: {round: 1, phase: "place"}})
        }
    }
}