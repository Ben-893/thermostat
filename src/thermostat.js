'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;


};

Thermostat.prototype.increase = function() {

  if(this.temperature + 1 > this.maxTemp()){
    throw new Error('Temperature already at maximum')
  } else {
  this.temperature += 1
  }
  // console.log(this.maxTemp())
};


Thermostat.prototype.decrease = function() {
  this.temperature -= 1
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false
};

Thermostat.prototype.maxTemp = function() {
  if (this.powerSavingMode === true) {
   return this.MAX_TEMP_PSM_ON
  } else {
   return this.MAX_TEMP_PSM_OFF 
  };
};
Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.usage = function() {
  if(this.temperature <= 18) {
    return 'low-usage'
   } else if(this.temperature <= 25) {
    return 'medium-usage'

   } else {
   return 'high-usage' }
};
