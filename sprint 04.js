///task 1
///task 2
///task 3
///task 4

function* take(n, iterable) {
  for (let i = 0; i < n; i++) {
    yield iterable[i];
  }
}
