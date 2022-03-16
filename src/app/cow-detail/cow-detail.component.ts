import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cow } from '../Cow';

import { CowService } from '../cow.service';


@Component({
  selector: 'app-cow-detail',
  templateUrl: './cow-detail.component.html',
  styleUrls: ['./cow-detail.component.scss']
})
export class CowDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private cowService: CowService, private location: Location) { }

  ngOnInit(): void {
    this.getCow();
  }

  getCow(): void {
    const id= this.route.snapshot.paramMap.get('id') || "";
    this.cowService.getCow(parseInt(id))
      .subscribe(cow => this.cow = cow);
  }

  @Input() cow:Cow | undefined;


}
