# Character Counter

This is a simple React app that counts characters and words in real time as you type.

Built with [Vite](https://vitejs.dev/) + React.

## Features

- **Character Count** — live count of every character typed. This includes spaces as a character.
- **Word Count** — live count of words, with proper handling of:
  - Empty input
  - Leading/trailing spaces
  - Multiple spaces between words
  - New lines and tabs as word separators

## Tech Stack

- React
- Vite
- Plain CSS

## Getting Started

### Prerequisites

- Node.js (LTS recommended, v18+)
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/yourusername/character-counter.git
cd character-counter
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## How It Works

- The textarea's content is stored in React state via `useState`.
- **Character count** is simply the length of the text string.
- **Word count** is calculated by:
  1. Trimming leading/trailing whitespace from the text.
  2. If the trimmed text is empty, the word count is `0`.
  3. Otherwise, splitting the trimmed text on any run of whitespace (`/\s+/`) and counting the resulting pieces.

This avoids common bugs like counting empty strings or extra spaces as words.

## Screenshots

<img width="932" height="576" alt="image" src="https://github.com/user-attachments/assets/49b018cf-f302-4f65-acbf-185fe8127c5e" />


## License

This project was built as a course assignment, for the module Software Engineering.
Univeristy of Moratuwa - Year 2, semester 1.
