# Mongo Practice One

- Listar todos los contactos.
  - db.contacts.find()

- Busca el primer contacto que sea de Alemania (Germany).
  - db.contacts.findOne({ "location.country": "Germany" })

- Busca todos los contactos que tengan Blake como nombre (first).
  - db.contacts.find({ 'name.first':'Blake' })

- Busca los primeros 5 contactos que tengan como género (gender) hombre (male)
  - db.contacts.find({ 'gender' : 'male' }).limit(5)

- Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente.
  - db.contacts.find().sort({ name : -1 }).limit(4)

- Clona la colección de Contacts a CopiaContacts y luego bórrala.
  - db.contacts.aggregate( [ { $out: 'CopiaContacts' } ] )
  - db.CopiaContacts.drop()

- Renombra el campo de name por nombre.
  - db.contacts.updateMany({}, {$rename: {name: 'nombre'}})

- Borra todos los contactos que tengan como estado (state) Florida.
  - db.contacts.deleteMany({'location.state' : 'Florida'})
