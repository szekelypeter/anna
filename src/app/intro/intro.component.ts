import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "intro-page",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.scss"]
})
export class IntroComponent {

    constructor(private router: Router) {}

    next(event: any) {
        this.router.navigate(["names"])
    }
}