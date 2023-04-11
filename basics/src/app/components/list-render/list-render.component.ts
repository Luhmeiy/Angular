import { Component } from "@angular/core";
import { Animal } from "src/app/Animal";

import { ListService } from "src/app/services/list.service";

@Component({
    selector: "app-list-render",
    templateUrl: "./list-render.component.html",
    styleUrls: ["./list-render.component.scss"],
})
export class ListRenderComponent {
    animals: Animal[] = [];

    animalDetails = "";

    constructor(private listService: ListService) {
        this.getAnimals();
    }

    showAge(animal: Animal) {
        this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
    }

    removeAnimal(animal: Animal) {
        this.animals = this.animals.filter((x) => animal.name !== x.name);
        this.listService.remove(animal.id).subscribe();
    }

    getAnimals(): void {
        this.listService
            .getAll()
            .subscribe((animals) => (this.animals = animals));
    }
}
