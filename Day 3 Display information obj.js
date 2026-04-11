function displayInformation(n) {
     for (let index = 0; index < n.length; index ++){
       if (n[index].readingStatus == true){
         console.log(`Already read '${n[index].title}' by ${n[index].author}.`)
       }else{
         console.log(`You still need to read '${n[index].title}' by ${n[index].title}.`)
       }
     }
} 

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation(library);
