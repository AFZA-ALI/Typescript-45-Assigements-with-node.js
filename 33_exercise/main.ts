//creating a array
let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9];

//using for-loop
for(let oneNumbers of numbers){
    let ordinalEnding: string;

    if(oneNumbers === 1){
        ordinalEnding = "st"
    }
    else if(oneNumbers === 2){
        ordinalEnding = "nd"
    }
    else if(oneNumbers === 3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"    
    }

    console.log(`${oneNumbers}${ordinalEnding}`);
}