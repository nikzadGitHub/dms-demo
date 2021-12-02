import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FpsFormService } from '../../../services/fps-form.service';

@Component({
  selector: 'app-fps-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

@Injectable()
export class IndexComponent implements OnInit {

  @Input() fpmList = [];
  
  constructor(public FpsFormService: FpsFormService) { }

  ngOnInit() {
    this.fpmList = this.FpsFormService.getFpsList();
  }

}
