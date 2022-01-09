import { Component, OnInit } from '@angular/core';
import { SellDataService } from '../shared/sell-data.service';
import { ITree } from '../shared/backend.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: [ './pay.component.scss' ]
})
export class PayComponent implements OnInit {

  public tree: ITree;

  public readonly emailControl: FormControl;
  public readonly passwordControl: FormControl;
  public showResponse: boolean;

  constructor(private readonly dataService: SellDataService,
              private readonly router: Router) {
    this.tree = dataService.tree!;
    this.showResponse = false;

    this.emailControl = new FormControl('', [
      Validators.required
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(): void {
  }

  buy(): void {
    this.dataService.buy().then(res => {
      if (res != null) {
        this.emailControl.setValue('');
        this.passwordControl.setValue('');

        this.emailControl.markAsUntouched();
        this.passwordControl.markAsUntouched();

        this.showResponse = true;
      }
    });
  }

  isInputValid(): boolean {
    return this.emailControl.valid
      && this.passwordControl.valid;
  }

  close(): void {
    this.router.navigate([ '/' ]);
  }
}
