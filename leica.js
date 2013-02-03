window.leica = {
  suites: [],
  
  run: function(runner) {
    for (var i = 0; i < this.suites.length; i++) {
      var suite = this.suites[i];
      runner.writeSuite(suite.description);

      for (var feature in suite.testObject) {
        var test = suite.testObject[feature];

        if (test != suite.testObject.setup) {
          var result = suite.testObject.setup(test);
          runner.writeFeature(feature, result);
        }
      }
    }
  }
};

window.describe = function(description, testObject) {
  window.leica.suites.push({
    description: description,
    testObject: testObject
  });
};