'use strict';

// Handle Cortana activation adding the event listener before DOM Content Loaded
// parse out the command type and call the respective game APIs

if (typeof Windows !== 'undefined') {
	console.log('Windows namespace is available');
	// Subscribe to the Windows Activation Event
	Windows.UI.WebUI.WebUIApplication.addEventListener('activated', function (args) {
		var activation = Windows.ApplicationModel.Activation;
		// Check to see if the app was activated by a voice command
		if (args.kind === activation.ActivationKind.voiceCommand) {
			
			// for testing only
			var speechRecognitionResult = args.result;
			var textSpoken = speechRecognitionResult.text;
			var command = speechRecognitionResult.rulePath[0];
			
			var definition = "[...]"
			var resultString = textSpoken + " is " + definition + "!";

			console.log('The command is: ' + command);
			document.getElementById('command').innerHTML = command;
			document.getElementById('speechReco').innerHTML = speechRecognitionResult;
			document.getElementById('text').innerHTML = textSpoken;
			document.getElementById('result').innerHTML = resultString;

			// Determine the command type {play} defined in vcd
			if (command === 'showDefinitionOfAcronym') {
				// Determine the stream name specified
				console.log('The speech reco result is: ' + speechRecognitionResult);
				console.log('The text spoken is: ' + textSpoken);
				console.log('The meaning of ' + textSpoken + ' is ' + definition);
			}
			else {
				// No valid command specified
				console.log('No valid command specified');
			}
		}
	});
} else {
	console.log('Windows namespace is unavaiable');
}