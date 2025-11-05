import { LeaderboardPlayer } from "@/data/leaderboardData";
import { Trophy } from "lucide-react";

interface PlayerRowProps {
  player: LeaderboardPlayer;
}

export const PlayerRow = ({ player }: PlayerRowProps) => {
  const kd = (player.kills / player.deaths).toFixed(2);
  
  const getBorderClass = () => {
    if (player.rank === 1) return "border-l-4 border-l-yellow-400 bg-yellow-400/5";
    if (player.rank === 2) return "border-l-4 border-l-gray-300 bg-gray-300/5";
    if (player.rank === 3) return "border-l-4 border-l-orange-600 bg-orange-600/5";
    return "";
  };

  const getRankDisplay = () => {
    if (player.rank === 1) {
      return (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/20 border-2 border-yellow-400">
          <Trophy className="w-5 h-5 text-yellow-400" />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/50 font-bold text-foreground">
        {player.rank}
      </div>
    );
  };

  return (
    <tr
      className={`group hover:bg-primary/10 transition-all duration-300 border-b border-primary/20 animate-fade-in ${getBorderClass()}`}
      style={{ animationDelay: `${player.rank * 50}ms` }}
    >
      <td className="p-4">{getRankDisplay()}</td>
      <td className="p-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/30 text-2xl group-hover:scale-110 transition-transform">
          👤
        </div>
      </td>
      <td className="p-4">
        <span className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">
          {player.username}
        </span>
      </td>
      <td className="p-4 text-center">
        <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-foreground font-semibold">
          {player.level}
        </span>
      </td>
      <td className="p-4 text-center text-green-400 font-bold">{player.kills}</td>
      <td className="p-4 text-center text-red-400 font-bold">{player.deaths}</td>
      <td className="p-4 text-center text-accent font-bold">{kd}</td>
      <td className="p-4 text-center text-accent font-bold text-lg">{player.score.toLocaleString()}</td>
    </tr>
  );
};
