import { connection } from '../../database/connection.js';
import bcrypt from 'bcrypt';
const connect=connection()



// const signup = async (req, res) => {
//     try {
//         console.log(req.body);
//         const { email, password} = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         const customerData = { email, password: hashedPassword};

//         connect.query('insert into customer set ?', customerData, (err, result) => {
//             if (err) {
//                 console.error('Error inserting data: ', err);
//                 return res.status(500).json({ message: 'Internal server error', err });
//             }
//             res.status(201).json({ message: 'Welcome' });
//         });
//     } catch (error) {
//         console.error('Error in signup: ', error);
//         res.status(500).json({ message: 'Internal server error', error });
//     }
// };




// const signin = (req, res) => {
//     const { email, password } = req.body;
//     connect.execute(`select * from customer where email = ? ', ${email}'`, (err, data) => {
//        if(err) return res.status(400).json ({message:"DB err",err})
//        if(data.length ==0 ){

// res.json({message:"not registered yet,please register first"})

//        }else{
//         const matched = bcrypt.compareSync(password, data[0].password);
//         if (matched) {
//             res.status(200).json({ message: "welcome" })
//         } else {
//             res.status(400).json({ message: "Invalid email or password" })

//         }

//     }

//        })
       
//     }
    






// export{
//     signup,
//     signin,
// }
const signup = async (req, res) => {
const query=`SELECT *from customer where email='${req.body.email}'`
connection.execute(query,(err,result)=>{
    if(result.length>=1){
        return res.status(409).json({message:"email is already used"})
    }
    const query2= `insert into customer (fName,lName,email,password,phone) values
     ('${req.body.fName}',  '${req.body.lName}', '${req.body.email}', '${req.body.password}','${req.body.phone}'   )`
     connection.execute(query2,(err,result)=>{
        if(result){
            return res.status(201).json({message:"Welcome"})
        }
     })
})
}

export{
    signup
}



