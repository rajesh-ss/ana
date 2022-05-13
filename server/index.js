const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session =  require('express-session');


app.use(cors({

  origin:["http://localhost:3000"],
  methods:['GET', 'POST'],
  credentials: true
  
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
  key:"userId",
  secret: "eg",
  resave: false,
  saveUninitialized: false,
  cokkie:{
    expires: 60 * 60 * 24
  }
}));

const bcrypt = require('bcrypt');
const saltRounds = 10;


const db = mysql.createConnection({
  user: "uuofqr8noewxa5k1",
  host: "bpxxsqkegtgglbmdsk7i-mysql.services.clever-cloud.com",
  password: "mfM521mfkveIJ5utasdX",
  database: "bpxxsqkegtgglbmdsk7i",
});

app.post("/register", (req, res) => {

  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.email;
  const ph = req.body.phone;
  const psw = req.body.password;
  const userName = req.body.userName;
  const id = Math.floor(Math.random() * 11);

  bcrypt.hash(psw, saltRounds, (err, hash) =>{

    if(err){
      console.log(err);
    }

    db.query(
      "INSERT INTO User_T (id, fName, lName, userName, email, phone, password) VALUES (?,?,?,?,?,?,?)",
      [id, fName, lName, userName,email, ph ,hash],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Values Inserted");
        } 
      }
    );

  });


});


app.get('/login', (req, res)=>{

  if(req.session.user){
    res.send({loggedIn: true, user:req.session.user})

  }else{
    res.send({loggedIn: false});
  }


});


app.post("/login", (req, res) => {

  const email = req.body.email;
  const psw = req.body.password;
 // const userName = req.body.userName;

  db.query(

    "select * from  User_T where email = ?;",
    email,
    (err, result) => {

      if (err) {
        res.send({err: err}); 
      } 
          if(result.length >0){

            bcrypt.compare(psw, result[0].password,(error, response) =>{
              if(response){

                req.session.user = result;
                //res.send({loggedIn: true, user:req.session.user})
                console.log(req.session.user);

                const id = result[0].id;
                //const token = jwt.sign(); 



                res.send(result);
              }
              else{

                res.send({message: "Wrong username/password combination"});
                //res.send({loggedIn: false});
          
              }

            });
  
          }
          else{
            res.send({message: "user doesn't exist"});
          }
   
        
     
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  console.log(id+" wage: "+wage);
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
