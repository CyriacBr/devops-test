function sleep(time) {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {}
}

function addition(nbr1, nbr2) {
  return nbr1 + nbr2;
}

function multiplication(nbr1, nbr2) {
  return nbr1 * nbr2;
}

module.exports = { sleep, addition, multiplication };
