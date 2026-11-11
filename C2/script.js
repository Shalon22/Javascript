// 1. Create variables
let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

// 2. Create a while loop
while (total < goal) {

    // Bonus: Safety net
    if (month > 24) {
        break;
    }

    // 3. Add monthly savings to total
    total = total + saving;

    // 4. Display monthly savings
    let message = `Month ${month}: saved KES ${saving}, total KES ${total}`;

    // 5. Check if monthly saving is 500 or more
    if (saving >= 500) {
        message += " - Big month!";
    }

    console.log(message);

    // 6. Increase month and monthly saving
    month++;
    saving += 50;

}

// 7. Display final result
if (total >= goal) {
    console.log(`Goal reached in month ${month - 1} with KES ${total}!`);
} else {
    console.log("Savings stopped before reaching the goal.");
}
