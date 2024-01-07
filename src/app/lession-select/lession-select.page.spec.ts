import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessionSelectPage } from './lession-select.page';

describe('LessionSelectPage', () => {
  let component: LessionSelectPage;
  let fixture: ComponentFixture<LessionSelectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LessionSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
