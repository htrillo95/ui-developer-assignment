export const transactions = [
    // Mom: regular grocery runs, sometimesbig trips
    { customerId: 1, name: "Mom", amount: 95, date: "2025-07-05" },
    { customerId: 1, name: "Mom", amount: 120, date: "2025-07-19" },
    { customerId: 1, name: "Mom", amount: 80, date: "2025-08-09" },
    { customerId: 1, name: "Mom", amount: 150, date: "2025-08-23" },
    { customerId: 1, name: "Mom", amount: 60, date: "2025-09-07" },
    { customerId: 1, name: "Mom", amount: 130, date: "2025-09-21" },
  
    // Dad: fewer trips, but big hauls
    { customerId: 2, name: "Dad", amount: 200, date: "2025-07-12" },
    { customerId: 2, name: "Dad", amount: 45, date: "2025-08-02" }, // no points earned
    { customerId: 2, name: "Dad", amount: 175, date: "2025-09-15" },
  
    // Sister: smaller student runs
    { customerId: 3, name: "Sister", amount: 55, date: "2025-07-08" },
    { customerId: 3, name: "Sister", amount: 65, date: "2025-08-14" },
    { customerId: 3, name: "Sister", amount: 40, date: "2025-09-03" }, // no points earned
    { customerId: 3, name: "Sister", amount: 95, date: "2025-09-28" },
  
    // Brother: eats out a lot, bigger restaurant bills
    { customerId: 4, name: "Brother", amount: 110, date: "2025-07-03" },
    { customerId: 4, name: "Brother", amount: 75, date: "2025-08-18" },
    { customerId: 4, name: "Brother", amount: 140, date: "2025-09-10" }
  ];

  //API call: return data after 1s delay
  export function fetchTransactions() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transactions);
      }, 1000);
    });
  }