import React, { useState, useEffect } from "react";
import { fetchTransactions } from "./data";

function App() {

//load state
const [transactions, setTransactions] = useState([]);
const [loading, setLoading] = useState(true);

//simulate async fetch (API call)
useEffect(() => {
  fetchTransactions().then((data) => {
    setTransactions(data);
    setLoading(false);
  });
}, []);

//reward points calculation
function calculatePoints(amount) {
  let points = 0;
  if (amount > 100) {
     // 2 pts per $ over 100, plus 50 pts from the 50–100 range
    points += (amount - 100) * 2 + 50;
  } else if (amount > 50) {
     // 1 pt per $ over 50 (up to 100)
    points += (amount - 50);
  }
  return points;
}

// Group points by customer + month
const rewards = {};
transactions.forEach((t) => {
  const month = new Date(t.date).toLocaleString("default", { month: "long" });
  const points = calculatePoints(t.amount);

  if (!rewards[t.name]) {
    rewards[t.name] = { months: {}, total: 0 }; // init customer
  }

  rewards[t.name].months[month] = (rewards[t.name].months[month] || 0) + points; // add monthly pts
  rewards[t.name].total += points; // add to total
});

if (loading) return <p>Loading transactions...</p>;

return (
  <div style={{ padding: "20px" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
      Credit Card Rewards Program
    </h2>

    <table
      style={{
        borderCollapse: "collapse",
        margin: "0 auto", // center table
        width: "80%",     // stretch but not full screen
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        tableLayout: "fixed"
      }}
    >
      <thead style={{ background: "#f8f8f8" }}>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Customer</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Month</th>
          <th style={{ border: "1px solid #ccc", padding: "10px" }}>Points</th>
        </tr>
      </thead>
      
      <tbody>
        {Object.entries(rewards).map(([name, data]) => (
          <React.Fragment key={name}>
            
            {/* months row */}
            {Object.entries(data.months).map(([month, points]) => (
              <tr
                key={name + month}
                style={{ borderBottom: "1px solid #eee" }}
              >
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  {name}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  {month}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  {points}
                </td>
              </tr>
            ))}

            {/* bold total row */}
            <tr
              style={{
                fontWeight: "bold",
                background: "#f0f0f0",
                borderTop: "2px solid #ccc"
              }}
            >
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {name}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                Total
              </td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                {data.total}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default App;