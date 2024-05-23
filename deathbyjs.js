//STEP 1
// function sortLetters(str)
// {
//    return str.split("").sort().join("")  
// }
// console.log(sortLetters("string"))

//STEP 2
// function capitalize(str)
// {
//     let strArr=str.split(" ")
//     for(let i=0;i<strArr.length;i++)
//     {
//         strArr[i]=strArr[i].substring(0,1).toUpperCase()+ strArr[i].substring(1)
//     }
//     return strArr.join(" ")
    
// }
// console.log(capitalize("the quick brown fox"))

// //STEP 3

// function countVowelsfunc(str)
// {
//     let count=0
//     let lt

//     let strArr= str.trim().split('')
//     let vowelsArr=["a","e","i","o","u"]
//     strArr.forEach((lt )=>
//     {
//         if(vowelsArr.includes(lt) )
//         {
//             count++
//         }
//     })
//     return count

// }
// console.log(countVowelsfunc("The quick brown fox"))

//STEP 4

// function generateRandomStringId(len)
// {
//     let id=new Array(len)
//     for(i=0;i<len;i++)
//     {
//         let x=randomNumber(65,122)
        
//         let y=String.fromCharCode(x)
//     }
//     return id.join("")

// }

// function randomNumber(min, max) {
//     let r= Math.random() * (max - min) + min;
// }
// console.log(generateRandomStringId(8))


//STEP 5

// function longestNameFinder(arrList)
// {
//     let longestName=arrList[0]
//     let longestNameLength=arrList[0].length
//     for(i=1;i<arrList.length;i++)
//     {
//         if (arrList[i].length>longestNameLength)
//         {
//             longestName=arrList[i]
//             longestNameCount=arrList[i].length
//         }
       
//     }
//     return longestName
// }

// let countryList=["Australia", "Germany", "United States of America"]
// console.log(longestNameFinder(countryList))
