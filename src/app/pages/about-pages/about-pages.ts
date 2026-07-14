import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  templateUrl: './about-pages.html',
})
export default class AboutPages implements OnInit {
  private tittle = inject(Title);
  private meta = inject(Meta);

  public ngOnInit(): void {
    this.tittle.setTitle('About :)');
    this.meta.updateTag({ name: 'description', content: 'Este es el about page' });
    this.meta.updateTag({ name: 'og:title', content: 'Este es el about page' });
    this.meta.updateTag({ name: 'keywords', content: 'Mis chavales aqui mateo 777' });
  }
}
