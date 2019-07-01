import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'About',
  templateUrl: './About.html',
  styleUrls: ['./About.scss']
})
export class AboutComponent {

  faCalendarAlt = faCalendarAlt;
  public constructor(private titleService: Title, private meta: Meta) {
       this.titleService.setTitle( "" );
       this.meta.updateTag({ name: 'description', content: '' });
       this.meta.updateTag({ name: 'keywords', content: '' });
  }
}
