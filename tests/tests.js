var assert = chai.assert;

suite('Temperature Converter Default Test:', function() {
  test('is 32F equal to 0C ?', function() {
    original.value = "32F";
    calculate();
    assert.deepEqual(converted.innerHTML, "0.0 Celsius");
  });
  test('is 45C equal to 113.0 Farenheit?', function() {
    original.value = "45C";
    calculate();
    assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
  });
  test('is 28 C equal to 82.4 Farenheit?', function() {
    original.value = "  28  C  ";
    calculate();
    assert.deepEqual(converted.innerHTML, "82.4 Farenheit");
  });
  test('is +65.8C equal to 154.4 Farenheit?', function() {
    original.value = "+65.8C";
    calculate();
    assert.deepEqual(converted.innerHTML, "150.4 Farenheit");
  });
  test('is +  65.8 C equal to 154.4 Farenheit?', function() {
    original.value = "+65.8 C ";
    calculate();
    assert.deepEqual(converted.innerHTML, "150.4 Farenheit");
  });
});