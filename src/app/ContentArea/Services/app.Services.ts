import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'Services',
  templateUrl: './Services.html',
  styleUrls: ['./Services.scss']
})
export class ServicesComponent {


  public constructor(private titleService: Title, private meta: Meta) {
       this.titleService.setTitle( "Weekend retreats, yoga classes & online coaching for childless women" );
       this.meta.updateTag({ name: 'description', content: 'Personal coach and yoga teacher Sophia Andeh offers childless women online coaching, online yoga classes, private yoga classes in Oxford, and nurturing weekend yoga retreats at the Abbey, Sutton Courtenay, Oxford. Work with Sophia to recover from the grief of childlessness and rediscover a sense of joy and purpose.' });
       this.meta.updateTag({ name: 'keywords', content: 'Online coaching,Online yoga classes,One to one yoga classes,Online coaching,Yoga oxford,Yoga classes Oxford,Childless women,Weekend yoga retreats,Weekend retreat,Private yoga classes' });
  }
}
