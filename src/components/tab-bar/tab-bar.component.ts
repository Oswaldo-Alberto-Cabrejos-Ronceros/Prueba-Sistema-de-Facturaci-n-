import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css',
})
export class TabBarComponent implements AfterViewInit {
  @Input() options: { title: string; to: string }[] = [];

  //indicadores
  indicatorLeft = 0;
  indicatorWidth = 0;

  //referenciamos los tabs
  @ViewChildren('tab') tabElements!: QueryList<ElementRef>;

  //inyectamos router para subcribirnos a los eventos del router
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //para que angular espera hasta terminar rendizado
        requestAnimationFrame(() => this.updateIndicator());
      }
    });
  }

  //para saber que tab esta activo al inicio
  ngAfterViewInit() {
    requestAnimationFrame(() => this.updateIndicator());
  }
  //para actualizar indicadores
  updateIndicator() {
    const tabs = this.tabElements.toArray();
    const activeTab = tabs.find(tab =>
      tab.nativeElement.classList.contains('active')
    );

    if (activeTab) {
      const el = activeTab.nativeElement;
      this.indicatorLeft = el.offsetLeft;
      this.indicatorWidth = el.offsetWidth;
    }
  }
}
