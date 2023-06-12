// There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

// Examples
// uniqueStyles([
//   "Dub,Dancehall",
//   "Industrial,Heavy Metal",
//   "Techno,Dubstep",
//   "Synth-pop,Euro-Disco",
//   "Industrial,Techno,Minimal"
// ]) ➞ 9

// uniqueStyles([
//   "Soul",
//   "House,Folk",
//   "Trance,Downtempo,Big Beat,House",
//   "Deep House",
//   "Soul"
// ]) ➞ 7


const uniqeStyle = (albums) => {
 let styles = new Set();

 for (let album of albums) {
    let newData = album.split(',')
   for (let data of newData) {
    styles.add(data)
   }
 }
 console.log(styles.size)
 
}

uniqeStyle([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
  ])