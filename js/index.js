(function () {


    $.jmpress('register', 'basicwebconfig', function () {
        var jmpress = this;

        // our main configuration
        var config = {
            stepSelector: 'section',
            viewPort: {
                width: 1300,
                maxScale: 1
            }
        };

    });

// start the demo!
    $('#basicweb').jmpress('basicwebconfig');


}());