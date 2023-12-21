var buf1=Buffer.alloc(14,"Pes University")
var buf2=Buffer.alloc(14,"PesUniversity")
var result=buf1.compare(buf2)
console.log(result)// if the output is 0, then the strings are same, if -1 then buf1 is less than buf2, if 1 then buf2>buf1
var r=buf1.compare(buf2)
if(r<0)
{
    console.log(buf1+"comes before"+buf2)
}
else if(r==0)
{
    console.log(buf1+" is same as "+buf2)
}
else{
    console.log(buf1+"comes after "+buf2)
}
var buf3=Buffer.alloc(28)
buf2.copy(buf3)
console.log("buffer2 content is copied to buffer3"+buf3.toString())
console.log(buf3.toString())
