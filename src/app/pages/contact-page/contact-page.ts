import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  templateUrl: './contact-page.html',
})
export default class ContactPage implements OnInit {
  private tittle = inject(Title);
  private meta = inject(Meta);

  public ngOnInit(): void {
    this.tittle.setTitle('Contact :)');
    this.meta.updateTag({ name: 'description', content: 'Este es el contact page' });
    this.meta.updateTag({ name: 'og:title', content: 'Este es el contact page' });
    this.meta.updateTag({ name: 'keywords', content: 'Mis chavales aqui mateo 777' });
  }
}
