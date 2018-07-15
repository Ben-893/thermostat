$( document ).ready(function() {
  var thermostat = new Thermostat();

  $('#minus').on('click', function() {
    thermostat.decrease();
    updateTemperature();
  })

  $('#plus').on('click', function() {
    thermostat.increase();
    updateTemperature();
  })

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#psm_on').on('click', function() {
    thermostat.powerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm_off').on('click', function() {
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());

  }







});
