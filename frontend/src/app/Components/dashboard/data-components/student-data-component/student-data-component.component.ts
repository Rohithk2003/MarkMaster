import {SelectionModel} from '@angular/cdk/collections';
import {DecimalPipe, TitleCasePipe} from '@angular/common';
import {Component, TrackByFunction, computed, effect, signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {lucideArrowUpDown, lucideChevronDown, lucideMoreHorizontal} from '@ng-icons/lucide';
import {HlmButtonModule} from '@spartan-ng/ui-button-helm';
import {HlmCheckboxCheckIconComponent, HlmCheckboxComponent} from '@spartan-ng/ui-checkbox-helm';
import {HlmIconComponent, provideIcons} from '@spartan-ng/ui-icon-helm';
import {HlmInputDirective} from '@spartan-ng/ui-input-helm';
import {BrnMenuTriggerDirective} from '@spartan-ng/ui-menu-brain';
import {HlmMenuModule} from '@spartan-ng/ui-menu-helm';
import {BrnTableModule, PaginatorState, useBrnColumnManager} from '@spartan-ng/ui-table-brain';
import {HlmTableModule} from '@spartan-ng/ui-table-helm';
import {BrnSelectModule} from '@spartan-ng/ui-select-brain';
import {HlmSelectModule} from '@spartan-ng/ui-select-helm';
import {debounceTime, map} from 'rxjs';

export type Payment = {
  id: string;
  amount: number;
  name: string;
  email: string;
};

const PAYMENT_DATA: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    name: 'success',
    email: 'ken99@yahoo.com',
  },
];

@Component({
  selector: 'app-student-data-component',
  standalone: true,
  imports: [
    FormsModule,

    BrnMenuTriggerDirective,
    HlmMenuModule,

    BrnTableModule,
    HlmTableModule,

    HlmButtonModule,

    DecimalPipe,
    TitleCasePipe,
    HlmIconComponent,
    HlmInputDirective,

    HlmCheckboxCheckIconComponent,
    HlmCheckboxComponent,

    BrnSelectModule,
    HlmSelectModule,
  ],
  providers: [provideIcons({lucideChevronDown, lucideMoreHorizontal, lucideArrowUpDown})],
  host: {
    class: 'w-full',
  },
  templateUrl: 'student-data-component.component.html',
})
export class StudentDataComponent {
  protected readonly _rawFilterInput = signal('');
  protected readonly _emailFilter = signal('');
  private readonly _debouncedFilter = toSignal(toObservable(this._rawFilterInput).pipe(debounceTime(300)));

  private readonly _displayedIndices = signal({start: 0, end: 0});
  protected readonly _availablePageSizes = [5, 10, 20, 10000];
  protected readonly _pageSize = signal(this._availablePageSizes[0]);

  private readonly _selectionModel = new SelectionModel<Payment>(true);
  protected readonly _isPaymentSelected = (payment: Payment) => this._selectionModel.isSelected(payment);
  protected readonly _selected = toSignal(this._selectionModel.changed.pipe(map((change) => change.source.selected)), {
    initialValue: [],
  });

  protected readonly _brnColumnManager = useBrnColumnManager({
    name: {visible: true, label: 'name'},
    email: {visible: true, label: 'Email'},
    amount: {visible: true, label: 'Amount ($)'},
  });
  protected readonly _allDisplayedColumns = computed(() => [
    'select',
    ...this._brnColumnManager.displayedColumns(),
    'actions',
  ]);

  private readonly _payments = signal(PAYMENT_DATA);
  private readonly _filteredPayments = computed(() => {
    const emailFilter = this._emailFilter()?.trim()?.toLowerCase();
    if (emailFilter && emailFilter.length > 0) {
      return this._payments().filter((u) => u.email.toLowerCase().includes(emailFilter));
    }
    return this._payments();
  });
  private readonly _emailSort = signal<'ASC' | 'DESC' | null>(null);
  protected readonly _filteredSortedPaginatedPayments = computed(() => {
    const sort = this._emailSort();
    const start = this._displayedIndices().start;
    const end = this._displayedIndices().end + 1;
    const payments = this._filteredPayments();
    if (!sort) {
      return payments.slice(start, end);
    }
    return [...payments]
      .sort((p1, p2) => (sort === 'ASC' ? 1 : -1) * p1.email.localeCompare(p2.email))
      .slice(start, end);
  });
  protected readonly _allFilteredPaginatedPaymentsSelected = computed(() =>
    this._filteredSortedPaginatedPayments().every((payment) => this._selected().includes(payment)),
  );
  protected readonly _checkboxState = computed(() => {
    const noneSelected = this._selected().length === 0;
    const allSelectedOrIndeterminate = this._allFilteredPaginatedPaymentsSelected() ? true : 'indeterminate';
    return noneSelected ? false : allSelectedOrIndeterminate;
  });

  protected readonly _trackBy: TrackByFunction<Payment> = (_: number, p: Payment) => p.id;
  protected readonly _totalElements = computed(() => this._filteredPayments().length);
  protected readonly _onStateChange = ({startIndex, endIndex}: PaginatorState) =>
    this._displayedIndices.set({start: startIndex, end: endIndex});

  constructor() {
    effect(() => this._emailFilter.set(this._debouncedFilter() ?? ''), {allowSignalWrites: true});
  }

  protected togglePayment(payment: Payment) {
    this._selectionModel.toggle(payment);
  }

  protected handleHeaderCheckboxChange() {
    const previousCbState = this._checkboxState();
    if (previousCbState === 'indeterminate' || !previousCbState) {
      this._selectionModel.select(...this._filteredSortedPaginatedPayments());
    } else {
      this._selectionModel.deselect(...this._filteredSortedPaginatedPayments());
    }
  }

  protected handleEmailSortChange() {
    const sort = this._emailSort();
    if (sort === 'ASC') {
      this._emailSort.set('DESC');
    } else if (sort === 'DESC') {
      this._emailSort.set(null);
    } else {
      this._emailSort.set('ASC');
    }
  }
}
