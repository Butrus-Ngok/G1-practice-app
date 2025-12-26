# Ontario G1 Practice Test - Complete Study Guide

A complete, interactive practice test for the Ontario G1 driver's license exam. Based on the official "Driver's Handbook Study Guide" PDF with 181 total questions.

## Features

- **Complete Question Database**: 77 Road Sign questions + 104 Rules of the Road questions
- **Randomized Tests**: New questions every time you take a test
- **Three Test Types**:
  1. Road Signs Only (20 random from 77)
  2. Rules of the Road (20 random from 104)
  3. Full Practice Test (40 questions - 20 signs + 20 rules)
- **Instant Feedback**: See correct/incorrect answers immediately
- **Detailed Review**: Complete question-by-question review after test
- **Timer**: Track your test completion time
- **Progress Tracking**: Visual progress bar and score display
- **Responsive Design**: Works on desktop, tablet, and mobile

## Quick Start

1. **Download all files** into one folder:
```bash
g1-practice-test/
├── index.html
├── styles.css
├── script.js
├── quiz-data.js
├── create-images.py
└── README.md
```

3. Create images (one-time setup):
```bash
python create-images.py
This creates all 122 placeholder images automatically
```

3. File Structure:
```
g1-practice-test/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # Main application logic
├── quiz-data.js           # Complete question database (181 questions)
├── create-images.py       # Python script to generate images
├── README.md              # This file
└── images/                # Generated images folder
    ├── signs/             # 77 road sign images
    ├── rules/             # 44 rules question images
    └── placeholder.png    # Fallback image
```
## Question Sources
All questions are taken directly from the "Driver's Handbook Study Guide" PDF:
Part A: Traffic Signs - 77 questions (pages 6-12 of PDF)
Part B: Rules of the Road - 104 questions (pages 12-28 of PDF)

## Test Rules
Passing Score: 80% (16/20 for signs/rules tests, 32/40 for full test)
Time: Unlimited (timer for tracking only)
Feedback: Immediate feedback on answers
Review: Complete review available after test completion
Randomization: Questions randomized each test attempt

## Keyboard Shortcuts (During Quiz)
1, 2, 3, 4: Select answer option
Arrow Left: Previous question
Arrow Right: Next question
Enter: Submit/Next question
Escape: Quit test (with confirmation)

## Technical Details
```
Pure HTML/CSS/JavaScript: No frameworks or dependencies
Responsive Design: Works on all screen sizes
Local Storage: No data sent to servers
Cross-browser: Works on Chrome, Firefox, Safari, Edge
Offline Capable: Works without internet connection
```
## Customization
```
Want to add your own questions or images?
Add more questions: Edit quiz-data.js following the existing format
Update images: Replace files in images/signs/ or images/rules/
Change styles: Edit styles.css to match your preferences
Modify test settings: Edit script.js (passing score, number of questions, etc.)
```
## License
```
This project is provided for educational purposes. Based on public domain study materials.
Always refer to the official Ontario Driver's Handbook for the most up-to-date information.
```
## Support
```
This is a complete, ready-to-use application. If you encounter any issues:
Ensure all files are in the same folder
Run python create-images.py to generate images
Open index.html in a modern web browser
Check browser console for errors (F12 → Console)
```
Ready to practice? Open index.html and start your first test!


---

## COMPLETE PACKAGE - JUST DO THIS:
```
1. **Create a folder** called `g1-practice-test`
2. **Copy all 6 files above** exactly as shown into that folder

3. **Run the image generator** (one time):
   ```bash
   cd g1-practice-test
   python create-images.py



