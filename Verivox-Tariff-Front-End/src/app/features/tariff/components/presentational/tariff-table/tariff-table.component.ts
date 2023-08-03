import { Component, Input } from '@angular/core';
import { Tariff } from '../../../models/tariffs.model';

@Component({
  selector: 'app-tariff-table',
  templateUrl: './tariff-table.component.html',
  styleUrls: ['./tariff-table.component.scss']
})
export class TariffTableComponent {
  @Input() dataSource!: Tariff[] | null | undefined;

  readonly displayedColumns: string[] = ['tariff', 'annualCost'];

}
