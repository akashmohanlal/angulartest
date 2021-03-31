import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemListComponent } from './message-item-list.component';

describe('MessageItemListComponent', () => {
  let component: MessageItemListComponent;
  let fixture: ComponentFixture<MessageItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
