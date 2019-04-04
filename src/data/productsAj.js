
export async function getData(type=1){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type == 1){
        resolve(['resolve good!!!'])
      }else{
        reject(['fuck you XXXX'])
      }

    }, 3000)
  });
}



// export async function getData(name,index,counts){
//   return new Promise(resolve => {
//     setTimeout(()=>{
//     if(index===0){
//       return{
//         code:1,
//         allNums:48,
//         arr: [
//         {
//           id: 1,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/01.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 2,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/02.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 4,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/04.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 6,
//           name: index + 'Sessel Little',
//           price: 119.99,
//           image: 'images/06.jpg',
//           urllink:'',
//           from:'amazon'
//         },
//         {
//           id: 5,
//           name: index + 'Sessel Peacock',
//           price: 599.99,
//           image: 'images/05.jpg',
//           urllink:'',
//           from:'target'
//         },
//         {
//           id: 3,
//           name: index + 'Sessel Anna',
//           price: 149.99,
//           image: 'images/03.jpg',
//           urllink:'',
//           from:'kmart'
//         },{
//           id: 10,
//           name: index + 'Sessel LittleSessel LittleSessel Little',
//           price: 119.99,
//           image: 'images/06.jpg',
//           urllink:'',
//           from:'amazon'
//         },
//         {
//           id: 9,
//           name: index + 'Sessel Peacock',
//           price: 599.99,
//           image: 'images/05.jpg',
//           urllink:'',
//           from:'target'
//         },
//         {
//           id: 11,
//           name: index + 'Sessel Anna',
//           price: 149.99,
//           image: 'images/03.jpg',
//           urllink:'',
//           from:'kmart'
//         },
//         {
//           id: 21,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/01.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 12,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/02.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 14,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/04.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 31,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/01.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 302,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/06.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 34,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/06.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 36,
//           name: index + 'Sessel Little',
//           price: 119.99,
//           image: 'images/06.jpg',
//           urllink:'',
//           from:'amazon'
//         }
//       ]}
//     }
//     if(index===counts*1){
//       return{
//         code:1,
//         allNums:48,
//         arr: [
//         {
//           id: 41,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/07.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 42,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/07.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 44,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/07.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 46,
//           name: index + 'Sessel Little',
//           price: 119.99,
//           image: 'images/10.jpg',
//           urllink:'',
//           from:'amazon'
//         },
//         {
//           id: 45,
//           name: index + 'Sessel Peacock',
//           price: 599.99,
//           image: 'images/11.jpg',
//           urllink:'',
//           from:'target'
//         },
//         {
//           id: 63,
//           name: index + 'Sessel Anna',
//           price: 149.99,
//           image: 'images/12.jpg',
//           urllink:'',
//           from:'kmart'
//         },{
//           id: 410,
//           name: index + 'Sessel LittleSessel LittleSessel Little',
//           price: 119.99,
//           image: 'images/07.jpg',
//           urllink:'',
//           from:'amazon'
//         },
//         {
//           id: 49,
//           name: index + 'Sessel Peacock',
//           price: 599.99,
//           image: 'images/08.jpg',
//           urllink:'',
//           from:'target'
//         },
//         {
//           id: 411,
//           name: index + 'Sessel Anna',
//           price: 149.99,
//           image: 'images/09.jpg',
//           urllink:'',
//           from:'kmart'
//         },
//         {
//           id: 421,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/10.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 412,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/11.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 414,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/12.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 431,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/07.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 432,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/10.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 434,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/10.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 436,
//           name: index + 'Sessel Little',
//           price: 119.99,
//           image: 'images/10.jpg',
//           urllink:'',
//           from:'amazon'
//         }
//       ]}
//     }if(index===counts*2){
//       return{
//         code:1,
//         allNums:48,
//         arr: [
//         {
//           id: 541,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/13.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 542,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/13.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 544,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/13.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 546,
//           name: index + 'Sessel Little',
//           price: 119.99,
//           image: 'images/16.jpg',
//           urllink:'',
//           from:'amazon'
//         },
//         {
//           id: 545,
//           name: index + 'Sessel Peacock',
//           price: 599.99,
//           image: 'images/16.jpg',
//           urllink:'',
//           from:'target'
//         },
//         {
//           id: 563,
//           name: index + 'Sessel Anna',
//           price: 149.99,
//           image: 'images/14.jpg',
//           urllink:'',
//           from:'kmart'
//         },{
//           id: 5410,
//           name: index + 'Sessel LittleSessel LittleSessel Little',
//           price: 119.99,
//           image: 'images/15.jpg',
//           urllink:'',
//           from:'amazon'
//         },
//         {
//           id: 549,
//           name: index + 'Sessel Peacock',
//           price: 599.99,
//           image: 'images/16.jpg',
//           urllink:'',
//           from:'target'
//         },
//         {
//           id: 5411,
//           name: index + 'Sessel Anna',
//           price: 149.99,
//           image: 'images/09.jpg',
//           urllink:'',
//           from:'kmart'
//         },
//         {
//           id: 5421,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/16.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 5412,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/02.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 5414,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/12.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 5431,
//           name: index + 'Ohrensessel Josslyn',
//           price: 499.99,
//           image: 'images/07.jpg',
//           urllink:'',
//           from:'ww'
//         },
//         {
//           id: 5432,
//           name: index + 'Sessel Sofie',
//           price: 249.99,
//           image: 'images/04.jpg',
//           urllink:'',
//           from:'coles'
//         },
//         {
//           id: 5434,
//           name: index + 'Schlafsessel Rovigo',
//           price: 239.99,
//           image: 'images/04.jpg',
//           urllink:'',
//           from:'ebay'
//         },
//         {
//           id: 5436,
//           name: index + 'Sessel Little',
//           price: 119.99,
//           image: 'images/04.jpg',
//           urllink:'',
//           from:'amazon'
//         }
//       ]}
//     }else{//拉取完了
//       return {
//         code:1,
//         allNums:48,
//         arr:[]
//       };
//     }
//   },2000)
//   })
  


// }


