// import { PieceColor } from "../validate";
import { validateCapture } from "../pathChecks/validateCaptureForOppositeColor";
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
    // for diagonal move to left or right by one square for capture only
    if(fromY-toY === 1 && Math.abs(fromX -toX) === 1 && boardState[toY][toX]){
      return validateCapture(fromX,fromY,toX,toY,boardState); 
      //bascially to make the one square dia move, that square must be occupied with opposite color piece
    }
  }
  return false;
}
