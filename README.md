# Supercars Trivia

A React-based trivia game about electric vehicles, built with Vite and styled with CSS.

## Features

- **Welcome Page**: Logo, title, and call-to-action button
- **Data Capture Modal**: Collects participant information (name, phone, email)
- **Question Page**: Displays questions with randomly shuffled multiple choice answers
- **Results Page**: Shows feedback with correct/incorrect indicators
- **Closure Page**: Final results with promotional discount offer

## Game Flow

1. User sees welcome page with "Comenzar a jugar" button
2. Data capture modal appears for participant information
3. User answers 3 randomly selected questions from a pool of 25
4. After each answer, user sees feedback with educational content
5. Final page shows results and promotional offer
6. "VOLVER A JUGAR" button restarts the game

## Technical Details

- **Framework**: React 18 with Vite
- **Styling**: Plain CSS with custom color scheme
- **State Management**: React useState hooks
- **Questions**: 25 questions about electric vehicles in Spanish

## Color Scheme

- Background: #070707 (dark)
- Text: #ffffff (white)
- Primary Accent: #28b4fa (blue)
- Secondary: #1559ed (darker blue)
- Details: #192a3d (dark blue)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open browser to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── WelcomePage.jsx
│   ├── DataCaptureModal.jsx
│   ├── QuestionPage.jsx
│   ├── ResultsPage.jsx
│   └── ClosurePage.jsx
├── data/
│   └── questions.js
├── App.jsx
├── App.css
└── main.jsx
```
