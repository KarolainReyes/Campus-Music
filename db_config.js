//Coleccion estudiantes

db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["documento", "nombre_completo", "contacto", "nivel_musical"],
      additionalProperties: false,
      properties: {
        _id: {},
        document: {
          bsonType: "string",
          description: "Documento único del estudiante"
        },
        nombre_completo: {
          bsonType: "string",
          description: "Nombre completo del estudiante"
        },
        contacto: {
          bsonType: "object",
          required: ["email", "telefono"],
          properties: {
            email: { bsonType: "string", pattern: "^.+@.+$", description: "Email válido" },
            telefono: { bsonType: "string", description: "Número de teléfono" }
          }
        },
        nivel_musical: {
          enum: ["principiante", "intermedio", "advanzado"],
          description: "Nivel musical del estudiante"
        }
      }
    }
  }
})

// Índices
db.students.createIndex({ documento: 1 }, { unique: true })
db.students.createIndex({ nombre_completo: 1 })


//Coleccion profesores

db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["documento", "nombre_completo", "especialidad", "anios_experiencia"],
      additionalProperties: false,
      properties: {
        _id: {},
        document: {
          bsonType: "string",
          description: "Documento único del profesor"
        },
        nombre_completo: {
          bsonType: "string",
          description: "Nombre completo del profesor"
        },
        especialidad: {
          bsonType: "string",
          description: "Instrumento principal o área de enseñanza"
        },
        anios_experiencia: {
          bsonType: "int",
          minimum: 0,
          description: "Años de experiencia del profesor"
        },
        cursos_asignados: {
          bsonType: "array",
          description: "Cursos asignados al profesor",
          items: { bsonType: "objectId" }
        }
      }
    }
  }
})

// Índices
db.teachers.createIndex({ documento: 1 }, { unique: true })
db.teachers.createIndex({ especialidad: 1 })


//Coleccion usuarios

db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "passwordHash", "roles"],
      additionalProperties: false,
      properties: {
        _id: {},
        username: {
          bsonType: "string",
          description: "Debe ser un string único para login"
        },
        passwordHash: {
          bsonType: "string",
          description: "Hash de la contraseña, no en texto plano"
        },
        roles: {
          bsonType: "array",
          minItems: 1,
          uniqueItems: true,
          description: "Al menos un rol asignado",
          items: {
            enum: ["estudiante", "profesor", "admin"]
          }
        },
        perfilId: {
          bsonType: "objectId",
          description: "Referencia al documento en estudiante/teachers/employees"
        },
        ultimo_Login: {
          bsonType: "date",
          description: "Último inicio de sesión"
        }
      }
    }
  }
})

//coleccion sedes
db.createCollection("sedes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ciudad", "direccion", "capacidad"],
      properties: {
        _id: { bsonType: "objectId" },
        ciudad: { bsonType: "string" },
        direccion: { bsonType: "string" },
        capacidad: { bsonType: "int", minimum: 1 }
      }
    }
  }
})

// indices
db.sedes.createIndex({ ciudad: 1 })

//coleccion cursos

db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["sedeId", "profesorId", "instrumento", "nivel", "semanas_duracion", "programa", "precio", "capacidad", "cupos_disponibles"],
      properties: {
        _id: { bsonType: "objectId" },
        sedeId: { bsonType: "objectId" },
        profesorId: { bsonType: "objectId" },
        instrumento: { bsonType: "string", description: "Instrumento del curso" },
        nivel: { enum: ["principiante", "intermedio", "avanzado"] },
        semanas_duracion: { bsonType: "int", minimum: 1 },
        programa: {
          bsonType: "object",
          required: ["dia_semana", "hora_inicio", "hora_fin"],
          properties: {
            dia_semana: { enum: ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"] },
            hora_inicio: { bsonType: "string", pattern: "^[0-2][0-9]:[0-5][0-9]$" },
            hora_fin: { bsonType: "string", pattern: "^[0-2][0-9]:[0-5][0-9]$" }
          }
        },
        precio: { bsonType: "int", minimum: 0 },
        capacidad: { bsonType: "int", minimum: 1 },
        cupos_disponibles: { bsonType: "int", minimum: 0 }
      }
    }
  }
})

// indices
db.cursos.createIndex({ instrumento: 1 })
db.cursos.createIndex({ sedeId: 1, profesorId: 1 })

//coleccion inscripciones

db.createCollection("inscripciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["estudianteId", "cursoId", "sedeId", "profesorId", "estado"],
      properties: {
        _id: { bsonType: "objectId" },
        estudianteId: { bsonType: "objectId" },
        cursoId: { bsonType: "objectId" },
        sedeId: { bsonType: "objectId" },
        profesorId: { bsonType: "objectId" },
        estado: { enum: ["activo", "cancelado", "completado"] }
      }
    }
  }
})

// indices 
db.inscripciones.createIndex({ estudianteId: 1, cursoId: 1 }, { unique: true })
db.inscripciones.createIndex({ estado: 1 })

//coleccion instrumentos

db.createCollection("instrumentos", {
  validator: {
    $and: [
      {
        $jsonSchema: {
          bsonType: "object",
          required: ["sedeId", "tipo_instrumento", "total", "disponibles"],
          properties: {
            sedeId: {
              bsonType: "objectId",
              description: "Debe ser un ObjectId válido que referencia una sede"
            },
            tipo_instrumento: {
              bsonType: "string",
              enum: [
                "piano",
                "guitarra",
                "violin",
                "bateria",
                "saxofon",
                "trompeta",
                "microfono",
                "flauta",
                "teclado"
              ],
              description: "El instrumento debe ser uno de los tipos definidos"
            },
            total: {
              bsonType: "int",
              minimum: 0,
              description: "Número total de instrumentos en la sede"
            },
            disponibles: {
              bsonType: "int",
              minimum: 0,
              description: "Número de instrumentos disponibles para préstamo"
            }
          }
        }
      },
      {
        $expr: { $lte: ["$disponibles", "$total"] } 
      }
    ]
  }
});

// indices 
db.instrumentos.createIndex(
  { sedeId: 1, tipo_instrumento: 1 },
  { unique: true, name: "idx_sede_instrumento_unique" }
);


// coleccion reservas_instrumentos

db.createCollection("reservas_instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["sedeId", "tipo_instrumento", "estudianteId", "inicio_reserva", "fin_reserva", "estado"],
      properties: {
        _id: { bsonType: "objectId" },
        sedeId: { bsonType: "objectId" },
        tipo_instrumento: { bsonType: "string" },
        estudianteId: { bsonType: "objectId" },
        inicio_reserva: { bsonType: "date" },
        fin_reserva: { bsonType: "date" },
        estado: { enum: ["reservado", "cancelado", "finalizado"] }
      }
    }
  }
})

// indices
db.reservas_instrumentos.createIndex({ sedeId: 1, tipo_instrumento: 1 })
db.reservas_instrumentos.createIndex({ estudianteId: 1, inicio_reserva: 1 })





