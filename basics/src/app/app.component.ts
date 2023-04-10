import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    userName = "Luhmeiy";

    userData = {
        email: "joaquin@email.com",
        role: "Admin",
    };

    title = "basics";
}
