'use strict';


describe('Thermostat', function() {

  var thermostat;
  


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature', function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature', function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    expect(thermostat.MINIMUM_TEMP).toEqual(10);
  });

  it('has a power saving mode', function() {
    thermostat.powerSavingModeOn();
    expect(thermostat.powerSavingMode).toEqual(true);
  });

describe('PSM on', function(){
    it('has a maximum temperature of 25 degrees when powerSavingMode is on', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.MAX_TEMP_PSM_ON).toEqual(25)
    });

    it('throws an error when higher than max temp', function() {
      for(var i = 0; i < 5; i++) {
        thermostat.increase()
        console.log(thermostat);
      };

      expect(function() { thermostat.increase(); }).toThrow(new Error('Temperature already at maximum'));

    });

  });

  it('has a maximum temperature of 32 degrees when powerSavingMode is off', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.MAX_TEMP_PSM_OFF).toEqual(32)
  });

  it('has a power saving mode', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('PSM on by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

});

