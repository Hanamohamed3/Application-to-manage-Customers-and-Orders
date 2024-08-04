import express from 'express'
// import { connection } from './database/connection.js'
import custRoutes from './modules/customer/customer.routes.js'
import productRoutes from './modules/products/products.routes.js'
// import postsRoutes from './modules/posts/posts.routes.js'
// import cors from 'cors'

const app = express()
const port = 3000


app.use(express.json())
// connection()
// app.use(cors())
app.use("/authhh",custRoutes)
app.use("/products",productRoutes)
// app.use("/productss",productRoutes)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))