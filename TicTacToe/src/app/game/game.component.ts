import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  squares:any = [];
  xIsNext: boolean = true;
  winner:string = '';
  counter:number = 0;
  isdraw:string = '';
  freshpage:boolean = true;


  constructor() { }

  ngOnInit(): void {

  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isdraw = '';
    this.counter = 0;
    this.freshpage = false;
  }

  get player(){
    return this.xIsNext?'X':'O';
  }

  makeMove(index : number){
    if(!this.squares[index]){
      this.squares.splice(index,1,this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
    this.winner = this.caluculateWinner();

    if(!this.winner && this.counter == 9){
      this.isdraw = 'Y'
    }
  }

  caluculateWinner(){
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
    for(let i=0;i<lines.length;i++){
      const a = lines[i];
      if(this.squares[a[0]] && this.squares[a[0]]==this.squares[a[1]] && this.squares[a[0]]==this.squares[a[2]]){
        return this.squares[a[0]];
      }
    }
    return null;
  }

}
