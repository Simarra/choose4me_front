import { Component, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { StackConfig, DragEvent, ThrowEvent, SwingStackDirective, SwingCardDirective, Direction, Stack, Card } from 'ionic-swing';
import 'hammerjs';
import { RestApiService } from '../services/rest-api.service'

@Component({
  selector: 'swipe-page',
  templateUrl: 'swipe-page.page.html',
  styleUrls: ['swipe-page.page.scss']
})
export class SwipePage implements OnInit {


  // Propositions showing
  Proposition: any = [];

  // Stack cards
  stackConfig: StackConfig;

  // @ViewChild('itemsSwingStack', { read: SwingStackDirective }) swingStack: SwingStackDirective;
  // @ViewChildren('itemsSwingCards', { read: SwingCardDirective }) swingCards: QueryList<SwingCardDirective>;
  @ViewChild('myswing1', { read: SwingStackDirective }) swingStack: SwingStackDirective;
  @ViewChildren('mycards1', { read: SwingCardDirective }) swingCards: QueryList<SwingCardDirective>;
  // @ViewChild('myswing1') swingStack: SwingStackComponent;
  // @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;


  constructor(
    public restApi: RestApiService
  ) { }

  // get propositions list
  ngOnInit() {
    this.loadPropositions()
  }

  loadPropositions() {
    return this.restApi.getPropositions().subscribe((data: {}) => { this.Proposition = data; })
  }


}