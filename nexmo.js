let Nexmo = require('nexmo');
let fs = require('fs')

let nexmo = () => {
    this.nexmo = {}
    this.apiKey;
    this.apiSecret;
}

nex.prototype.setCredentials = (apiKey, apiSecret) => {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.nexmo = new Nexmo ({
        apiKey : this.apiKey,
        apiSecret : this.apiSecret
    })
}

nex.prototype.sendSms = (from,toPath,message,split= ",") => {
    let promise = new Promise((resolve,reject) => {
    if(!this.apiKey && !this.apiSecret){
        console.log("apiKey and/or apiSecret not set, use .setCredentials(apiKey,apiSecret)");
        return
    }
    // toPath = file absolute path
    fs.readFile(toPath, 'utf8', (err,data) => {
        if(err){
            console.log(err.message)
            return;
        }
        let toArr = data.split(split);
        let sentSmsCount = 0;
        toArr.forEach((to) => {
            this.nexmo.message.sendSms(from, to, message, (err,responseData) => {
        if(err){
            console.log('err',err.message);
            reject(err)
            return;
        }
        else{
            sentSmsCount += 1      
        }
    })
        })
    let promiseRet = {
        "sentSmsCount":sentSmsCount,
    }
    resolve(promiseRet)
    })

})
return promise
}

nex.prototype.sendSmsSync = (from,toPath,message,split= ",") => {
    if(!this.apiKey && !this.apiSecret){
        console.log("apiKey and/or apiSecret not set, use .setCredentials(apiKey,apiSecret)");
        return
    }
    // toPath = file absolute path
    fs.readFile(toPath, 'utf8', (err,data) => {
        if(err) {
            console.log(err.message)
            return;
        }
        let toArr = data.split(split);
        toArr.forEach((to) => {
            this.nexmo.message.sendSms(from, to, message, (err,responseData) => {
        if(err) {
            console.log('err',err.message);
            return;
        }
    });
        })
    })
}



module.exports = nex;