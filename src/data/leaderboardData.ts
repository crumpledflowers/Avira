export interface LeaderboardPlayer {
  rank: number;
  username: string;
  avatar?: string;
  level: number;
  kills: number;
  deaths: number;
  score: number;
}

export const leaderboardData: LeaderboardPlayer[] = [
  { rank: 1, username: "ProGamer2024", level: 50, kills: 2847, deaths: 856, score: 9999 },
  { rank: 2, username: "ShadowNinja", level: 42, kills: 2543, deaths: 923, score: 8750 },
  { rank: 3, username: "BlitzKrieg", level: 38, kills: 2234, deaths: 891, score: 8200 },
  { rank: 4, username: "FrostByte", level: 35, kills: 2156, deaths: 945, score: 7890 },
  { rank: 5, username: "CyberHawk", level: 33, kills: 2087, deaths: 978, score: 7654 },
  { rank: 6, username: "ViperStrike", level: 31, kills: 1998, deaths: 1001, score: 7321 },
  { rank: 7, username: "PhantomX", level: 30, kills: 1934, deaths: 1045, score: 7100 },
  { rank: 8, username: "StormRider", level: 29, kills: 1876, deaths: 1089, score: 6890 },
  { rank: 9, username: "NeonBlaze", level: 28, kills: 1823, deaths: 1123, score: 6543 },
  { rank: 10, username: "IronFist", level: 27, kills: 1765, deaths: 1156, score: 6321 },
  { rank: 11, username: "ThunderBolt", level: 26, kills: 1712, deaths: 1189, score: 6120 },
  { rank: 12, username: "DarkMatter", level: 25, kills: 1654, deaths: 1234, score: 5980 },
  { rank: 13, username: "LaserBeam", level: 24, kills: 1598, deaths: 1278, score: 5765 },
  { rank: 14, username: "QuantumLeap", level: 23, kills: 1543, deaths: 1312, score: 5543 },
  { rank: 15, username: "ArcticWolf", level: 22, kills: 1487, deaths: 1356, score: 5321 },
];
