let data=[
    {
         name:'Violet color',
    },
    {
        name:'Indigo color',
   },
   {
    name: 'Blue Color',
    },
    {
        name:'Green color',
   },
   {
       name:'Yellow color',
  },
  {
   name: 'Orange Color',
   },

   {
    name: 'Red Color',
    },


];

const infor =document.querySelector('#infor')

let details= data.map(function(item){
    return(
        '<div>'+ item.name +'</div>'
    )
});

infor.innerHTML =details.join('\n')