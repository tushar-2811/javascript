import crypto from 'crypto';

const input = "100xdevs";



function findStringWithPrefix(stringPrefix , hashPrefix){
    let temp = 0;
     

     while(true){
        let input =  stringPrefix + temp.toString();
        const hash = crypto.createHash('sha256').update(input).digest('hex');
        if(hash.startsWith(hashPrefix)){
            return {
                hash ,
                input
            }
        }else{
            temp++;
        }
     }
}

const ans = findStringWithPrefix('tushar => 100devx' , '000');
console.log(ans.hash);
console.log(ans.input);
