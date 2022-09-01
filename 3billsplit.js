Bills = [
    Bill1 = { A: 1000, B: 2000, C: 1000 },
    Bill2 = { A: 300, B: 4000, C: 1000, D: 2000 },
    Bill3 = { A: 500, B: 1000, D: 2000, E: 1000 },
    Bill4 = { A: 20, B: 1000, E: 2000 }
]

// To Calculate the Average of the Bill
function AverageCalculationOfBill(num) {
    AverageBillValue = []
    for (j = 0; j < num.length; j++) {
        sum = 0
        size = 0
        average = 0
        for (i in num[j]) {
            sum += num[j][i]
            size++
            average = sum / size
        }
        AverageBillValue.push(average)
    } return AverageBillValue
} AverageCalculationOfBill(Bills)

// To find the Share Amount Per person
function ShareAmountPerPerson(num) {
    ShareAmount = []
    for (j = 0; j < num.length; j++) {
        SharesPerPerson = {}
        for (i in num[j]) {
            SharesPerPerson[i] = num[j][i] - AverageBillValue[j]
        }
        ShareAmount.push(SharesPerPerson)
    }
    return ShareAmount
} ShareAmountPerPerson(Bills)

// To get the Total peoples present in the bill
function PeoplesInBill(num) {
    people = []
    for (j = 0; j < num.length; j++) {
        for (i in num[j]) {
            if (!people.includes(i)) {
                people.push(i)
            }
        }
    } return people;
} PeoplesInBill(Bills)

// To Get the Total Share Amount per person in Total Bill
function TotalSharesInBill(ShareAmount) {
    PerPerson = people
    TotalShareAmount = {}
    for (i = 0; i < PerPerson.length; i++) {
        total = 0
        for (j = 0; j < ShareAmount.length; j++) {
            for (k in ShareAmount[j]) {
                if (k === PerPerson[i]) {
                    total += ShareAmount[j][k]
                }
            }
        }
        TotalShareAmount[PerPerson[i]] = total
    }
    return TotalShareAmount
} TotalSharesInBill(ShareAmount)

// To Split the Bill according to - Person to Pay and Person to get 
function PersonToPay_PersonToGet_Spliting(TotalShareAmount) {
    PersonToGet = {}
    PersonToPay = {}
    for (i in TotalShareAmount) {
        if (TotalShareAmount[i] > 0) {
            PersonToPay[i] = TotalShareAmount[i]
        } else {
            PersonToGet[i] = TotalShareAmount[i]
        }
    }
    return PersonToGet, PersonToPay;
} PersonToPay_PersonToGet_Spliting(TotalShareAmount)

// Sorting Funtion
function Sorting(a, b) { return b - a }

// Sorting the Splited Bill for absolute values of - Person to Pay and Person to get 
function SortingSplitedBill(PersonToGet, PersonToPay) {
    PersonToGetSort = []    // To convert the object and store it in a array  
    PersonToPaySort = []    // To convert the object and store it in a array  
    TotalPersonToGet = {}   // To convert the array and store it in a object  
    TotalPersonToPay = {}   // To convert the array and store it in a object  
    for (i in PersonToGet) {
        PersonToGetSort.push(PersonToGet[i])
    }
    PersonToGetSort = PersonToGetSort.sort(Sorting).reverse()   // Reverse Sorting to get the absolute value in order
    for (j of PersonToGetSort) {
        for (k in PersonToGet) {
            if (j == PersonToGet[k]) {
                TotalPersonToGet[k] = PersonToGet[k]
            }
        }
    }
    for (i in PersonToPay) {
        PersonToPaySort.push(PersonToPay[i])
    }
    PersonToPaySort = PersonToPaySort.sort(Sorting)
    for (j of PersonToPaySort) {
        for (k in PersonToPay) {
            if (j == PersonToPay[k]) {
                TotalPersonToPay[k] = PersonToPay[k]
            }
        }
    }
    return TotalPersonToGet, TotalPersonToPay;
} SortingSplitedBill(PersonToGet, PersonToPay)

// removing zero funtion
function removeZero(z) {
    ZeroRemoved = {}
    for (i in z) {
        if (z[i] != 0) {
            ZeroRemoved[i] = z[i]
        }
    }
    return (ZeroRemoved)
}

// To get the Final Settlement
function BillSettling(TotalPersonToGet, TotalPersonToPay) {
    for (i in TotalPersonToPay) {
        for (j in TotalPersonToGet) {
            if (TotalPersonToPay[i] != 0 && TotalPersonToGet[j] != 0) {
                if (TotalPersonToPay[i] > Math.abs(TotalPersonToGet[j])) {
                    console.log(`${j} have to pay Rs ${(Math.abs(TotalPersonToGet[j]))} to: ${i}`);
                    TotalPersonToPay[i] = PersonToPay[i] - Math.abs(TotalPersonToGet[j])
                    TotalPersonToGet[j] = 0
                    TotalPersonToGet=removeZero(TotalPersonToGet)

                } else if (TotalPersonToPay[i] < Math.abs(TotalPersonToGet[j])) {
                    console.log(`${j} have to pay Rs ${(Math.abs(TotalPersonToPay[i]))} to: ${i}`);
                    TotalPersonToGet[j] = PersonToPay[i] - Math.abs(TotalPersonToGet[j])
                    TotalPersonToPay[i] = 0
                    TotalPersonToPay=removeZero(TotalPersonToPay)

                } else if (TotalPersonToPay[i] == Math.abs(TotalPersonToGet[j])) {
                    console.log(`${j} have to pay Rs ${(Math.abs(TotalPersonToGet[j]))} to: ${i}`);
                    TotalPersonToPay[i] = 0
                    TotalPersonToGet[j] = 0
                    TotalPersonToGet=removeZero(TotalPersonToGet)
                    TotalPersonToPay=removeZero(TotalPersonToPay)

                }
            }
        }
    }
} BillSettling(TotalPersonToGet, TotalPersonToPay)
