# Mongo Practice two

- TODO Muestra las primeras 5 ciudades que empiecen por A ordenadas de manera ascendente, las soluciones deben ser únicas. 
  - db.contacts.find({ 'location.city': /^A/ }, {'location.city': 1}).sort('location.sity').limit(5)
  - db.contacts.find({ 'location.city': /^A/ }).sort({'location.city': 1}).limit(5)
  - db.contacts.aggregate( [
    
        {
          $group : {_id : '$location.city' }
        },
        {
          $match: {'location.city': /^A/}
        },
        {
            $sort: { 'location.city': 1 }
        },
        {
            $limit: 5
        }
    
    ] )

  - {
  distinct: "contacts",
  key: "location.city",
  query: {'location.city': /^A/}
   }

- Crea una colección a parte, que solo contenga a los contactos de Francia (France) y que tengan entre 18 y 50 años. Usa una agregación para ello.
  - db.contacts.aggregate([
    {  $match: {
      'location.country': 'France'
      }
    }, 
    {  $match: {
        'registered.age': {
        $gte: 18,
        $lte: 50
        }
      }
    },
    {$out: 'France1850'}])

- TODO Añade un número favorito a cada contacto, luego crea un bucket agrupando por número favorito que separe en 5 segmentos.

- En la colección de Contatcs, haz una proyección la cual tiene que devolver solo el name y username del contacto.
  - db.contacts.aggregate([
    {
      $project: {"nombre.first": 1, "login.username": 1}
    }
  ])

- TODO Haz una consulta en la colección de Contacts la cual devuelva un documento por cada nombre (name) y que sea único, ordenado por apellido (last), tienes que usar el operador $unwind.

- TODO Haz una proyección convirtiendo la fecha (date) a un formato DD-MM-AAAA, la nueva variable será fechaNacimiento
  - db.contacts.aggregate([
    {
      $project: { 
        _id:0,
        fechaNacimiento:
        {
          $concat:[
            {$toString: '$registered.date'}
          ]
        }
       }
    }
  ])
