// superbowlWin = (record) => {
//     const result = record.find(record => record.result === 'W');
//     return !! result ? result.year : undefined;

// }

// function superbowlWin(record){

// }

let superbowlWin = function (record) {
    const result = record.find(function (record) {
        return record.result === 'W'
    })
    return result ? result.year : undefined;
}


