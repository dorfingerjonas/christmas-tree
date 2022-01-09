import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BackendService} from "../../shared/backend.service";

@Component({
    selector: 'app-tree-list',
    templateUrl: './tree-list.component.html',
    styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnChanges {

    @Input()
    public selectedTreeType!: string;
    public treeIds: number[] | null;

    constructor(private readonly backendService: BackendService) {
        this.treeIds = null;
    }

    public async ngOnChanges(changes: SimpleChanges): Promise<void> {
        await this.loadTrees(changes['selectedTreeType'].currentValue)
            .then()
            .catch(err => err);
    }

    private async loadTrees(type: string): Promise<void> {
        this.treeIds = await this.backendService.getTreesOfType(type);
    }
}
