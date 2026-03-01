import Character from './domain.js'; // обязательный импорт

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}