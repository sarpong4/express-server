const express = require('express')
const app = express();

const products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        category: "Electronics",
        price: 9900,
        currency: "USD",
        image: "",
        stars: 4,
        review: "This product is amazing!"
    }, {
        id:2,
        name: "Butter Bread",
        category: "Foods",
        price: 15,
        currency: "USD",
        image: "", 
        stars: 4,
        review: "Best bread ever!"
    }
];

const customers = [
    {
        id: 1,
        name: "Reagan Kofi Marfo",
        gender: "Male"
    },
    {
        id: 2,
        name: "Vera Pomaa",
        gender: "Female"
    },
    {
        id: 3,
        name: "Mark Atta Mensah",
        gender: "Male"
    }
];

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/prods', (req, res) => {
    res.json(products);
})

app.get('/customers', (req, res) => {
    res.json(customers);
})
app.get(`/customers/:cust_id`, (req, res) => {
    // console.log(req.params.cust_id)
    const { cust_id } = req.params;
    customers.filter((element) => {
        if (element.id === Number(cust_id)){
            res.json(element)
        }
    });
})

app.listen(3000, () => {
    console.log('Up and Running')
})