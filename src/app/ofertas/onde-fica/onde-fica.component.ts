import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pu-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Id da Rota Pai:",this.route.parent.snapshot.params['id'])
    //Recuperando parâmetros da rota pai.
  }

}
