import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public generateRandomNumbers(length = 8): number[] {
    const start = -1_000;
    return Array(length)
      .fill('')
      .map(() => start + Math.random() * 2 * 1_000);
  }

  public manageNumber(n: number): string | number {
    console.log('n => ', n);
    if (!n || !Number.isInteger(n)) {
      console.log('SHOULD WORK ');
      throw new Error('Expected a number');
    }

    const hasGeste = this.hasGeste(n);
    const hasForme = this.hasForme(n);

    if (hasGeste && hasForme) {
      return 'Gestform';
    }

    if (hasGeste || hasForme) {
      return [hasGeste ? 'Geste' : null, hasForme ? 'Forme' : null]
        .filter(a => !!a)
        .join('');
    }

    return n;
  }

  private hasGeste(n: number) {
    return n % 3 === 0;
  }

  private hasForme(n: number) {
    return n % 5 === 0;
  }
}
