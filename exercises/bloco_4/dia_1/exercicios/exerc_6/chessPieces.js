let chessPiece = 'Bishop';

chessPiece = chessPiece.toLowerCase();

switch(chessPiece){
  case 'king':
    console.log('King: One square in any direction.');
    break;
  case 'queen':
    console.log('Queen: Any number of squares in any direction.');
    break;
  case 'rook':
    console.log('Rook: Any number of squares horizontally or vertically.');
    break;
  case 'bishop':
    console.log('Bishop: Any number of squares diagonally.');
    break;
  case 'knight':
    console.log('Knight: Move in an "L shape".');
    break;
  case 'pawn':
    console.log('Pawn: One square foward, two squares if it has not yet moved.');
    break;
  default:
    console.log('Error. Invalid Piece.');
    break;
}