class Censurador {
  constructor() {
    this.view = document.getElementById('text-result');
    this.numberOfCoincidences = 0;
    this.numberOfWords = 0;
  }

  defineInput(text, words) {
    this.wordsToCensure = words.split(' ').map((element) => element.toLowerCase());
    this.textToCensure = text.split(' ');
  }

  censure() {
    this.textResult = this.textToCensure;

    if (this.textToCensure.length < 1) this.textResult = 'No escribiste nada';

    this.textToCensure.forEach((word, index) => {
      this.wordsToCensure.forEach((wordCensure) => {
        if (word.toLowerCase().startsWith(wordCensure) && word.endsWith(',')) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length - 1) + ',';
        } else if (word.toLowerCase().startsWith(wordCensure) && word.endsWith('.')) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length - 1) + '.';
        } else if (word.toLowerCase().startsWith(wordCensure) && word.endsWith('?')) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length - 1) + '?';
        } else if (word.toLowerCase().endsWith(wordCensure) && word.startsWith('¿')) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length - 1) + '¿';
        } else if (word.toLowerCase().startsWith(wordCensure) && word.endsWith('!')) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length - 1) + '!';
        } else if (word.toLowerCase().endsWith(wordCensure) && word.startsWith('.')) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length - 1) + '¡';
        } else if (word.toLowerCase().startsWith(wordCensure)) {
          this.numberOfCoincidences++;
          this.textResult[index] = '$'.repeat(word.length);
        }
      });
    });

    this.numberOfWords = this.textToCensure.length;
    this.textResultJoin = this.textResult.join(' ');
  }

  render() {
    this.view.textContent = this.textResultJoin;
    document.querySelector('.nWords').innerHTML = this.numberOfWords;
    document.querySelector('.nCoincidence').innerHTML = this.numberOfCoincidences;
    this.numberOfCoincidences = 0;
    this.numberOfWords = 0;
  }
}

export default Censurador;
