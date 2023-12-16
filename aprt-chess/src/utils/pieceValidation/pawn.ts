import { PieceColor } from "../validate";
import { verticalPathCheck } from "../pathChecks/verticalCheck";

// only move by 2 or 1 blocks done
// diagonal kill move pending 
export function validatePawnMove(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  boardState: string[][],
): boolean {
  // if its the pawns first move
  if (fromY === 6) {
    if (
      verticalPathCheck(fromX, fromY, toX, toY, boardState) &&
      (fromY - toY === 1 || fromY - toY === 2) &&
      !boardState[toY][toX]
    ) {
      return true;
    }
  }
  // if its regular 1 square move
  else {
    if (
      verticalPathCheck(fromX, fromY, toX, toY, boardState) &&
      fromY - toY === 1 &&
      !boardState[toY][toX]
    ) {
      return true;  
    }
  }
  return false;
}
