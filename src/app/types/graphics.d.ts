interface dialog {
  position: [number, number];
  component: string;
  modifier: string;
}

interface trunk {
  start: number;
  duration: number;
}

interface branch {
  from: [number, number];
  to: [number, number];
}
