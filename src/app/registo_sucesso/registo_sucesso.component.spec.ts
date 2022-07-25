import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoSucessoComponent } from './registo_sucesso.component';

describe('RegistoSucessoComponent', () => {
  let component: RegistoSucessoComponent;
  let fixture: ComponentFixture<RegistoSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistoSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
