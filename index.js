//Debug mode
const DEBUG = true;

//System includes
var util = require('util');
var fs = require('fs');

//Custom includes
var knx = require('includes/knx/knx');

// Environment
var environment = JSON.parse(fs.readFileSync('environment.json', 'utf8'));
if (DEBUG) console.log("Environment: %j", environment);

// Events
function on_data_point_received(name, address, value) {
  if (DEBUG) console.log("KNX Data point received, (%j, %j, %j)", name, address, value);
}

function on_connected() {
  knx.register_callback("on_data_point_received", on_data_point_received)
}

knx.register_callback("on_connected", on_connected);
