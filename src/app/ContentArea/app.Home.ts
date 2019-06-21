import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'Home',
  templateUrl: './Home.html',
  styleUrls: ['./Home.scss']
})
export class HomeComponent {

  faPhone = faPhone;
  faEnvelope= faEnvelope;
  faCalendarAlt = faCalendarAlt;

  public constructor(private titleService: Title, private meta: Meta) {
       this.titleService.setTitle( "" );
       this.meta.updateTag({ name: 'description', content: '' });
       this.meta.updateTag({ name: 'keywords', content: '' });
  }
}
