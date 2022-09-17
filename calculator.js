const calc={
    symbols:["+","-","*","/","="],
    memory:[],
    screenMemory:"",
    key:function(num){
        document.querySelector('.screen').innerHTML+=num;
        this.screenMemory+=""+num;
    },
    keySymbols:function(symbol){
        document.querySelector('.screen').innerHTML+=symbol;
        this.memory.push(this.screenMemory);
        this.memory.push(symbol);
        this.screenMemory="";
    },
    clear:function(){
            this.memory=[];
            this.screenMemory="";
            document.querySelector('.screen').innerHTML="";
        },
        result:function(){
            this.memory.push(this.screenMemory);
            for(i=0;i<=this.memory.length;i++){
                if(this.memory[i]===this.symbols[0]){
                    let res=Number(this.memory[i-1])+Number(this.memory[i+1]);
                    document.querySelector('.screen').innerHTML=res;
                    this.screenMemory=res;
                    this.memory.push(res);
                }
            else if(this.memory[i]===this.symbols[1]){
                let res=Number(this.memory[i-1])-Number(this.memory[i+1]);
                document.querySelector('.screen').innerHTML=res;
                this.screenMemory=res;
                this.memory.push(res);
            }
            else if(this.memory[i]===this.symbols[2]){
                let res=Number(this.memory[i-1])*Number(this.memory[i+1]);
                document.querySelector('.screen').innerHTML=res;
                this.screenMemory=res;
                this.memory.push(res);
            }
            else if(this.memory[i]===this.symbols[3]){
                let res=Number(this.memory[i-1])/Number(this.memory[i+1]);
                document.querySelector('.screen').innerHTML=res;
                this.screenMemory=res;
                this.memory.push(res);
            }
                
            }
        }
    }
    