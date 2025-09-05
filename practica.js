//¿Cuál es el promedio del costo de los cursos por nivel (principiante, intermedio, avanzado)?


db.cursos.aggregate([
    {$group: {
        _id: '$nivel',
        promedio: {$avg: '$precio' }
    }}
])

//Listar los estudiantes que tienen más de una inscripción en diferentes cursos, mostrando su nombre y cuántos cursos tienen.

db.inscripciones.aggregate([
    {$group: {
        _id: '$estudiante',
        cursos: {$sum: 1}
    }}, {$match:{cursos: {$gt: 2}}}

])

//Calcular cuántos instrumentos hay en total disponibles por cada sede.

db.instrumentos.aggregate([
    {$group: {
        _id: '$sedeId',
        disponibles: {$sum:1}
    }},
    {$lookup: {
        from: 'sedes',
        localField: '_id',
        foreignField: '_id',
        as: 'sede'
    }},
    {$project: {_id:0, disponibles:1 , 'sede.nombre_sede': 1}}
])

//Encontrar los tres cursos más caros (precio más alto) y mostrar su sede, instrumento, nivel y capacidad.


db.inscripciones.aggregate([
    {$sort: {costo: -1}}, 
    {$limit: 3},
    {$lookup: {
        from: 'cursos',
        localField: 'curso',
        foreignField: 'nombre_curso',
        as: 'info_curso'
    }},
    {$project: {_id: 0, curso: 1, sede: 1, 'info_curso.instrumento':1, 'info_curso.nivel': 1, 'info_curso.capacidad': 1 
    }}
])