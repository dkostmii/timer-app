export function mod(a: number, n: number) {
  return ((a % n) + n) % n;
}

function digits(d: number, base: number = 10): number {
  if (d === 0) return 1;

  return Math.floor(Math.log(Math.abs(d)) / Math.log(base) + 1);
}

export function format(n: number, places: number): string {
  const zero = "0";
  const minus = "-";
  
  const sign = n < 0;

  const d = digits(n);

  const p = d >= places ? 0 : places - d;

  const pad = new Array(p).fill(zero).join("");

  return (sign ? minus : "") + pad + Math.abs(n).toString();
}
