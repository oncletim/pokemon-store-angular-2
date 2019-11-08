import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDescriptionComponent } from './pokemon-description.component';

describe('PokemonDescriptionComponent', () => {
  let component: PokemonDescriptionComponent;
  let fixture: ComponentFixture<PokemonDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
