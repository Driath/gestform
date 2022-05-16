import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('List number should contain random number between -1000 and 1000', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const listNumber: number[] = app.generateRandomNumbers();
    expect(Math.max(...listNumber)).toBeLessThan(1000);
    expect(Math.min(...listNumber)).toBeGreaterThan(-1000);
  });

  it('list number should contain only integer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const listNumber: number[] = app.generateRandomNumbers();
    listNumber.forEach(number => expect(Number.isInteger(number)).toBeTrue());
  });

  it('For a number N from the list number, if N is divisible per 3 return Geste', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const listNumber = [3, 6, 9, 12];
    const listNumberManaged = listNumber.map(n => app.manageNumber(n));
    listNumberManaged.forEach(nManaged => {
      expect(nManaged).toBe('Geste');
    });
  });

  it('For a number N from the list number, if N is divisible per 5 return Forme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const listNumber = [5, 10]; // Omit voluntary 15 for next test :)
    const listNumberManaged = listNumber.map(n => app.manageNumber(n));
    listNumberManaged.forEach(nManaged => {
      expect(nManaged).toBe('Forme');
    });
  });

  it('For a number N from the list number, if N is divisible per 3 and per 5 return GestForme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const listNumber = [15, 30];
    const listNumberManaged = listNumber.map(n => app.manageNumber(n));
    listNumberManaged.forEach(nManaged => {
      expect(nManaged).toBe('Gestform');
    });
  });

  it('For a number N from the list number, if N is not divisible per 3 or per 5 return N', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const listNumber = [1, 2, 4, 7];
    const listNumberManaged = listNumber.map(n => app.manageNumber(n));
    listNumberManaged.forEach((nManaged, i) => {
      expect(nManaged).toBe(listNumber[i]);
    });
  });

  it('manageNumber should return an error if send not a integer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(() => {
      app.manageNumber('Coucou :)' as any);
    }).toThrowError('Expected a number');
  });

  it('Given [1,3,5,15,22] list number, Should return [1, "Geste", "Form", "Gesteform", 22]', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const givenListNumber = [1, 3, 5, 15, 22];
    const expectedListNumber = givenListNumber.map(n => app.manageNumber(n));
    expect(expectedListNumber).toEqual([1, 'Geste', 'Forme', 'Gestform', 22]);
  });
});
