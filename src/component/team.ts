export interface Team {
  id: Number;
  win: Boolean;
  objectives: Objectives;
}

interface Objectives {
  baron: { first: Boolean; kills: Number };
  champion: { first: Boolean; kills: Number };
  dragon: { first: Boolean; kills: Number };
  horde: { first: Boolean; kills: Number };
  inhibitor: { first: Boolean; kills: Number };
  riftHerald: { first: Boolean; kills: Number };
  tower: { first: Boolean; kills: Number };
}
