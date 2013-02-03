window.leica = {  
  runner: {
    writeSuite: function(description) {
      var featureHeader = document.createElement('h2');
      featureHeader.setAttribute('class', 'feature');
      featureHeader.innerHTML = description + ":";
      document.getElementById("results").appendChild(featureHeader);
    },

    writeFeature: function(description, result) { 
      var descriptionText = description + "... ";
      var resultText = result ? "Passed" : "Failed";
      var resultClass = result ? "pass" : "fail";
                
      var resultElement = document.createElement('p');
      resultElement.setAttribute('class', 'result ' + resultClass);
      resultElement.innerHTML = descriptionText + resultText;
      document.getElementById("results").appendChild(resultElement);
    },
    
    tests: function(func) {
      window.onload = function() {
        func();
      }
    }
  }
};

window.describe = function(description, testObject) {
  window.leica.runner.writeSuite(description);

  for (var feature in testObject) {
    var test = testObject[feature];

    if (test != testObject.setup) {
      var result = testObject.setup(test);
      window.leica.runner.writeFeature(feature, result);
    }
  }
};