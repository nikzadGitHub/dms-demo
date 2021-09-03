import { Component, OnInit } from '@angular/core';
import { SociService } from '../soci.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public sociService: SociService) { }

  ngOnInit(): void {
    this.sociService.getAll(1,1).subscribe(data => {
      console.log(data);
    })
  }

}
