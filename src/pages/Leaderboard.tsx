import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Trophy, Award, Gift } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Player {
  rank: number;
  username: string;
  score: number;
  level: number;
  weapon?: string;
}

const topPlayers: Player[] = [
  { rank: 2, username: "ShadowNinja", score: 8750, level: 42, weapon: "Rifle" },
  { rank: 1, username: "ProGamer2024", score: 9999, level: 50, weapon: "Sniper" },
  { rank: 3, username: "BlitzKrieg", score: 8200, level: 38, weapon: "SMG" },
];

const leaderboardPlayers: Player[] = [
  { rank: 1, username: "ProGamer2024", score: 9999, level: 50 },
  { rank: 2, username: "ShadowNinja", score: 8750, level: 42 },
  { rank: 3, username: "BlitzKrieg", score: 8200, level: 38 },
  { rank: 4, username: "FrostByte", score: 7890, level: 35 },
  { rank: 5, username: "CyberHawk", score: 7654, level: 33 },
  { rank: 6, username: "ViperStrike", score: 7321, level: 31 },
  { rank: 7, username: "PhantomX", score: 7100, level: 30 },
  { rank: 8, username: "StormRider", score: 6890, level: 29 },
  { rank: 9, username: "NeonBlaze", score: 6543, level: 28 },
  { rank: 10, username: "IronFist", score: 6321, level: 27 },
  { rank: 11, username: "ThunderBolt", score: 6120, level: 26 },
  { rank: 12, username: "DarkMatter", score: 5980, level: 25 },
  { rank: 13, username: "LaserBeam", score: 5765, level: 24 },
  { rank: 14, username: "QuantumLeap", score: 5543, level: 23 },
  { rank: 15, username: "ArcticWolf", score: 5321, level: 22 },
];

const Leaderboard = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 40, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menuItems = ["TODAY", "CLANS", "MARKET", "AVIRA TV LIVE", "NEWS", "TERMS"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001a4d] via-[#002966] to-[#0047b3] text-foreground overflow-auto">
      {/* Top Navigation */}
      <nav className="border-b border-primary/30 backdrop-blur-sm bg-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="text-foreground font-bold text-sm hover:text-accent transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-accent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              TOP PLAYERS TODAY
            </h1>

            {/* Top 3 Players */}
            <div className="grid md:grid-cols-3 gap-6 items-end">
              {topPlayers.map((player, index) => (
                <Card
                  key={player.rank}
                  className={`relative bg-card/80 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] ${
                    player.rank === 1
                      ? "md:order-2 border-accent shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                      : player.rank === 2
                      ? "md:order-1 border-primary/50"
                      : "md:order-3 border-primary/50"
                  }`}
                >
                  <div className="p-6 text-center">
                    {/* Rank Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          player.rank === 1
                            ? "bg-accent text-accent-foreground shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                            : player.rank === 2
                            ? "bg-muted text-foreground"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {player.rank === 1 ? <Trophy className="w-6 h-6" /> : `#${player.rank}`}
                      </div>
                    </div>

                    {/* Avatar */}
                    <div className="mt-6 mb-4">
                      <div
                        className={`w-32 h-32 mx-auto rounded-lg ${
                          player.rank === 1
                            ? "bg-gradient-to-br from-accent/30 to-accent/10"
                            : "bg-gradient-to-br from-primary/30 to-primary/10"
                        } flex items-center justify-center border-2 ${
                          player.rank === 1 ? "border-accent/50" : "border-primary/50"
                        }`}
                      >
                        <div className="text-6xl">👤</div>
                      </div>
                    </div>

                    {/* Player Info */}
                    <h3 className="text-xl font-bold text-foreground mb-2">{player.username}</h3>
                    <p className="text-muted-foreground mb-1">Level {player.level}</p>
                    <div className="flex items-center justify-center gap-2 text-accent font-bold">
                      <Star className="w-5 h-5 fill-accent" />
                      <span>{player.score.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">🔫 {player.weapon}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Awards Section */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/50">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-accent flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    AWARDS OF THE DAY
                  </h2>
                  <div className="text-foreground font-bold">
                    Reset in{" "}
                    <span className="text-accent">
                      {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-2 border-accent/30 hover:border-accent transition-all hover:scale-110 shadow-[0_0_15px_rgba(0,122,255,0.3)]"
                    >
                      <Gift className="w-8 h-8 text-accent" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side Leaderboard Panel */}
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 h-fit sticky top-4">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-center text-accent mb-6">LEADERBOARD</h2>
              <div className="space-y-2 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                {leaderboardPlayers.map((player) => (
                  <div
                    key={player.rank}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {player.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-foreground truncate">{player.username}</p>
                      <div className="flex items-center gap-1 text-accent text-sm">
                        <Star className="w-4 h-4 fill-accent" />
                        <span>{player.score.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold shadow-[0_0_10px_rgba(0,122,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,122,255,0.5)] transition-all"
                      onClick={() => setSelectedPlayer(player)}
                    >
                      SHOW
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Player Stats Modal */}
      <Dialog open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
        <DialogContent className="bg-card border-2 border-primary">
          <DialogHeader>
            <DialogTitle className="text-2xl text-accent">Player Stats</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Detailed statistics for {selectedPlayer?.username}
            </DialogDescription>
          </DialogHeader>
          {selectedPlayer && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-lg border border-primary/30">
                  <p className="text-muted-foreground text-sm">Rank</p>
                  <p className="text-2xl font-bold text-accent">#{selectedPlayer.rank}</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/30">
                  <p className="text-muted-foreground text-sm">Level</p>
                  <p className="text-2xl font-bold text-foreground">{selectedPlayer.level}</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/30">
                  <p className="text-muted-foreground text-sm">Score</p>
                  <p className="text-2xl font-bold text-foreground">
                    {selectedPlayer.score.toLocaleString()}
                  </p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/30">
                  <p className="text-muted-foreground text-sm">Wins</p>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.floor(Math.random() * 100)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 26, 77, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--accent));
        }
      `}</style>
    </div>
  );
};

export default Leaderboard;
