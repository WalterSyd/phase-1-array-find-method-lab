// code your solution here

function superbowlWin(record){
    //check if win is present and return year
    let win = record.find(obj => obj.result ==="W");
    if (win){
        return win.year;
    }else
        return undefined;
}

console.log(superbowlWin);