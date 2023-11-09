import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftPreviewCardComponent } from './nft-preview-card.component';

describe('NftPreviewCardComponent', () => {
  let component: NftPreviewCardComponent;
  let fixture: ComponentFixture<NftPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftPreviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
