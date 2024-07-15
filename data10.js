const fs = require("fs");
//const alldata = require("./alldata");
// 1 making func to pass it 2value
const addPerson = (id , fname , lname , city) =>{
    // 2 that because we need load data to push the data
    const alldata = loadInfo()
const dublicated = alldata.filter((obj)=>{
return obj.id === id
})
if(dublicated.length == 0){
//console.log(dublicated)
    //4 making the push operating
    alldata.push({
id:id,    
fname:fname,
lname:lname,
city:city

    })
//5 save data
    savealldata(alldata)}else{
        console.log("error duplicated data")
    }
}
//3 load data func:read data in file , and parsing to obj
const loadInfo = ()=>{
    try{const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson) }
        catch{
            return []
        }
    

}
//5
const savealldata = (alldata)=>{
    const savealldatajson = JSON.stringify(alldata)
    fs.writeFileSync("data10.json" , savealldatajson)
}
//////////////////////////////////////////////////////////////
// deleted data :
const deletdata = (id) =>{
    const allData = loadInfo()
    const dataKeep =allData.filter((obj)=>{
        return obj.id !== id
    })

    // console.log(dataKeep)
    // console.log('you have successfully deleted an item')
    savealldata(dataKeep)
}
// to read data
// const readdata = (city , fname) =>{
//     const allData = loadInfo()

//     const itemneeded = allData.find((obj)=>{
// return obj.city == city && obj.fname == fname
//     })
//     //console.log(itemneeded)
//     if(itemneeded){
//         console.log(itemneeded)
//     }else{
//         console.log("id needed not found")
//     }
//}
////////////////////////
const listdata =()=>{
    const allData =loadInfo()
    allData.forEach((obj)=>
    {console.log(obj.fname , obj.city)}
    )
}








module.exports = {
    addPerson,
deletdata,
listdata
}