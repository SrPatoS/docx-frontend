import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateListComponent } from './paginate-list.component';

describe('PaginateListComponent', () => {
  let component: PaginateListComponent;
  let fixture: ComponentFixture<PaginateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginateListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
