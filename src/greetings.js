const greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

export function next() {
  const idx = Math.floor(Math.random() * greetings.length);
  return greetings[idx];
}

export function nth(n = 0) {
  return greetings[n];
}

export function testy(params) {
  const k = params + 1;
  return greetings[k];
}
