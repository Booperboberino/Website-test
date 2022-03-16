import { Component, OnInit } from '@angular/core';
import { CowService } from '../cow.service';
import { Cow } from '../Cow';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})

export class AnimalsComponent implements OnInit {

  cows!:Cow[]
  selectedCow!:Cow

  constructor(private cowService: CowService) { }
  
  ngOnInit(): void {
    this.getCows();
  }

  getCows(): void{
    this.cowService.getCows()
        .subscribe(cows => this.cows=cows);
  }

  onSelect(cow:Cow): void {
    this.selectedCow=cow;
  }
}
