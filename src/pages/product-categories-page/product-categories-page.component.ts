import { Component, HostBinding } from '@angular/core';
import { PresentationItemCardPrimaryComponent } from '../../components/presentation-item-card-primary/presentation-item-card-primary.component';
import { PresentationCardPrimaryComponent } from "../../components/presentation-card-primary/presentation-card-primary.component";

@Component({
  selector: 'app-product-categories-page',
  imports: [PresentationCardPrimaryComponent],
  templateUrl: './product-categories-page.component.html',
  styleUrl: './product-categories-page.component.css',
})
export class ProductCategoriesPageComponent {
  @HostBinding('class') class = 'flex-1 flex flex-col min-w-0 gap-4';
  itemsCard: { title: string; content: string; iconName: string }[] = [
    {
      title: 'Agrupe sus productos en categorías.',
      content: 'Ayude a sus clientes a encontrar sus productos más rápido.',
      iconName: 'package_2',
    },
  ];
}
