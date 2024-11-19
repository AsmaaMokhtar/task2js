var arrayOfQuotes=[
    {
        'author':'Oscar Wilde',
        'qoute':'Be yourself; everyone else is already taken'
    },
    {
        'author':'Frank Zappa',
        'qoute':'So many books, so little time'
    },
    {
        'author':'Marcus Tullius Cicero',
        'qoute':'A room without books is like a body without a soul.'
    },
    {
        'author':'Elbert Hubbard',
        'qoute':'A friend is someone who knows all about you and still loves you.'
    },
    {
        'author':'Andre Gide, Autumn Leaves',
        'qoute':'It is better to be hated for what you are than to be loved for what you are not.'
    },
    {
        'author':' Pablo Neruda',
        'qoute':'You can cut all the flowers but you cannot keep Spring from coming.'
    },

     {
        'author':' Anne Frank, The Diary of a Young Girl',
        'qoute':'I dont think of all the misery, but of the beauty that still remains.',
    },
    {
        'author':' Marilyn Monroe',
        'qoute':'If you can make a woman laugh, you can make her do anything.',
    },
    {
        'author':'Alfred Tennyson',
        'qoute':'If I had a flower for every time I thought of you...I could walk through my garden forever.',
    }
]

function generateQoute(){
    console.log("selim");
     var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
     console.log(random);
     document.getElementById("authorOutput").innerHTML=`--
     ${arrayOfQuotes[random].author}`;
     document.getElementById("quoteOutput").innerHTML=`\"${
     arrayOfQuotes[random].qoute}\"`;
   
}

function getRandom() {
    return Math.random()*arrayOfQuotes.length+1;
  }
   console.log(getRandom());
