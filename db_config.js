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
db.students.createIndex({ document: 1 }, { unique: true })
db.students.createIndex({ fullName: 1 })


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
db.teachers.createIndex({ document: 1 }, { unique: true })
db.teachers.createIndex({ specialty: 1 })


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



