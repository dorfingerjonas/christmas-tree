import {Component} from '@angular/core';
import {BackendService} from "../shared/backend.service";

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

    public selectedType: string | null;

    constructor(private readonly backend: BackendService) {
        this.selectedType = null;
    }

    typeSelectionChanged(type: string): void {
        this.selectedType = type;
    }
}
