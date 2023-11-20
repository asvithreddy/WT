var i=0;
function timedcount()
{
    i=i+1;
    postMessage("timedcount()",1000);
}
timedcount();