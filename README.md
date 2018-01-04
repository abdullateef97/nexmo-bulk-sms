# Nexmo Bulk Sms Helper

 A Node.js library for sending bulk sms using [nexmo](https://www.nexmo.com) from Phone Numbers listed in a file

# Get Started
```
~$ npm install nexmo-bulk-sms
```

# Usage
After Installing import nexmo-bulk-sms
```
var nexmoBulk  = require('nexmo-bulk-sms');
```
## Configure
Create your api key and api secret from [ nexmo ](https://www.nexmo.com)

```
nexmoBulk.setCredentials(apiKey, apiSecret);
```

## Parameters
    from :- the Sender of the message,
    toPath :- the file path containing the Phone Numbers
    message :- the content of the message to be sent
    split (Optional) :- the string/parameters seperating the phone numbers,          defaults to ','
    N.B :- Ignore the '+' sign infront of phone numbers, instead of '+23456868' use '23456868'
    
## Send SMS
 ### Synchronous
This sends the messages as a synchronous process
```
nexmoBulk.sendSms(from,toPath,message,split);
```
#### Example
```
nexmoBulk.sendSms('google','./google.txt','hello world')
nexmoBulk.sendSms('google','./google.txt','hello world','**')
```
 ### Asynchronous
 ```
 nexmoBulk.sendSmsAsync(from,toPath,message,split).then( (success) => {
 Console.log(success)
 }).catch(err => Console.log(err))
 ```

## Contributing
If you would like to contribute, fork the repo, make your changes and create a pull request

## License
This Library was released under MIT License

## Reference
[Nexmo Api Documentation](https://developer.nexmo.com/messaging/sms/overview)

## Contributors
[Abdullateef AdeniranYusuf](https://github.com/abdullateef97)
