import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemDetailComponent } from './catalog-list-item-detail.component';

describe('CatalogListItemDetailComponent', () => {
  let component: CatalogListItemDetailComponent;
  let fixture: ComponentFixture<CatalogListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
