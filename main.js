
var request = require("request");
var myArgs = process.argv.slice(2);
var myArgs = myArgs[1]
if (myArgs == "true"){
    myArgs = true
}
if (myArgs == "false"){
    myArgs = false
}
console.log('myArgs: ', myArgs);
var options = { method: 'GET',
  url: 'http://192.168.10.184/api/mmRhFnywhmdCXcNKOiprB4aT3n-WJtlNUYW--5NJ/lights/',
  headers: 
   { 'postman-token': '25660bcf-c0e5-4f4c-a4f4-197bae406aaf',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var obj = JSON.parse(body);
  for (x in obj){
    console.log(obj[x].name)
    console.log(obj[x])

    var options = { method: 'PUT',
    url: `http://192.168.10.184/api/mmRhFnywhmdCXcNKOiprB4aT3n-WJtlNUYW--5NJ/lights/${x}/state`,
    headers: 
    { 'postman-token': 'a68088bb-01d8-39b2-7e1b-49a0abba6fca',
        'cache-control': 'no-cache',
        'content-type': 'application/json' },
    body: { on: myArgs },
    json: true };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    });



  }
});
