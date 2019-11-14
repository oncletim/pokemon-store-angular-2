import { environment } from 'src/environments/environment';

export class PokemonDescription {
  description: string;
  version: string;

  constructor(description: string, version: string) {
    this.description = description;
    this.version = version;
  }
}

export const getDescriptions = (entries: any[]): PokemonDescription[] => {
  return entries
    .filter(entry => entry.language.name === environment.language)
    .map(
      entry =>
        new PokemonDescription(
          entry['flavor_text'],
          entry.version.name
            .replace('-', ' ')
            .charAt(0)
            .toUpperCase() + entry.version.name.substr(1).replace('-', ' ')
        )
    );
};
