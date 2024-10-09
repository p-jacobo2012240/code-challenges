/**
 * 
Statement 26:
Optimize spending at my favorite gas station.

You have two options:

- Individual gas: It costs 10 euros for each fill-up.
- Membership card: It costs 90 euros per year but each time you fill up the tank it costs 8.2 euros you pay only 78% of the price of the fill-up.

Each time you fill up the tank, you pay 78% of the price of the fill-up that you paid the last time until you reach a maximum discount
of 50%. Accumulate the discount (0.78 ** 3).

Make a function that, when I pass the times I fill up the tank,
tells me if it is worth buying the membership card or not.

Examples:
iMustBeAMember(15);

Returns:
As a casual user it costs you: 150
As a member it costs you: 154.68487999999994
It is not worth it to be a member to be a member

*
*/

const iMustBeAMember = (quantity) => {
    
    let IndividualFilled = 10 * quantity;
    let memberFilled =  90;

    for(let i=1; i < quantity; i++) {

        let discount = (0.78**i);

        if(discount <= 0.50) {
            discount = 0.50;
        }

        memberFilled += 0.82 * discount;
    }

    return { 
        individual: IndividualFilled, 
        member: Number(memberFilled.toFixed(2))
    }

}

// test case...
console.log(iMustBeAMember(15));
