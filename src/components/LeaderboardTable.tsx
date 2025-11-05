import { LeaderboardPlayer } from "@/data/leaderboardData";
import { PlayerRow } from "./PlayerRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaderboardTableProps {
  players: LeaderboardPlayer[];
}

export const LeaderboardTable = ({ players }: LeaderboardTableProps) => {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-primary/30 bg-card/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,122,255,0.2)]">
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-primary/30 bg-primary/5 hover:bg-primary/5">
            <TableHead className="text-accent font-bold text-center w-20">RANK</TableHead>
            <TableHead className="text-accent font-bold text-center w-20">AVATAR</TableHead>
            <TableHead className="text-accent font-bold">USERNAME</TableHead>
            <TableHead className="text-accent font-bold text-center">LEVEL</TableHead>
            <TableHead className="text-accent font-bold text-center">KILLS</TableHead>
            <TableHead className="text-accent font-bold text-center">DEATHS</TableHead>
            <TableHead className="text-accent font-bold text-center">K/D</TableHead>
            <TableHead className="text-accent font-bold text-center">SCORE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <PlayerRow key={player.rank} player={player} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
