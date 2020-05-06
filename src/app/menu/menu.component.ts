import { Component, Input } from "@angular/core";

@Component({
    selector: 'nat-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @Input('titre') myTitle = "Mon menu";
}