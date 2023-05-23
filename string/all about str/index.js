function  allAboutStr ( str ) {
    const len = str.length
    const first = str[0]
    const second = str[1]
    const last = str[len-1]
    const midPoint = len / 2
    const middle = Number.isInteger(midPoint) ?  str.slice(midPoint-1,midPoint+1) : str[Math.floor(midPoint)];
    const occurance = str.indexOf(second,second)
    const repeated = occurance !== -1 ? `@ index ${occurance}`: `not found` ;
    return [len, first, last, middle, repeated]

}