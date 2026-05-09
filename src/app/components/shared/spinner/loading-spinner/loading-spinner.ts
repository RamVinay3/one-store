import { Component, inject } from '@angular/core';
import { Loading } from '../../../../services/loading/loading';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  imports: [AsyncPipe],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css',
})
export class LoadingSpinner {
  public loadingService=inject(Loading);
  loading$=this.loadingService.loading$;
}
