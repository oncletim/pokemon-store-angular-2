import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { PokemonDescription } from 'src/app/core/models/pokemon-description';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss'],
  animations: [
    trigger('cardState', [
      state(
        'Alpha Sapphire',
        style({ opacity: 0.8, backgroundColor: '#304ffe' })
      ),
      state('Omega Ruby', style({ opacity: 0.8, backgroundColor: '#b71c1c' })),
      state('Y', style({ opacity: 0.8, backgroundColor: '#1e88e5' })),
      state('X', style({ opacity: 0.8, backgroundColor: '#b71c1c' })),
      state('White 2', style({ opacity: 0.8, backgroundColor: '#ffccbc' })),
      state(
        'Black 2',
        style({ opacity: 0.8, backgroundColor: '#263238', color: '#eceff1' })
      ),
      state('White', style({ opacity: 0.8, backgroundColor: '#cfd8dc' })),
      state(
        'black',
        style({ opacity: 0.8, backgroundColor: '#212121', color: '#eceff1' })
      ),
      state('Soulsilver', style({ opacity: 0.8, backgroundColor: '#b0bec5' })),
      state('Heartgold', style({ opacity: 0.8, backgroundColor: '#ff7043' })),
      state(
        'Platinum',
        style({ opacity: 0.8, backgroundColor: '#673ab7', color: '#ede7f6' })
      ),
      state(
        'Diamond',
        style({ opacity: 0.8, backgroundColor: '#1a237e', color: '#e8eaf6' })
      ),
      state('Pearl', style({ opacity: 0.8, backgroundColor: '#b388ff' })),
      state('Firered', style({ opacity: 0.8, backgroundColor: '#ff5722' })),
      state('Leafgreen', style({ opacity: 0.8, backgroundColor: '#9ccc65' })),
      state('Emerald', style({ opacity: 0.8, backgroundColor: '#66bb6a' })),
      state('Ruby', style({ opacity: 0.8, backgroundColor: '#b71c1c' })),
      state(
        'Sapphire',
        style({ opacity: 0.8, backgroundColor: '#1565c0', color: '#e3f2fd' })
      ),
      state('Gold', style({ opacity: 0.8, backgroundColor: '#ffab00' })),
      state('Silver', style({ opacity: 0.8, backgroundColor: '#757575' })),
      state('Crystal', style({ opacity: 0.8, backgroundColor: '#c5cae9' })),
      state('Red', style({ opacity: 0.8, backgroundColor: '#d50000' })),
      state(
        'Blue',
        style({ opacity: 0.8, backgroundColor: '#0d47a1', color: '#e3f2fd' })
      ),
      state('Yellow', style({ opacity: 0.8, backgroundColor: '#fdd835' })),
      transition('* => *', animate('500ms ease-in'))
    ]),
    trigger('descriptionState', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class PokemonDescriptionComponent implements OnInit, OnChanges {
  @Input() descriptions: PokemonDescription[];
  description: PokemonDescription;

  ngOnInit() {
    this.description = this.getDefaultDescription(this.descriptions);
  }

  ngOnChanges() {
    this.description = this.getDefaultDescription(this.descriptions);
  }

  getDefaultDescription(
    descriptions: PokemonDescription[]
  ): PokemonDescription {
    if (descriptions == null || descriptions.length == 0) {
      return null;
    } else {
      return descriptions[0];
    }
  }
}
