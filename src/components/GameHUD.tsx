import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface GameHUDProps {
  health: number;
  score: number;
  isLocked: boolean;
  isDead: boolean;
}

export const GameHUD = ({ health, score, isLocked, isDead }: GameHUDProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Crosshair */}
      {isLocked && !isDead && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-8 h-8">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 border-2 border-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      )}

      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded px-6 py-3 pointer-events-auto">
          <div className="text-sm text-muted-foreground mb-1">HEALTH</div>
          <div className="flex items-center gap-3">
            <Progress 
              value={health} 
              className={cn(
                "w-48 h-3",
                health > 50 ? "[&>div]:bg-[hsl(var(--game-health))]" : "[&>div]:bg-destructive"
              )}
            />
            <span className="text-2xl font-bold tabular-nums">{health}</span>
          </div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-border rounded px-6 py-3 pointer-events-auto">
          <div className="text-sm text-muted-foreground mb-1">SCORE</div>
          <div className="text-3xl font-bold text-primary tabular-nums">{score}</div>
        </div>
      </div>

      {/* Instructions */}
      {!isLocked && !isDead && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="bg-card/90 backdrop-blur-md border-2 border-primary rounded-lg px-12 py-8 pointer-events-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 animate-pulse">
              CLICK TO START
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p className="text-lg">WASD - Move</p>
              <p className="text-lg">Mouse - Look Around</p>
              <p className="text-lg">Left Click - Shoot</p>
            </div>
          </div>
        </div>
      )}

      {/* Death screen */}
      {isDead && (
        <div className="absolute inset-0 bg-destructive/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-destructive mb-4 animate-pulse">
              ELIMINATED
            </h2>
            <p className="text-2xl text-foreground">Respawning...</p>
          </div>
        </div>
      )}

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,20,0.5)_100%)]" />
    </div>
  );
};
