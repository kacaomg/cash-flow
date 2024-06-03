let transactions = [];

function addTransaction() {
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Prosím zadejte platnou částku');
        return;
    }

    const transaction = {
        type: type,
        amount: amount
    };

    transactions.push(transaction);
    updateTable();
    updateTotalBalance();
    document.getElementById('amount').value = '';
}

function updateTable() {
    const tbody = document.querySelector('#cashFlowTable tbody');
    tbody.innerHTML = '';

    transactions.forEach(transaction => {
        const tr = document.createElement('tr');
        const tdType = document.createElement('td');
        const tdAmount = document.createElement('td');

        tdType.textContent = transaction.type === 'income' ? 'Příjem' : 'Výdaj';
        tdAmount.textContent = `${transaction.amount} Kč`;

        tr.appendChild(tdType);
        tr.appendChild(tdAmount);
        tbody.appendChild(tr);
    });
}

function updateTotalBalance() {
    let totalBalance = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'income') {
            totalBalance += transaction.amount;
        } else {
            totalBalance -= transaction.amount;
        }
    });

    document.getElementById('totalBalance').textContent = totalBalance.toFixed(2);
}
