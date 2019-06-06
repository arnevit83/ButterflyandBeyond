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
       this.titleService.setTitle( "" );
       this.meta.updateTag({ name: 'description', content: '' });
       this.meta.updateTag({ name: 'keywords', content: '' });
  }
}
