import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingcarPage } from './shoppingcar.page';

describe('ShoppingcarPage', () => {
  let component: ShoppingcarPage;
  let fixture: ComponentFixture<ShoppingcarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
