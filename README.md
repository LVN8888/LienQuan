# Calculate Area of Valor Win Rate

A simple web-based tool for calculating the required number of wins to reach a desired win rate in Arena of Valor (Liên Quân Mobile). Enter your current win rate, desired win rate, and total matches played to determine how many consecutive wins are needed.

## Features
- **User-friendly Interface**: A clean and responsive UI for easy input and results display.
- **Real-time Calculation**: Instantly computes required wins based on user input.
- **Error Handling**: Alerts users when input fields are missing.
- **Lightweight & Fast**: No backend required, runs entirely in the browser.

## How to Use
### Step 1: Enter Your Stats
1. **Current Win Rate**: Enter your existing win rate (e.g., `55.5`).
2. **Desired Win Rate**: Enter your target win rate (e.g., `60`).
3. **Total Matches Played**: Enter the total number of games played so far (e.g., `1000`).

### Step 2: Get Results
1. Click **"Xem kết quả"** (View Results).
2. The tool will display the number of wins needed to reach your goal.

## Example
```
Current Win Rate: 55.5%
Desired Win Rate: 60%
Total Matches Played: 1000

Result: You need to win 67 consecutive matches.
```

## Notes
- If the calculated result is negative, it means you need to **lose** additional matches to reach the target.
- The tool rounds down values to maintain accuracy.
- Works entirely on the client side for fast calculations.

## License
This project is free for educational and personal use.

