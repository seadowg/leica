window.leica = {
    runner: {
        writeSuite: function(description) {
            console.log(description + ":");
        },

        writeFeature: function(description, result) {
            var resultText = result ? "Passed" : "Failed";
            console.log("  " + description + "... " + resultText);
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