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

    firstName= ""
    secondName=""

    answer = new FormControl("", [Validators.required])
    controls = {
        answer: this.answer
    }

    form = new FormGroup(this.controls)

    roundTitle = ["Első", "Második", "Harmadik", "Negyedik","Ötödik"]
    question = ["Hol voltatok már külföldön közösen nyaralni ? Lehetőség szerint olyan választ adjatok, amiről vant fenn valamelyik közösségi portálon kép.",
    "Milyen háziállatotok van? 2 szóban válaszoljatok: a fajátja (pl kutya, macska) és a színe, vesszővel elválasztva (pl kutya, barna).\nIsmételten: lehetőség szerint olyan állatot válasszatok, amiről van képetek.\nHa nincs, írjátok azt, hogy nem.",
    this.secondName + " próbálja meg leírni " + this.firstName + " külsejét 3 kifejezéssel, vesszővel elválasztva. Pl barna hajú, kék szemű, molett.", this.firstName + " próbálja meg leírni " + this.secondName + " külsejét 3 kifejezéssel, vesszővel elválasztva. Pl barna hajú, kék szemű, molett.", 
    "Vavrek Anna! Mindennnél jobban szeretlek a világon! Hozzám jössz feleségül?"]
    questionTitle = ["Nyaralás", "Háziállat",  this.firstName + " külseje", this.secondName + " külseje", "A nagy kérdés"]
    label = ["Hol voltatok nyaralni?", "Háziállat fajtája, színe?", "Milyen az első személy?", "Milyen az második személy?", "Hozzám jössz?"]
    task = ["Menjetek be valamelyik kávézóba, és rendeljetek egymásnak! Lehetőség szerint valami olyat, amit magának nem rendelne.\nHa ezzel megvagytok kezdjünk valami könnyűvel: idézzétek fel a legviccessebb emlékeiteket és válaszatok egy kedvencet!", 
    "Ha már itt vagytok Tihanyban, lepjétek meg a másikat valami aprósággal, ami tetszene neki.\nKözben próbáljátok felidézni a kedvenc ajándékotokat, amit a másiktól kaptatok.", 
    "Próbáljatok a másikról egy szép képet csinálni a kertben. Használjátok a növényeket kreatívan.\nKözben próbáljátok felidézni a romantikus pillanataitokat. Itt nem kérem hogy válasszatok kedvencet.",
     "Miközben a strandon pihengettek ne feledjétek, hogy szeretitek egymást.\nPróbáljatok mind ketten a másikról 3-3 dolgot mondani, amit szerettek benne és amit nem.",
      "Idézzétek fel a legvadabb/legérdekesebb/legfurább dolgokat, amiket csináltatok közösen.\nHa ezzel megvagytok nézzetek mélyen egymás szemébe, és csókoljátok meg egymást, mintha nem lenne holnap!"]
    taskTitle = ["Rendelés", "Ajándék", "Fotózás", "Szeret nem szeret", "Szerelem"]
    placeTitle = ["Hotel annabella strandja", "Tihany", "Arborétum", "Pihenés", "Szép kilátások"]
    placesDesc = ["Kezdésnek menjetek le a strandara és igyatok egy kávét.",
     "Sajnos nem a legjobb időben csináljátok ezt a dolgot. Eredetileg levendula szedést lett volna a program.\nDe sebaj, menjetek be Tihanyba.",
     "Itt az ideje egy kis természetnek. Irány a Budaörsi Folly arborétum",
     "Na már sétáltatok eleget! Itt az ideje egy kicsit pihenni.\nTalálkozunk az örvényesi strandon", "Pihentünk kicsit, most itt az ideje megnézni egy szép kilátást. Menjteke a Balatonvilágosi Panoráma kilátóba"]
    placesMaps=["https://www.google.com/maps/place/Hotel+Annabella+strandja/@46.9573625,17.8929885,16z/data=!4m8!1m2!2m1!1sanna+hotel+balaton!3m4!1s0x4769bddf72a8c2ff:0xa003588c2709805b!8m2!3d46.9556342!4d17.9000456",
"https://www.google.com/maps/place/Tihany,+Fizet%C5%91s+Parkol%C3%B3,+Kossuth+Lajos+u.+19,+8237/@46.9155503,17.8839688,17z/data=!4m6!1m3!3m2!1s0x4769bb7f616e10ad:0x400c4290c1e5700!2sTihany,+8237!3m1!1s0x4769bc7b3255774d:0xd0b59c48c2f11a95",
"https://www.google.com/maps/place/Badacsonytomaj,+Folly+Arbor%C3%A9tum,+Bor%C3%A1szat+%C3%A9s+%C3%89tterem,+K%C3%A1polnav%C3%B6lgyi+%C3%BAt+25,+8257/@46.810125,17.545379,17z/data=!4m2!3m1!1s0x4769a9f3d5fd0df1:0x5e4bcca0a4c9c838",
"https://www.google.com/maps/place/%C3%96rv%C3%A9nyes,+%C3%96rv%C3%A9nyes+Beach,+F%C3%BCrd%C5%91+u.+41,+8242/@46.9111226,17.8264267,17z/data=!4m2!3m1!1s0x4769bb13a37216ff:0xadadb8c9515363e7",
"https://www.google.com/maps/place/Balatonvil%C3%A1gos,+S%C3%B3hajok+h%C3%ADdja,+8171/@46.9779056,18.1659075,17z/data=!4m6!1m3!3m2!1s0x4769ea47f7722ce5:0xfbc6e9fd2587c35!2sBalatonvil%C3%A1gos,+8171!3m1!1s0x4769eb7545ce87d7:0x55e7e0c68c6ef551"]

    constructor(private taskService: TaskService, private router: Router) {
        this.firstName = taskService.firstName
        this.secondName = taskService.secondName
        this.phase = taskService.phase
        this.round = taskService.round
        this.question[2] = this.secondName.toString() + " próbálja meg leírni " + this.firstName.toString() + " külsejét 3 kifejezéssel.\nA kifejezéseket vesszővel elválasztva kell leírni. Pl barna hajú, kék szemű, molett."
        this.question[3] = this.firstName.toString() + " próbálja meg leírni " + this.secondName.toString() + " külsejét 3 kifejezéssel.\nA kifejezéseket vesszővel elválasztva kell leírni. Pl barna hajú, kék szemű, molett."
        this.questionTitle[2] = this.firstName + " külseje"
        this.questionTitle[3] = this.secondName + " külseje"
        this.label[2] = "Milyen " + this.firstName + " ?"
        this.label[3] = "Milyen " + this.secondName + " ?"
        console.log(this.firstName)
        console.log(this.secondName)
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
        this.answer.setValue("")
        this.router.navigate(
            [],
            { queryParams: { phase: this.phase, round: this.round, firstName: this.firstName, secondName: this.secondName } }
          );
    }
}