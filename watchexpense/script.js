const exp = document.getElementById("exp");
const inc = document.getElementById("inc");
const exp1 = document.getElementById("expense");
const inc1 = document.getElementById("income");
const amt = document.getElementById("amt");
const total_balance = document.getElementById("balance");
const tnxName = document.getElementById("tnx-name");
const tnxDate = document.getElementById("date");
const transactionList = document.getElementById("transaction-list");
const noTransaction = document.getElementById("no-transaction");

let expenseIsActive = false;
let incomeIsActive = false;
let balance = 0;
let expense = 0;
let income = 0;

function clearBtn() {
  balance = 0;
  expense = 0;
  income = 0;
  total_balance.innerHTML = "₹0.00";
  inc1.innerHTML = "+₹0.00";
  exp1.innerHTML = "-₹0.00";
  transactionList.innerHTML = "";
  noTransaction.style.display = "block";
}

function expenseToggle() {
  inc.classList.remove("active");
  exp.classList.toggle("active");
  incomeIsActive = false;
  expenseIsActive = true;
}

function incomeToggle() {
  exp.classList.remove("active");
  inc.classList.toggle("active");
  expenseIsActive = false;
  incomeIsActive = true;
}

function submitBtn() {
  let amount = parseFloat(amt.value);
  let name = tnxName.value.trim();
  let date = tnxDate.value;

  if (!amount || !name || !date) {
    alert("Please fill all fields!");
    return;
  }

  let transactionItem = document.createElement("li");
  transactionItem.classList.add(
    "flex",
    "justify-between",
    "p-2",
    "text-sm",
    "border-b"
  );

  if (incomeIsActive) {
    balance += amount;
    income += amount;
    inc1.innerHTML = "+₹" + income;
    transactionItem.innerHTML = `
      <div>
        <h4>${name}</h4>
        <p class="text-xs text-gray-500">${date}</p>
      </div>
      <div class="text-green-500 font-bold">+₹${amount}</div>
    `;
  } else if (expenseIsActive) {
    balance -= amount;
    expense += amount;
    exp1.innerHTML = "-₹" + expense;
    transactionItem.innerHTML = `
      <div>
        <h4>${name}</h4>
        <p class="text-xs text-gray-500">${date}</p>
      </div>
      <div class="text-red-500 font-bold">-₹${amount}</div>
    `;
  }

  total_balance.innerHTML = "₹" + balance;
  transactionList.appendChild(transactionItem);
  noTransaction.style.display = "none";

  tnxName.value = "";
  amt.value = "";
  tnxDate.value = "";
}
