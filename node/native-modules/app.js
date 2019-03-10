const http = require('http'); // Used to create Http related tasks/servers
const dns = require('dns');   // Lookup address of a given url
const fs = require('fs'); // Used for file i/o operations


// Creating a server with the http module
    // http.createServer((request, response) => {
    //   response.writeHead(200);
    //   response.end('Hello, World!');
    // }).listen(3000);

    // console.log('Server running on http://localhost:3000');


// Grab the ip address for a given site using a dns lookup
    // dns.lookup('google.com', function (err, address, family) { 
    //     console.log(' Address: ' + address + ', Family: '  + family + ', Err: ' + err); 
    // });


// File i/o
// File and stream I/O (input/output) refers to the transfer of data either to or from a storage medium
// Imagine having to open a file and write into it, this takes time
// This function creates a message.text file and adds the "Hello Node.js text to it".
// This is asyncronous so writing file... will log first.
    // fs.writeFile('message.txt', 'Hello Node.js', function () { 
    //     console.log('Saved.');
    // }); 
    // console.log('Writing file...');
    //                             // encoding required to read or it will return a buffer
    // fs.readFile('message.txt', {encoding: 'utf-8'}, function(err, data) { 
    //     console.log(data); 
    // });



// Web Server
    // var server = http.createServer(function (request, response) { 
    //     response.end('Hello Node.js'); 
    // });
    // server.close() // Shut down the server to configure it to do something else
    // server = http.createServer(function (request, response) { 
    //     response.end(request.headers['user-agent']); // Sends user browser info to client on request.
    // })
    // server.listen(9000)

// NODE FULLY SUPPORTS ASYNC-AWAIT ECMA7 Syntax


// Node Commands
    // npm list -g --depth=0 => lists out global packages and their version numbers
    // Must use npm init -y, and then install packages locally with npm i package-name --save
        // --no-save to not have it added to package.json


// Package-lock.json
    // Introduced in npm v5, the purpose of this file is to ensure that the dependencies remain the same on all machines the project is installed on. 