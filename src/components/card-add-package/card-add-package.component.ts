import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
import { ButtonIconLabelTerciaryComponent } from "../button-icon-label-terciary/button-icon-label-terciary.component";
import { ButtonIconLabelQuaternaryComponent } from "../button-icon-label-quaternary/button-icon-label-quaternary.component";
import { InputTerciaryComponent } from "../input-terciary/input-terciary.component";
import { SelectInputSetTerciaryComponent } from "../select-input-set-terciary/select-input-set-terciary.component";
import { SelectTerciaryComponent } from "../select-terciary/select-terciary.component";
import { InputFileSecondaryComponent } from "../input-file-secondary/input-file-secondary.component";
import { BarSearchAddProductComponent } from "../bar-search-add-product/bar-search-add-product.component";
import { CommonModule } from '@angular/common';
import { SwitchPrimaryComponent } from "../switch-primary/switch-primary.component";

@Component({
  selector: 'app-card-add-package',
  imports: [CommonModule, ButtonIconComponent, ButtonIconLabelTerciaryComponent, ButtonIconLabelQuaternaryComponent, InputTerciaryComponent, SelectInputSetTerciaryComponent, SelectTerciaryComponent, InputFileSecondaryComponent, BarSearchAddProductComponent, SwitchPrimaryComponent],
  templateUrl: './card-add-package.component.html',
  styleUrl: './card-add-package.component.css'
})
export class CardAddPackageComponent {
  @HostBinding('class') class =
    'w-full max-w-2xl min-w-lg max-h-[90vh] p-8 rounded-3xl gap-4 flex flex-col bg-white dark:bg-neutral-800 relative';
  @Output() close = new EventEmitter<void>();
  onClose = () => {
    this.close.emit();
  };
  //bandera de opciones avanzadas
  advancedsOptions: boolean = false;

  //para manejar opciones avanzadas
  handleAdvancedOptions() {
    this.advancedsOptions = !this.advancedsOptions;
  }

    //options de tipo moneda
  optionsTypeExchange: { label: string; value: string | number }[] = [
    {
      label: 'S/',
      value: 1,
    },
    {
      label: '$',
      value: 2,
    },
  ];

  //options impuesto
  optionsTax: { label: string; value: string | number }[] = [
    {
      label: 'IGV (18.00%)',
      value: 1,
    },
    {
      label: 'INAFECTO (0.00%)',
      value: 2,
    },
  ];

  //options unidad
  optionsUnit: { label: string; value: string | number }[] = [
    {
      label: '(NIU) UNIDAD',
      value: 1,
    },
    {
      label: '(ZZ) UNIDAD',
      value: 2,
    },
  ];

    optionsCategory: { label: string; value: string | number }[] = [
    {
      label: 'Ninguna',
      value: 1,
    },
    {
      label: 'Aguas',
      value: 2,
    },
  ];
    //options impuesto ISC
  optionsISC: { label: string; value: string | number }[] = [
    {
      label: 'Al valor',
      value: 1,
    },
    {
      label: 'Monto Fijo',
      value: 2,
    },
  ];

}
