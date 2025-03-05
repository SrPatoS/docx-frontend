import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-paginate-list',
  standalone: false,
  templateUrl: './paginate-list.component.html',
  styleUrl: './paginate-list.component.scss'
})
export class PaginateListComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  length = 50;
  @Input() pageSize = 10;
  @Input() pageIndex = 0;
  @Input() pageSizeOptions = [5, 10, 25];

  @Input() hidePageSize = false;
  @Input() showPageSizeOptions = true;
  @Input() showFirstLastButtons = true;
  @Input() disabled = false;

  dataSource!: MatTableDataSource<any>;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
