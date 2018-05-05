var mysql = require("mysql"),
    inquire = require("inquire"),
    table = require("cli-table"),
    color = require("colors"),
    connection = mysql.createConnection({
        host:"127.0.0.1",
        port:8889,
        user: "root",
        password:"root",
        database:"famazon_DB"
    })

    connection.connect(err=>{
        if(err) throw err
        startTrans()
    })

    function startTrans() {
        


    }