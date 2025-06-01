import { Component, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bar-voucher-number-date',
  imports: [FormsModule],
  templateUrl: './bar-voucher-number-date.component.html',
  styleUrl: './bar-voucher-number-date.component.css',
})
export class BarVoucherNumberDateComponent {
  @HostBinding('class') class = 'w-full';
  //valor seleccionado
  selectedVoucher: string = '1';
  //funcion que detecta los cambios en el select
  isDisabled(): boolean {
    return this.selectedVoucher === '1';
  }

  onChange(value: any) {
    this.selectedVoucher = value;
  }
}
