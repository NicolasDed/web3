const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://azerty:${password}@cluster0.lvcb5hx.mongodb.net/noteApp?retryWrites=true&w=majority`

const phoneSchema = new mongoose.Schema({
    person: String,
    number: String,
})

const Phone = mongoose.model('Phone', phoneSchema)

mongoose
    .connect(url)
    .then((result) => {
        if (process.argv.length === 3) {
            console.log("Phonebook :");
            return Phone.find({}).then(result => {
                result.forEach(phone => {
                    console.log(phone)
                })
            })
        } else {
            const person = process.argv[3]
            const number = process.argv[4]
            const note = new Phone({
                person: person,
                number: number
            })

            console.log(`Added ${person} number ${number} to phonebook`);
    
            return note.save()
        }
    })
    .then(() => {
      return mongoose.connection.close()
    })
    .catch((err) => console.log(err))