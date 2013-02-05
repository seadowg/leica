window.leica = {
    runner: {
        success: 0,
        failure: 0,
        history: [],

        depth: function() {
          return this.history.length - 1;
        },

        startSuite: function(description) {
            this.history.push({ success: 0, failure: 0 });
            window.leica.writer.writeSuite(description, this.depth());
        },

        finishSuite: function() {
            this.history.pop();
        },

        reportFeature: function(feature, result) {
            if (result) {
                this.history[this.depth()].success++;
                this.success++;
            } else {
                this.history[this.depth()].failure++;
                this.failure++;
            }

            window.leica.writer.writeFeature(feature, result, this.depth());
        }
    },

    writer: {
        writeSuite: function(description, depth) {
            var featureHeader = document.createElement('h2');
            featureHeader.setAttribute('class', 'feature');
            featureHeader.innerHTML = description + ":";
            document.getElementById("results").appendChild(featureHeader);
        },

        writeFeature: function(feature, result, depth) {
            var descriptionText = feature + "... ";
            var resultText = result ? "Passed" : "Failed";
            var resultClass = result ? "pass" : "fail";

            var resultElement = document.createElement('p');
            resultElement.setAttribute('class', 'result ' + resultClass);
            resultElement.innerHTML = descriptionText + resultText;
            document.getElementById("results").appendChild(resultElement);
        }
    },

    tests: function(func) {
        window.onload = function() {
            func();
        }
    }
};


window.describe = function(description, testObject) {
    window.leica.runner.startSuite(description);

    for (var feature in testObject) {
        var test = testObject[feature];

        if (test != testObject.setup) {
            var result = testObject.setup(test);
            window.leica.runner.reportFeature(feature, result)
        }
    }

    window.leica.runner.finishSuite();
};
