import mysql2 from 'mysql2';

export const connection= () =>{
    const connect = mysql2.createConnection({
    host:"localhost",
    database:'assignment5',
    user:"root",
    password:""
})
connect.connect((err)=>{
    if(err) console.log(`database error ${err}`);
    console.log("connected");
});

return connect;
}