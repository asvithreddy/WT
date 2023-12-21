// var fs=require('fs')
// console.log("opening a file")
// fs.open('pesu.txt','r',function(err,data)
// {
//     if(err)
//     {
//         return console.error(err)
//     }
//     console.log(data)
//     console.log("file opened succesfully")
// })


//reading a file










//

// var fs=require('fs')
// console.log("going to write into file")
// fs.writeFile('pesu.txt','Pes University',function(err)
// {
//     if(err)
//     {
//         return console.error(err)
//     }
//     console.log("Data written succesfully");
//     console.log("lets read newly written");
//     fs.readFile('pesu.txt',function(err,data){
//         if(err) throw err;
//         console.log(data.toString());
//         console.log("Asynchronous Read "+data.toString())
//     })
// })

// to open a file
var fs=require('fs')
console.log("going to open a file")
fs.open('pesu.txt','r+',function(err,fd)
{
    if(err)
    {
        return console.error(err)
    }
    var buf=new Buffer(1024);
    console.log("file opened sussccefully")
    console.log("Going to truncate fileafter 3 bytes")
    //truncate the opened file
    fs.ftruncate(fd,3,function(err)
    {
        if(err)
        {
            console.log(err);
        }
        console.log("File truncated succesfully")
        fs.read(fd,buf,0,buf.length,0,function(err,bytes)
        {
            if(err) throw err;
            if(bytes>0)
            {
                console.log(buf.slice(0,bytes).toString());
            }
            fs.close(fd,function(err)
            {
                if(err) throw err
            })
        })
    })
})
