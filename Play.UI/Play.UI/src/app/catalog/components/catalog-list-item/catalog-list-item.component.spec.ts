import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemComponent } from './catalog-list-item.component';

describe('CatalogListItemComponent', () => {
  let component: CatalogListItemComponent;
  let fixture: ComponentFixture<CatalogListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
