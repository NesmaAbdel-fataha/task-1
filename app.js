// const fs = require("fs")
// //fs.writeFileSync("data1.txt","hello world")

//const { require } = require("yargs");

// fs.appendFileSync("data1.txt"," nesma and heba")
// //npmconsole.log(fs.readFileSync("data1.txt").toString())



// const x = require("./alldata")
// console.log(x.frist)
// console.log(x.last)
// console.log(x.fun1(3,8))
////////////////////////////////////////
// const validator = require("validator")

// console.log(validator.isEmail("islam@gmail.com"))
// console.log(process.argv)
// console.log(process.argv[2])
//////////////////////////////////////////////////////
//console.log(process.argv[2])
const data10 = require("./data10")


const yargs = require("yargs")
//console.log(yargs.argv)
yargs.command({
    command : "add",
    describe:"to add an item",
    builder:{
       fname : {
            describe:"name",
            demandOption : true,
            type : "string"
        },
       lname : {
            describe:"city",
            demandOption : true,
            type : "string"
        }
    },

    handler : (x)=>{
        //console.log('you have just added an item')
//console.log(x.fname , x.lname)
data10.addPerson(x.id , x.fname , x.lname  , x.city)


    }
})
//console.log(yargs.argv)


yargs.command({
    command: 'deleted',
    describe: 'delete item',
    handler: (x)=>{
       // console.log("item deleted")
       data10.deletdata(x.id)
    }
})

yargs.command({
    command: 'list',
    describe: 'to list item',
   
    handler: ()=>{
       // console.log("item deleted")
       data10.listdata()
    }
})







yargs.parse()
//