import {Weapon} from "../app/interfaces";

export const fixtures: Fixtures = {
  weapons: [
    {
      team: "US",
      weapon: "M3_MAAWS_HEAT",
      has_ranging: true,
      ranging_options: [50, 200, 300, 400, 500, 600, 700],
      filenames: [
        {
          range: 50,
          filename: "M3_MAAWS_HEAT_50.jpg",
        },
        {
          range: 200,
          filename: "M3_MAAWS_HEAT_200.jpg",
        },
        {
          range: 300,
          filename: "M3_MAAWS_HEAT_300.jpg",
        },
        {
          range: 400,
          filename: "M3_MAAWS_HEAT_400.jpg",
        },
        {
          range: 500,
          filename: "M3_MAAWS_HEAT_500.jpg",
        },
        {
          range: 600,
          filename: "M3_MAAWS_HEAT_600.jpg",
        },
        {
          range: 700,
          filename: "M3_MAAWS_HEAT_700.jpg",
        }
      ]
    },
    {
      team: "US",
      weapon: "M3_MAAWS_TANDEM",
      has_ranging: true,
      ranging_options: [50, 200, 300, 400, 500],
      filenames: [
        {
          range: 50,
          filename: "M3_MAAWS_TANDEM_50.jpg",
        },
        {
          range: 200,
          filename: "M3_MAAWS_HEAT_200.jpg",
        },
        {
          range: 300,
          filename: "M3_MAAWS_HEAT_300.jpg",
        },
        {
          range: 400,
          filename: "M3_MAAWS_HEAT_400.jpg",
        },
        {
          range: 500,
          filename: "M3_MAAWS_HEAT_500.jpg",
        },
        {
          range: 600,
          filename: "M3_MAAWS_HEAT_600.jpg",
        },
        {
          range: 700,
          filename: "M3_MAAWS_HEAT_700.jpg",
        }
      ]
    },
    {
      team: "RU",
      weapon: "RPG-7V2",
      has_ranging: false,
      ranging_options: [],
      filenames: [
        {
          range: null,
          filename: "RPG-7V2.jpg",
        }
      ]
    },
    {
      team: "RU",
      weapon: "RPG_28_TANDEM",
      has_ranging: false,
      ranging_options: [],
      filenames: [
        {
          range: null,
          filename: "RPG_28_TANDEM.jpg",
        }
      ]
    },
    {
      team: "MILITIA",
      weapon: "RPG_29_TANDEM",
      has_ranging: false,
      ranging_options: [],
      filenames: [
        {
          range: null,
          filename: "RPG_29_TANDEM.webp",
        }
      ]
    }
  ]
};

export interface Fixtures {
  weapons: Array<Weapon>;
}
