// apoorva: pawn king queen
// rajeev: rook bishop knight - all done

import { validateQueenMove } from "./pieceValidation/queen";
import { validateRookMove } from "./pieceValidation/rook";
import { validateBishopMove } from "./pieceValidation/bishop";
import { validateKnightMove } from "./pieceValidation/knight";
import { validateKingMove } from "./pieceValidation/king";
import { validatePawnMove } from "./pieceValidation/pawn";

export type PieceColor = "w" | "b";

// isOccupied returns true if a tile is occupied
function isOccupied(x: number, y: number, boardState: string[][]): boolean {
  return !!boardState[y][x];
}

// the switch case which trigges the correct validation logic
export function validate(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  pieceName: string,
  boardState: string[][]
): boolean {
  console.log("is occupied:", isOccupied(toX, toY, boardState));

  switch (pieceName) {
    case "wP":
      return validatePawnMove(fromX, fromY, toX, toY, boardState);
    case "wK":
      return validateKingMove(fromX, fromY, toX, toY);
    case "wQ":
      return validateQueenMove(fromX, fromY, toX, toY, boardState);
    case "wN":
      return validateKnightMove(fromX, fromY, toX, toY);
    case "wR":
      return validateRookMove(fromX, fromY, toX, toY, boardState);
    case "wB":
      return validateBishopMove(fromX, fromY, toX, toY, boardState);
    case "bP":
      console.log("its a black pawn");
      break;
    case "bK":
      return validateKingMove(fromX, fromY, toX, toY);
    case "bQ":
      return validateQueenMove(fromX, fromY, toX, toY, boardState);
    case "bN":
      return validateKnightMove(fromX, fromY, toX, toY);
    case "bR":
      return validateRookMove(fromX, fromY, toX, toY, boardState);
    case "bB":
      return validateBishopMove(fromX, fromY, toX, toY, boardState);

    default:
      break;
  }

  return true;
}
