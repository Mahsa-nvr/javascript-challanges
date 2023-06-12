const multipleTable = (n) => {
    let table = []
   for( let i=1; i<= n; i++) {
    let row = []
      for (let j=1; j<= n ; j++) {
        row.push(i*j)
      }
      table.push(row)
   }
console.log(table)
}

multipleTable(5)