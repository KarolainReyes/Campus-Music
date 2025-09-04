
//Consulatas con Aggregation Framework

//¿Cuántos estudiantes se inscribieron por sede en el último mes?

db.inscripciones.aggregate([
    {$match: {fecha_inscripcion: {$gte: new Date('2025-09-01')}}},
    {$lookup: {
        from: 'sedes',
        localField: 'sedeId',
        foreignField: '_id',
        as: 'Sede' 
    }}, {$group: {_id: '$Sede.nombre_sede', estudiantes_inscritos: {$sum:1}}}
])

//¿Cuáles son los cursos más demandados en cada sede?

db.inscripciones.aggregate([
    {$group: {_id: {sedeID: '$sedeId', cursoID: '$cursoId'}, total: {$sum:1}}}, 
    {$sort: {total:-1}}, {$group:{_id: '$_id.sedeID', curso: {$first: '$_id.cursoID'}, total: {$first: '$total'}}},
    {$lookup:{
        from: 'cursos',
        localField: 'curso',
        foreignField: '_id',
        as: 'Curso' 
    }},
    {$lookup:{
        from: 'sedes',
        localField: '_id',
        foreignField: '_id',
        as: 'Sede' 
    }}
])

//¿Cuál es el ingreso total generado por inscripciones en cada sede?

db.inscripciones.aggregate([{$group: {_id: '$sedeId', total: {$sum:"$costo"}}},
    {$lookup:{from:"sedes",localField:"_id",foreignField:"_id",as:"Sede"}},
    {$project:{_id:0,"Sede.nombre_sede":1,total:1}}
    
])

//¿Qué profesor tiene más estudiantes asignados?



//¿Qué instrumento es el más reservado?

db.reservas_instrumentos.aggregate([
    {$group:{_id:"$tipo_instrumento",reservas:{$sum:1}}},
    {$sort:{reservas:-1}},
    {$limit:1}
])

//Mostrar el historial de cursos de un estudiante (fecha, sede, curso, profesor, nivel, costo).

db.inscripciones.aggregate([
    {$lookup:{from:"estudiantes",localField:"estudianteId",foreignField:"_id",as:"Estudiante"}},
    {$match:{"Estudiante.nombre_completo":"Andresito Leal"}}])

//Listar los cursos actualmente en ejecución en cada sede.



//Detectar cursos que excedieron el cupo permitido en algún momento.