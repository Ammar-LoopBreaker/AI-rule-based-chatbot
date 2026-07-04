/* ================================================
   engine.js  —  if-else Rule Matching Engine
   Loaded SECOND after rules.js
   Exposes: getBotResponse(input) → string
   ================================================ */

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getBotResponse(input) {
  var clean = input.toLowerCase().trim();

  /* Loop every rule — if-else conditional logic */
  for (var i = 0; i < RULES.length; i++) {
    var rule = RULES[i];
    var matched = false;

    /* Check each keyword with indexOf */
    for (var j = 0; j < rule.keywords.length; j++) {
      if (clean.indexOf(rule.keywords[j]) !== -1) {
        matched = true;
        break;
      }
    }

    if (matched) {
      var response = randomFrom(rule.responses);

      /* Dynamic time */
      if (response === '__TIME__') {
        return 'The current time is ' + new Date().toLocaleTimeString('en-US', {
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
      }

      /* Dynamic date */
      if (response === '__DATE__') {
        return 'Today is ' + new Date().toLocaleDateString('en-US', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
      }

      return response;
    }
  }

  /* No rule matched — else branch */
  return randomFrom(FALLBACKS);
}