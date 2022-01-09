import { Injectable } from '@angular/core';
import { BackendService, ITree } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class SellDataService {

  private treeToSell: ITree | null;

  public constructor(private readonly backendService: BackendService) {
    this.treeToSell = null;
  }

  public get tree(): ITree | null {
    return this.treeToSell;
  }

  public set tree(tree: ITree | null) {
    this.treeToSell = tree;
  }

  public buy(): Promise<ITree | null> {
    return this.treeToSell
      ? this.backendService.buyTree(this.treeToSell!)
      : new Promise(resolve => resolve(null));

  }
}
