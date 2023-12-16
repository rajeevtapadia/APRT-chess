import { PieceColor } from "../validate";
import { calcDist } from "../mathFunctions";

// `k`ing move is valid iff Math.floor(dist(to, from)) === 1
// kill move not yet implemented

export function validateKingMove(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
): boolean {
  const distance = Math.floor(calcDist(fromX, fromY, toX, toY));
  console.log(distance);
  if (distance === 1) 
    return true;
  else return false;
}
