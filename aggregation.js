
//Consulatas con Aggregation Framework

//¿Cuántos estudiantes se inscribieron por sede en el último mes?

db.inscripciones.aggregate([
  {
    $match: {
      fecha_inscripcion: {
        $gte: ISODate("2025-08-04T00:00:00Z"),
        $lte: ISODate("2025-09-04T23:59:59Z")
      }
    }
  },
  {
    $group: {
      _id: "$sede",
      total_inscripciones: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      total_inscripciones: 1
    }
  }
])

//¿Cuáles son los cursos más demandados en cada sede?

db.inscripciones.aggregate([
  // agrupamos por sede y curso para contar inscripciones
  {
    $group: {
      _id: { sede: "$sede", curso: "$curso" },
      total_inscripciones: { $sum: 1 }
    }
  },
  // reorganizamos para agrupar por sede y tener lista de cursos con su demanda
  {
    $group: {
      _id: "$_id.sede",
      cursos: {
        $push: {
          curso: "$_id.curso",
          total_inscripciones: "$total_inscripciones"
        }
      }
    }
  },
  // ordenamos la lista de cursos dentro de cada sede por inscripciones descendente
  {
    $project: {
      sede: "$_id",
      cursos: {
        $sortArray: { input: "$cursos", sortBy: { total_inscripciones: -1 } }
      },
      _id: 0
    }
  },
  // nos quedamos solo con el curso más demandado
  {
    $project: {
      sede: 1,
      curso_mas_demandado: { $arrayElemAt: ["$cursos", 0] }
    }
  }
])


//¿Cuál es el ingreso total generado por inscripciones en cada sede?

db.inscripciones.aggregate([
  {
    $group: {
      _id: "$sede",
      ingreso_total: { $sum: "$costo" },
      total_inscripciones: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      ingreso_total: 1,
      total_inscripciones: 1
    }
  },
  {
    $sort: { ingreso_total: -1 } // para ver de mayor a menor
  }
])



//¿Qué profesor tiene más estudiantes asignados?

db.inscripciones.aggregate([
  {
    $group: {
      _id: "$profesor",
      total_estudiantes: { $sum: 1 },
      estudiantes: { $addToSet: "$estudiante" } // para evitar duplicados si un mismo estudiante repite
    }
  },
  {
    $project: {
      _id: 0,
      profesor: "$_id",
      total_estudiantes: { $size: "$estudiantes" } // cuenta estudiantes unicos
    }
  },
  {
    $sort: { total_estudiantes: -1 }
  },
  {
    $limit: 1 // solo el top 1
  }
])


//¿Qué instrumento es el más reservado?

db.reservas_instrumentos.aggregate([
  {
    $group: {
      _id: "$instrumentoId",
      total_reservas: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "instrumentos",
      localField: "_id",
      foreignField: "_id",
      as: "instrumento"
    }
  },
  {
    $unwind: "$instrumento"
  },
  {
    $project: {
      _id: 0,
      instrumento: "$instrumento.tipo_instrumento",
      total_reservas: 1
    }
  },
  {
    $sort: { total_reservas: -1 }
  },
  {
    $limit: 1
  }
])



//Mostrar el historial de cursos de un estudiante (fecha, sede, curso, profesor, nivel, costo).

db.inscripciones.aggregate([
  {
    $match: { estudiante: "Laura Medina" } 
  },
  {
    $lookup: {
      from: "cursos",
      localField: "curso",
      foreignField: "nombre_curso",
      as: "curso_info"
    }
  },
  { $unwind: "$curso_info" },
  {
    $project: {
      _id: 0,
      fecha: "$fecha_inscripcion",
      sede: "$sede",
      curso: "$curso",
      profesor: "$profesor",
      nivel: "$curso_info.nivel",
      costo: "$costo"
    }
  },
  { $sort: { fecha: 1 } } //orden por fecha ascendente
])



//Listar los cursos actualmente en ejecución en cada sede.

db.sedes.aggregate([
  // desanidamos el array de cursos_disponibles
  { $unwind: "$cursos_disponibles" },
  
  // filtramos solo los cursos en estado Activo
  { $match: { "cursos_disponibles.estado": "Activo" } },
  
  // lookup a la colección cursos
  {
    $lookup: {
      from: "cursos",
      localField: "cursos_disponibles.id_curso",
      foreignField: "_id",
      as: "curso_info"
    }
  },
  { $unwind: "$curso_info" },
  
  // proyección final
  {
    $project: {
      _id: 0,
      sede: "$nombre_sede",
      ciudad: "$ciudad",
      curso: "$curso_info.nombre_curso",
      instrumento: "$curso_info.instrumento",
      nivel: "$curso_info.nivel",
      semanas_duracion: "$curso_info.semanas_duracion",
      capacidad: "$curso_info.capacidad",
      cupos_disponibles: "$curso_info.cupos_disponibles",
      precio: "$curso_info.precio"
    }
  },
  
  // se ordena por sede y curso
  { $sort: { sede: 1, curso: 1 } }
])


//Detectar cursos que excedieron el cupo permitido en algún momento.

db.inscripciones.aggregate([
  // agrupar por curso y contar cuántos estudiantes se inscribieron
  {
    $group: {
      _id: "$curso",
      total_inscritos: { $sum: 1 }
    }
  },
  // unir con cursos para conocer la capacidad
  {
    $lookup: {
      from: "cursos",
      localField: "_id",
      foreignField: "nombre_curso",
      as: "curso_info"
    }
  },
  { $unwind: "$curso_info" },
  // comparar inscritos vs capacidad
  {
    $match: {
      $expr: { $gt: ["$total_inscritos", "$curso_info.capacidad"] }
    }
  },
  // proyección del resultado
  {
    $project: {
      _id: 0,
      curso: "$_id",
      total_inscritos: 1,
      capacidad: "$curso_info.capacidad",
      exceso: { $subtract: ["$total_inscritos", "$curso_info.capacidad"] }
    }
  }
])
