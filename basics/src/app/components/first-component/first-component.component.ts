import { Component } from "@angular/core";

@Component({
    selector: "app-first-component",
    templateUrl: "./first-component.component.html",
    styleUrls: ["./first-component.component.scss"],
})
export class FirstComponentComponent {
    name: string = "Luhmeiy";
    age: number = 19;
    job: string = "Programador";
    hobbies = ["Ler", "Jogar", "Estudar"];
}
