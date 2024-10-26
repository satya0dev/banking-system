const user = {
    name: 'satya',
    pin: '1234',
    balance: 500
};

function loginCallback(username, pin) {
    if (username === user.name && pin === user.pin) {
        // callback(null, 'Login successful');
        return true;
    } else {
        // callback('Invalid login credentials', null);
        return false;
    }
}

function depositCallback(amount, callback) {
    if (amount > 0) {
        user.balance += amount;
        callback(null, `Successfully deposited ₹${amount}. New balance: ₹${user.balance}`);
    } else {
        callback('Invalid deposit amount', null);
    }
}

function withdrawCallback(amount, callback) {
    if (amount > 0 && amount <= user.balance) {
        user.balance -= amount;
        callback(null, `Successfully withdrew ₹${amount}. New balance: ₹${user.balance}`);
    } else {
        callback('Insufficient balance', null);
    }
}

depositCallback(100, (errorMsg, depositMsg) => {
    if (loginCallback('satya', '1234')) {
        console.log(depositMsg);
    } else {
        console.log(errorMsg);
    }
});

withdrawCallback(100, (errorMsg, withdrawMsg) => {
    if (loginCallback('satya', '1234')) {
        console.log(withdrawMsg);
    } else {
        console.log(errorMsg);
    }
});
