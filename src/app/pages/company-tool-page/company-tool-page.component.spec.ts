import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyToolPageComponent } from './company-tool-page.component';

describe('CompanyToolPageComponent', () => {
  let component: CompanyToolPageComponent;
  let fixture: ComponentFixture<CompanyToolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyToolPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyToolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
