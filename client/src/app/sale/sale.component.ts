import { Component, OnInit } from '@angular/core';
import { SellDataService } from '../shared/sell-data.service';
import { ITree } from '../shared/backend.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: [ './sale.component.scss' ]
})
export class SaleComponent implements OnInit {

  public tree: ITree;

  public readonly nameControl: FormControl;
  public readonly emailControl: FormControl;
  public readonly streetControl: FormControl;
  public readonly houseNumberControl: FormControl;
  public readonly zipControl: FormControl;

  public constructor(private readonly dataService: SellDataService,
                     private readonly router: Router) {
    this.tree = dataService.tree!;

    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/g)
    ]);

    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.streetControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/g)
    ]);

    this.houseNumberControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/)
    ]);

    this.zipControl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
      Validators.maxLength(4)
    ]);
  }

  public ngOnInit(): void {
  }

  public buy(): void {
    this.router.navigate([ '/pay' ]);
  }

  public isInputValid(): boolean {
    return this.nameControl.valid
      && this.emailControl.valid
      && this.streetControl.valid
      && this.houseNumberControl.valid
      && this.zipControl.valid;
  }
}
