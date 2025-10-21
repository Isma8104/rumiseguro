import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralsInfoComponent } from './centrals-info.component';

describe('CentralsInfoComponent', () => {
  let component: CentralsInfoComponent;
  let fixture: ComponentFixture<CentralsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
