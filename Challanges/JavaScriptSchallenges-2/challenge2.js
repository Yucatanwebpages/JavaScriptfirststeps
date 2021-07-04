// Defining constans

// Test 1 

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

// Calculating BMI

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

// If statment

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is greater than John's BMI ${johnWeight}  `)
} else {
    console.log(`John's BMI ${johnBMI} is greater than Mark's BMI ${markBMI}`)
}

// Display in the console 

