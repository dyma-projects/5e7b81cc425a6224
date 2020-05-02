import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  public result: number = 0;
  @Input() public compteur: number;
  @Output() public sendResult: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.compteur = 0;
  }

  increment(): void {
    this.result++;
    this.sendResult.emit(this.result);
  }

  decrement(): void {
    this.result--;
    this.sendResult.emit(this.result);
  }
}
