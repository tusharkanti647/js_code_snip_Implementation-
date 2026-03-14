const express = require('express')
const { error } = require('node:console')

const app = express()
app.use(express.json())

const data = []

app.get('/', (req, res) => {
    res.send(' i am ok')
})

app.post('/add', (req, res) => {
    console.log('jjjjj')
    let { name } = req.body

    let data1 = { name, id: Date.now() }
    data.push(data1)

    res.status(200).json(data1)
})

// app.get('/get/:id', (req, res) => {
//     const id = req.params.id
//     const data1 = data.find((ele) => ele.id == id)
//     res.status(200).json(data1)
// })

app.get('/get/:id', (req, res) => {
    const id = Number(req.params.id); // convert string → number

    const data1 = data.find(ele => ele.id === id);

    if (!data1) {
        return res.status(404).json({ error: 'Data not found' });
    }

    res.status(200).json(data1);
});

app.put('/add/:id', (req, res) => {
    console.log('jjjjj')
    const id = req.params.id
    let { name } = req.body
    console.log(data, req.params)
    let ind = data.findIndex((ele) => ele.id == id)

    if (ind === -1) {
        return res.status(404).json({ error: 'data is not present' })
    }
    data[ind].name = name

    res.status(200).json(data[ind])
})

app.listen(3000, () => console.log('server is runing'))