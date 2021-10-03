export interface Weapon {
  team: string;
  weapon: string;
  has_ranging: boolean;
  ranging_options: Array<number>;
  filenames: Array<FileOption>
}

export interface FileOption {
  range: number | null;
  filename: string;
}

