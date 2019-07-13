import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'Privacy',
  templateUrl: './Privacy.html',
  styleUrls: ['./Privacy.scss']
})
export class PrivacyComponent {

 
  public constructor(private titleService: Title, private meta: Meta) {
       this.titleService.setTitle( "Data Privacy" );
      //  this.meta.updateTag({ name: 'description', content: 'Personal coach and yoga teacher Sophia Andeh offers weekend yoga retreats, online coaching, and private yoga classes in Oxford for women childless not by choice. Work with Sophia to regain your confidence and motivation, explore new perspectives and create a rewarding life, living with optimism and joy. ' });
      //  this.meta.updateTag({ name: 'keywords', content: 'Yoga teacher,Meditation teacher,Online coaching,Life unexpected,Childless women,How to cope with childless not by choice,Being childless not by choice,Weekend retreat,Weekend yoga retreats,Online yoga classes,Private yoga classes,Yoga classes Oxford' });
  }
}
