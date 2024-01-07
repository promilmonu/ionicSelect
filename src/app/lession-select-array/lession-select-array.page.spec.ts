import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LessionSelectArrayPage } from './lession-select-array.page';

describe('LessionSelectArrayPage', () => {
  let component: LessionSelectArrayPage;
  let fixture: ComponentFixture<LessionSelectArrayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LessionSelectArrayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
