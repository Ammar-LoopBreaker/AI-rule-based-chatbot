/* ================================================
   rules.js  —  All Chatbot Rules & Fallbacks
   Loaded FIRST before engine.js and ui.js
   ================================================ */

var RULES = [

  /* 1. Greeting */
  {
    category: 'Greeting',
    keywords: ['hello','hi','hey','good morning','good evening','good afternoon','howdy','sup','greetings','hiya'],
    responses: [
      'Hey there! Great to see you! I am RuBot, your Rule-Based Chatbot. How can I help you today?',
      'Hello! Welcome! I am RuBot. Ask me anything!',
      'Hi! Glad you are here. What can I do for you?',
      'Hey! Good to hear from you! What is on your mind?'
    ]
  },

  /* 2. Farewell */
  {
    category: 'Farewell',
    keywords: ['bye','goodbye','see you','take care','quit','exit','later','farewell','see ya','good night','cya'],
    responses: [
      'Goodbye! Have a wonderful day. Come back anytime!',
      'See you later! Take care and stay awesome!',
      'Bye bye! It was great chatting with you!',
      'Farewell! Hope to talk with you again soon!'
    ]
  },

  /* 3. How Are You */
  {
    category: 'How Are You',
    keywords: ['how are you','how is it going','how do you do','you good','how are things','how r u','how have you been','hows it going'],
    responses: [
      'I am doing great, thanks for asking! Always ready to chat. How about you?',
      'Fantastic! Running perfectly on my rules engine. How are YOU doing?',
      'All systems go! I am in tip-top shape. What about you?'
    ]
  },

  /* 4. Name / Identity */
  {
    category: 'Name',
    keywords: ['your name','who are you','what are you','introduce yourself','what should i call you'],
    responses: [
      'I am RuBot, a rule-based chatbot built with if-else conditional logic! Nice to meet you!',
      'My name is RuBot! I use predefined rules to respond to your messages.',
      'Call me RuBot! I am a rule-based assistant. What can I do for you?'
    ]
  },

  /* 5. Time (dynamic) */
  {
    category: 'Time',
    keywords: ['time','what time','current time','clock','time is it','time now'],
    responses: ['__TIME__']
  },

  /* 6. Date (dynamic) */
  {
    category: 'Date',
    keywords: ['today','date','what day','what date','current date','date today','day is it','what is today','todays date','what is the date'],
    responses: ['__DATE__']
  },

  /* 7. Jokes */
  {
    category: 'Joke',
    keywords: ['joke','funny','laugh','humor','humour','make me laugh','tell me a joke','something funny'],
    responses: [
      'Why do not scientists trust atoms? Because they make up everything!',
      'Why did the computer go to the doctor? Because it had a virus!',
      'What do you call a fake noodle? An Impasta!',
      'Why did the scarecrow win an award? He was outstanding in his field!',
      'Why do programmers prefer dark mode? Because light attracts bugs!',
      'How does a computer get drunk? It takes screenshots!',
      'Why did the programmer quit? Because he did not get arrays!'
    ]
  },

  /* 8. Weather */
  {
    category: 'Weather',
    keywords: ['weather','temperature','forecast','raining','sunny','cloudy','snow','cold outside','hot outside'],
    responses: [
      'I do not have live weather data, but check weather.com or Google Weather for your location!',
      'For accurate weather, check weather.com or your local weather app!',
      'Weather is beyond my rules! Try weather.com or type your city into Google.'
    ]
  },

  /* 9. Help */
  {
    category: 'Help',
    keywords: ['help','what can you do','commands','options','menu','features','capabilities'],
    responses: [
      'Here is what I can help you with:\n- Greetings and farewells\n- Current time and date\n- Jokes\n- Weather suggestions\n- General questions\n- About me\n\nJust type naturally or use the quick buttons!'
    ]
  },

  /* 10. Thanks */
  {
    category: 'Thanks',
    keywords: ['thanks','thank you','thx','cheers','appreciate','thank u','ty','many thanks'],
    responses: [
      'You are welcome! Happy to help anytime.',
      'Anytime! That is what I am here for.',
      'No problem at all! Feel free to ask more.',
      'My pleasure! Is there anything else I can help you with?'
    ]
  },

  /* 11. Age */
  {
    category: 'Age',
    keywords: ['how old','your age','when were you born','age are you'],
    responses: [
      'I was just created so I am brand new! Age is just a number for bots.',
      'I do not really age! I was built recently and always up-to-date with my rules.'
    ]
  },

  /* 12. Creator */
  {
    category: 'Creator',
    keywords: ['who made you','who created you','your creator','who built you','who programmed you','who designed you'],
    responses: [
      'I was created by a developer as part of a Rule-Based Chatbot project! Powered by if-else logic.',
      'A talented developer built me as a demonstration of rule-based AI!'
    ]
  },

  /* 13. Smart / AI */
  {
    category: 'Smart',
    keywords: ['are you smart','are you ai','are you intelligent','what do you know','how intelligent'],
    responses: [
      'I use conditional logic, if-else rules, to match your input to the best response!',
      'I am rule-based, not AI. I handle common questions using predefined if-else rules.'
    ]
  },

  /* 14. Yes */
  {
    category: 'Yes',
    keywords: ['yes','yeah','yep','sure','absolutely','okay','alright'],
    responses: [
      'Great! What would you like to know?',
      'Awesome! Ask me anything!',
      'Perfect! What can I help you with?'
    ]
  },

  /* 15. No */
  {
    category: 'No',
    keywords: ['no','nope','nah','not really','nothing','never mind','nevermind'],
    responses: [
      'No problem! I am here if you need anything.',
      'That is okay! Just let me know if you need help.',
      'Alright! I will be here whenever you need me.'
    ]
  }

];

/* Fallback — returned when no rule matches (the else branch) */
var FALLBACKS = [
  "Hmm, I am not sure about that. Try: time, date, joke, weather, or type 'help'!",
  "I did not quite get that. Type 'help' to see what I can do!",
  "That is beyond my rules! Try: hello, tell me a joke, what time is it, or help.",
  "I do not have a rule for that yet. Type 'help' to see my capabilities.",
  "Interesting! But that is outside my knowledge. Try 'help'!"
];