import React, { useState } from "react";
import { Player } from "./Player";
import { PlayerDetail } from "./PlayerDetail";
import { Stack } from "react-bootstrap";

export const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 0,
      name: "amine",
      level: 6,
      rank: 20,
      KDratio: 123,
      win: 300,
      rate: 2,
    },
    {
      id: 1,
      name: "bilal",
      level: 4,
      rank: 21,
      KDratio: 123,
      win: 50,
      rate: 6,
    },
  ]);

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        {players.map((player) => (
          <PlayerDetail player={player} />
        ))}
      </Stack>
    </>
  );
};
