import { Component, Input, OnInit } from '@angular/core';
import { BackendService, ITree } from '../../shared/backend.service';
import { Router } from '@angular/router';
import { SellDataService } from '../../shared/sell-data.service';

@Component({
  selector: 'app-tree-display',
  templateUrl: './tree-display.component.html',
  styleUrls: [ './tree-display.component.scss' ]
})
export class TreeDisplayComponent implements OnInit {

  @Input()
  public treeId!: number;

  @Input()
  public type!: string;

  public tree: ITree | null;

  public constructor(private readonly backendService: BackendService,
                     private readonly sell: SellDataService,
                     private readonly router: Router) {
    this.tree = null;
  }

  public get btnText(): string {
    return this.tree?.sold ? 'Sold' : 'Buy';
  }

  public async ngOnInit(): Promise<void> {
    this.tree = await this.backendService.getTreeById(this.type, this.treeId);
  }

  public buyTree(): void {
    this.sell.tree = this.tree;
    this.router.navigate([ 'sale' ]);
  }

}
