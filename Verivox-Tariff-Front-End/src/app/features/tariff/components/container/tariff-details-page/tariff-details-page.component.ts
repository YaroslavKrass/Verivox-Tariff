import { Component } from '@angular/core';
import { Tariff } from '../../../models/tariffs.model';
import { AbstractDestroyable } from 'src/app/utils/abstract-destroyable';
import { TariffService } from '../../../services/tariff.service';
import { BehaviorSubject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tariff-details-page',
  templateUrl: './tariff-details-page.component.html',
  styleUrls: ['./tariff-details-page.component.scss']
})
export class TariffDetailsPage extends AbstractDestroyable {
  readonly tariffs$ = new BehaviorSubject<Tariff[] | undefined>(undefined);

  constructor(private tariffService: TariffService) {
    super();
  }

  searchTariff(consumption: number) {
    this.tariffService.search(consumption)
      .pipe(
        take(1),
        takeUntil(this.onDestroy$)
      )
      .subscribe(tariffs => this.tariffs$.next(tariffs));
  }
}
