const exemple1 = require("./CalculateRide");
test("Deve calcular valor de uma corrida de taxi em dias normais", function () {
  // giver (dado quem, cenário) arrange
  const distance = 1000;
  const date = new Date("2021-07-10T10:00:00");
  // when(quando algo acontecer) act
  const price = exemple1.calculateRide(distance, date);
  // then( entao algo deve ser verificado) assert
  expect(price).toBe(3900);
});

test("Deve calcular valor de uma corrida de taxi em dias normais", function () {
  // giver (dado quem, cenário) arrange
  const distance = -1000;
  const date = new Date("2021-07-10T10:00:00");
  // when(quando algo acontecer) act
  const price = exemple1.calculateRide(distance, date);
  // then( entao algo deve ser verificado) assert
  expect(() => exemple1.calculateRide(distance, date)).toThrow(
    new Error("Valor inválido")
  );
});
