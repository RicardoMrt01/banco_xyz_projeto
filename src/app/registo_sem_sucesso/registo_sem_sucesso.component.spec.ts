import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoSemSucessoComponent } from './registo_sem_sucesso.component';

describe('RegistoSemSucessoComponent', () => {
  let component: RegistoSemSucessoComponent;
  let fixture: ComponentFixture<RegistoSemSucessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistoSemSucessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoSemSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
