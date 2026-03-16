import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingPanel } from './branding-panel';

describe('BrandingPanel', () => {
  let component: BrandingPanel;
  let fixture: ComponentFixture<BrandingPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandingPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
