import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "intro-page",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.scss"]
})
export class IntroComponent {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
       // let route = sessionStorage.getItem("route");
       // let roundQuery = sessionStorage.getItem("round");
       // let phaseQuery = sessionStorage.getItem("phase");
       // if (route) {
        //    if(roundQuery) {
         //       this.router.navigate([route], {relativeTo: this.activatedRoute, queryParams: {round: roundQuery, phase: phaseQuery}})
          //  } else {
           //     this.router.navigate([route], { relativeTo: this.activatedRoute})
           // }
            
       // }
    }

    next(event: any) {
        this.router.navigate(["../names"], { relativeTo: this.activatedRoute})
    }
}