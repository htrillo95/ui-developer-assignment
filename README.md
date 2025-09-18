# Credit Card Rewards Program

This React app calculates reward points for a simple credit card program:

- 1 point for every $1 spent over $50 (up to $100)  
- 2 points for every $1 spent over $100  

Example: a $120 purchase = 90 points.  

The app groups points by **customer** and by **month**, and also shows each customer’s total. Data is mocked to simulate an API call and then displayed in a table.

## Dataset
I used a small family example for transactions (Mom, Dad, Sister, Brother) over 3 months to keep the data realistic and easy to follow.

## How to Run
1. Clone this repo  
2. Run `npm install`  
3. Run `npm start`  
4. Open [http://localhost:3000](http://localhost:3000)  

You’ll see the rewards table load after a short “Loading transactions…” message (simulated async).