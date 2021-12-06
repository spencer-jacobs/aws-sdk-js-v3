const { Before } = require("cucumber");

Before({ tags: "@cloudwatchevents" }, function (scenario, callback) {
  const { CloudWatchEvents } = require("../../../clients/client-cloudwatch-events");
  this.service = new CloudWatchEvents({});
  callback();
});
