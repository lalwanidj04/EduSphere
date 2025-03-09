export interface CrosswordEntry {
    answer: string;
    hint: string;
    startx: number;
    starty: number;
    orientation: "across" | "down";
    position: number;
  }
  
  export interface CrosswordLevel {
    level: number;
    grid: (string | null)[][];
    solution: string[][];
    entries: CrosswordEntry[];
  }