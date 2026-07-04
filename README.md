# Rule-Based Chatbot

A rule-based chatbot built with pure HTML, CSS, and JavaScript using if-else conditional logic to respond to user queries in real time.


## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Rule Logic](#rule-logic)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Sample Conversation](#sample-conversation)
- [Technologies Used](#technologies-used)
- [License](#license)


## About the Project

This is a **Rule-Based Chatbot** built using pure HTML, CSS, and Vanilla JavaScript. The chatbot uses **predefined if-else conditional rules** to match user input against a set of keywords and return the most appropriate response.

Unlike AI or ML-based chatbots, this chatbot does **not learn** — it relies entirely on a structured rule set, making it lightweight, fast, and fully transparent in how it works.


## Features

-  **Real-time chat interface** — clean, terminal-style dark UI
-  **Instant responses** using if-else conditional logic
-  **15 rule categories** — greetings, farewells, jokes, time, date, weather, help, and more
-  **Live time & date** — dynamically fetched from the browser
-  **Random responses** — multiple replies per rule to avoid repetition
-  **Quick reply chips** — one-click shortcut buttons for common queries
-  **Keyboard support** — press `Enter` to send a message
-  **Rule documentation table** — built into the page for reference
-  **Sample conversation** — shown below the chat for demonstration
-  **Responsive design** — works on desktop and mobile
-  **Typing indicator** — animated dots before bot replies
-  **Dual-mode loading** — works both via a local server AND by direct double-click


## Project Structure

```
rule-based-chatbot/
│
├── index.html          # Main HTML file (structure + inline fallback)
│
├── css/
│   └── style.css       # All styles — layout, colours, animations
│
├── js/
│   ├── rules.js        # All 15 chatbot rules + fallback responses
│   ├── engine.js       # if-else rule matching engine
│   └── ui.js           # DOM rendering, chat UI, send logic
│
└── README.md           # Project documentation (this file)
```

## File Descriptions

### `index.html`
The main entry point of the application. Contains:
- Full HTML structure (header, chat card, title bar, message area, chips, input row, docs panel)
- A `<link>` to `css/style.css` for external styles
- `<script>` tags that load `js/rules.js`, `js/engine.js`, and `js/ui.js` in correct order
- An **inline fallback** — all JS and CSS are also embedded directly so it works when opened by double-clicking without a local server


### `css/style.css`
Contains all visual styling for the chatbot:
- Dark purple gradient background
- Terminal-style chat card with glowing title bar dots
- User and bot message bubbles with fade-in animation
- Typing indicator with bouncing dots animation
- Quick reply chip buttons with hover effects
- Responsive layout for mobile screens


### `js/rules.js`
Defines all the chatbot knowledge as an array of rule objects (`RULES[]`) and fallback responses (`FALLBACKS[]`).

Each rule object follows this structure:
```js
{
  category: 'Greeting',
  keywords: ['hello', 'hi', 'hey', ...],
  responses: [
    'Hey there! How can I help you today?',
    'Hello! Welcome! Ask me anything!',
    ...
  ]
}
```
> Must be loaded **first** — `engine.js` and `ui.js` both depend on `RULES` and `FALLBACKS` being defined.


### `js/engine.js`
The core **rule-matching engine**. Exposes one function:

```js
getBotResponse(input)  →  string
```

How it works:
1. Converts user input to lowercase and trims whitespace
2. Loops through every rule in `RULES[]`
3. For each rule, checks if any keyword exists in the input using `indexOf()`
4. If matched, picks a random response from that rule's `responses[]`
5. Handles special tokens `__TIME__` and `__DATE__` for live dynamic responses
6. If nothing matches, returns a random item from `FALLBACKS[]`


### `js/ui.js`
Handles all DOM interaction and chat interface logic. Runs entirely inside `DOMContentLoaded` to guarantee the DOM is ready before any element is accessed.

Key functions:

| Function | Description |
|---|---|
| `appendMessage(text, role)` | Renders a chat bubble (bot or user) |
| `showTyping()` | Displays animated typing dots |
| `removeTyping()` | Removes typing dots after response |
| `handleSend()` | Reads input, shows user message, calls engine, shows bot reply |
| `sendChip(text)` | Called by quick-reply chip buttons |


## Rule Logic

The chatbot uses **if-else conditional logic** to map user input to responses:

| # | Category | Example Keywords | Response Type |
|---|---|---|---|
| 1 | Greeting | hello, hi, hey, howdy | Friendly welcome |
| 2 | Farewell | bye, goodbye, see you, exit | Polite goodbye |
| 3 | How Are You | how are you, you good | Positive status reply |
| 4 | Name | who are you, your name | Bot introduction |
| 5 | Time | time, what time, clock | Live current time |
| 6 | Date | date, today, what day | Live current date |
| 7 | Joke | joke, funny, laugh, humor | Random joke |
| 8 | Weather | weather, forecast, rain | Weather suggestion |
| 9 | Help | help, commands, menu | Capabilities list |
| 10 | Thanks | thanks, thank you, thx | You're welcome |
| 11 | Age | how old, your age | Age reply |
| 12 | Creator | who made you, who built you | Creator info |
| 13 | Smart | are you ai, are you smart | Capability overview |
| 14 | Yes | yes, yeah, sure, okay | Affirmative reply |
| 15 | No | no, nope, never mind | Negative reply |
| — | Default | *(anything else)* | Fallback message |


## How It Works

```
User types a message
        │
        ▼
  handleSend() in ui.js
        │
        ▼
  getBotResponse(input) in engine.js
        │
        ▼
  Clean input → lowercase + trim
        │
        ▼
  Loop through RULES[] ──► keyword match found?
        │                         │
        │ NO                      │ YES
        ▼                         ▼
  Return random            Pick random response
  FALLBACK                 from rule.responses[]
                                  │
                                  ▼
                    Handle __TIME__ / __DATE__ tokens
                                  │
                                  ▼
                         Return response string
                                  │
                                  ▼
                    appendMessage() renders bot bubble
```


## Getting Started

### Option 1 — Direct Open (Quick Demo)

1. Download or clone the repository
2. Extract the ZIP if downloaded
3. Open `index.html` in any modern browser by double-clicking it

> Works in Chrome, Firefox, Edge, and Safari with zero setup.

---

### Option 2 — Local Server (For Development)

If you want the external `css/` and `js/` files to load via `<link>` and `<script src>` tags:

**Using VS Code Live Server:**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Open the project folder in VS Code
3. Right-click `index.html` → **Open with Live Server**

**Using Python:**
```bash
# Python 3
cd rule-based-chatbot
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

**Using Node.js:**
```bash
cd rule-based-chatbot
npx serve .
# Open the URL shown in terminal
```

---

### Option 3 — Clone from GitHub

```bash
git clone https://github.com/your-username/rule-based-chatbot.git
cd rule-based-chatbot
# Open index.html in your browser
```


##  Usage

1. Open `index.html` in your browser
2. The bot greets you automatically on load
3. Type any message in the input box and press **Enter** or click the **➤** button
4. Use the **quick reply chips** for one-click common queries
5. The bot responds after a short typing delay


## Sample Conversation

```
You : Hello!
Bot : Hey there! Great to see you! I am RuBot. How can I help you today?

You : Who are you?
Bot : I am RuBot, a rule-based chatbot built with if-else conditional logic!

You : What time is it?
Bot : The current time is 10:35:22 AM

You : Tell me a joke
Bot : Why do programmers prefer dark mode? Because light attracts bugs!

You : What is the weather like?
Bot : I do not have live weather data, but check weather.com or Google Weather!

You : Thanks!
Bot : You are welcome! Happy to help anytime.

You : Bye
Bot : Goodbye! Have a wonderful day. Come back anytime!
```

## Technologies Used

| Technology | Purpose |
|---|---|
| **HTML** | Page structure and layout |
| **CSS** | Styling, animations, responsive design |
| **Vanilla JavaScript** | Rule engine, DOM manipulation, chat logic |
| **Git** |  Version Control |
| **GitHub** |  Repository Hosting |

> No frameworks, no libraries, no external dependencies — 100% pure HTML, CSS, and JavaScript.


## License

This project is open source and available under the [MIT License](LICENSE).


>  **Tip:** Type `help` in the chatbot to see the full list of supported topics.
