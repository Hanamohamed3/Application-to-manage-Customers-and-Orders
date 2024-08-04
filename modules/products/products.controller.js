// app.post('/addProduct'
import { connection } from '../../database/connection.js';
const connect = connection();

const addProduct = (req, res) => {
    const { pName, category, price } = req.body;
    const query = 'insert into product (pName, category, price) values (?, ?, ?)';
    connect.query(query, [pName, category, price], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Product added successfully!');
    });
};


    
  












export{
    addProduct ,
      
    
}