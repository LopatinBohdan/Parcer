var fs=require('fs');

function Parcer(text){
    this.text=text;
    this.Result=function(){
         fs.readFile("text.txt",'utf-8', function(err,data){
             if(err) throw err;
            var arr=data.toString();
            arr=arr.split("");
            let map=new Map();
            for(let item of arr){
                map.set(item, 1);
            }
            for(let item of map.keys()){
                var count=0;
                for(let subitem of arr){
                    if(item==subitem) count++;
                }
                map.set(item, count);
            }
            console.log(map);
        })
    }
}

module.exports=Parcer;