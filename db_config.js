//Coleccion estudiantes

db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["documento", "nombre_completo", "contacto", "nivel_musical", "sedeId"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único del estudiante"
        },
        documento: {
          bsonType: "string",
          pattern: "^[0-9]{8,12}$", 
          description: "Documento único del estudiante (cédula u otro ID)"
        },
        nombre_completo: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre completo del estudiante"
        },
        contacto: {
          bsonType: "object",
          required: ["email", "telefono"],
          properties: {
            email: {
              bsonType: "string",
              pattern: "^\\S+@\\S+\\.\\S+$",
              description: "Correo electrónico válido"
            },
            telefono: {
              bsonType: "string",
              pattern: "^\\+57",
              description: "Número de teléfono colombiano en formato +57XXXXXXXXXX"
            }
          },
          description: "Información de contacto del estudiante"
        },
        nivel_musical: {
          bsonType: "string",
          enum: ["principiante", "intermedio", "avanzado"],
          description: "Nivel musical del estudiante"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde está inscrito el estudiante"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha de creación del registro"
        }
      }
    }
  }
});


// Índices
db.estudiantes.createIndex({ documento: 1 }, { unique: true })
db.estudiantes.createIndex({ nombre_completo: 1 })


//Coleccion profesores

db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["documento", "nombre_completo", "especialidad", "anios_experiencia", "sedeId"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único del profesor"
        },
        documento: {
          bsonType: "string",
          pattern: "^[0-9]{8,12}$", 
          description: "Documento de identidad único del profesor"
        },
        nombre_completo: {
          bsonType: "string",
          minLength: 3,
          maxLength: 100,
          description: "Nombre completo del profesor"
        },
        especialidad: {
          bsonType: "array",
          minItems: 1,
          uniqueItems: true,
          items: {
            bsonType: "string",
            description: "Instrumento o área de especialidad"
          },
          description: "Lista de especialidades del profesor"
        },
        anios_experiencia: {
          bsonType: "int",
          minimum: 0,
          maximum: 80,
          description: "Años de experiencia del profesor en enseñanza musical"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde trabaja el profesor"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha de creación del registro"
        }
      }
    }
  }
});


// Índices
db.profesores.createIndex({ documento: 1 }, { unique: true })
db.profesores.createIndex({ especialidad: 1 })


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
          description: "Referencia al documento en estudiante/profesores/employees"
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
      required: ["nombre_sede", "ciudad", "direccion", "capacidad"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único de la sede"
        },
        nombre_sede: {
          bsonType: "string",
          minLength: 5,
          maxLength: 150,
          description: "Nombre oficial de la sede"
        },
        ciudad: {
          bsonType: "string",
          enum: ["Bogotá", "Cali", "Medellín"], 
          description: "Ciudad donde se ubica la sede"
        },
        direccion: {
          bsonType: "string",
          minLength: 5,
          description: "Dirección física de la sede"
        },
        capacidad: {
          bsonType: "int",
          minimum: 1,
          maximum: 1000,
          description: "Capacidad máxima de estudiantes que puede atender la sede"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha de creación del registro"
        }
      }
    }
  }
});


// indices
db.sedes.createIndex({ nombre_sede: 1 }, { unique: true });


//coleccion cursos

db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre_curso",
        "sedeId",
        "profesorId",
        "instrumento",
        "nivel",
        "semanas_duracion",
        "programa",
        "precio",
        "capacidad",
        "cupos_disponibles"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único del curso"
        },
        nombre_curso: {
          bsonType: "string",
          minLength: 5,
          maxLength: 150,
          description: "Nombre descriptivo del curso"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde se imparte el curso"
        },
        profesorId: {
          bsonType: "objectId",
          description: "Profesor asignado al curso"
        },
        instrumento: {
          bsonType: "string",
          minLength: 3,
          description: "Instrumento principal del curso"
        },
        nivel: {
          bsonType: "string",
          enum: ["principiante", "intermedio", "avanzado"],
          description: "Nivel del curso"
        },
        semanas_duracion: {
          bsonType: "int",
          minimum: 1,
          maximum: 52,
          description: "Duración del curso en semanas"
        },
        programa: {
          bsonType: "object",
          required: ["dia_semana", "hora_inicio", "hora_fin"],
          properties: {
            dia_semana: {
              bsonType: "string",
              enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
              description: "Día de la semana en que se dicta el curso"
            },
            hora_inicio: {
              bsonType: "string",
              pattern: "^(?:[01]\\d|2[0-3]):[0-5]\\d$",
              description: "Hora de inicio en formato HH:MM (24h)"
            },
            hora_fin: {
              bsonType: "string",
              pattern: "^(?:[01]\\d|2[0-3]):[0-5]\\d$",
              description: "Hora de finalización en formato HH:MM (24h)"
            }
          },
          description: "Programa semanal del curso"
        },
        precio: {
          bsonType: "int",
          minimum: 0,
          description: "Precio del curso en COP"
        },
        capacidad: {
          bsonType: "int",
          minimum: 1,
          maximum: 100,
          description: "Número máximo de estudiantes en el curso"
        },
        cupos_disponibles: {
          bsonType: "int",
          minimum: 0,
          description: "Número de cupos aún disponibles"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha de creación del curso"
        }
      }
    }
  }
});


// indices
db.cursos.createIndex({ nombre_curso: 1 })
db.cursos.createIndex({ sedeId: 1, profesorId: 1 })

//coleccion inscripciones

db.createCollection("inscripciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "estudianteId",
        "cursoId",
        "sedeId",
        "profesorId",
        "estado",
        "fecha_inscripcion",
        "costo"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único de la inscripción"
        },
        estudianteId: {
          bsonType: "objectId",
          description: "Referencia al estudiante inscrito"
        },
        cursoId: {
          bsonType: "objectId",
          description: "Referencia al curso seleccionado"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede (denormalizado para rapidez)"
        },
        profesorId: {
          bsonType: "objectId",
          description: "Referencia al profesor (denormalizado desde curso)"
        },
        estado: {
          bsonType: "string",
          enum: ["activo", "cancelado", "completado"],
          description: "Estado de la inscripción"
        },
        fecha_inscripcion: {
          bsonType: "date",
          description: "Fecha en la que se realizó la inscripción"
        },
        costo: {
          bsonType: "int",
          minimum: 0,
          description: "Costo del curso en el momento de la inscripción"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha de creación del registro"
        },
        actualizado_en: {
          bsonType: "date",
          description: "Última fecha de modificación del registro"
        }
      }
    }
  }
});


// indices 
db.inscripciones.createIndex({ estudianteId: 1, cursoId: 1 })
db.inscripciones.createIndex({ estado: 1 })

//coleccion instrumentos

db.createCollection("instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["sedeId", "tipo_instrumento", "total", "disponibles"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único del registro de instrumento"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde están los instrumentos"
        },
        tipo_instrumento: {
          bsonType: "string",
          minLength: 3,
          maxLength: 50,
          description: "Tipo de instrumento (ej. Piano, Guitarra, Violín, Batería)"
        },
        total: {
          bsonType: "int",
          minimum: 1,
          maximum: 500,
          description: "Cantidad total de instrumentos disponibles en la sede"
        },
        disponibles: {
          bsonType: "int",
          minimum: 0,
          description: "Cantidad de instrumentos actualmente disponibles"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha de creación del registro"
        },
        actualizado_en: {
          bsonType: "date",
          description: "Última fecha de modificación del registro"
        }
      }
    }
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
      required: [
        "sedeId",
        "tipo_instrumento",
        "estudianteId",
        "inicio_reserva",
        "fin_reserva",
        "estado",
        "creado_en"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único de la reserva"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde se hace la reserva"
        },
        tipo_instrumento: {
          bsonType: "string",
          minLength: 3,
          maxLength: 50,
          description: "Tipo de instrumento reservado (ej: piano, guitarra, violín)"
        },
        estudianteId: {
          bsonType: "objectId",
          description: "Referencia al estudiante que realiza la reserva"
        },
        inicio_reserva: {
          bsonType: "date",
          description: "Fecha y hora de inicio de la reserva"
        },
        fin_reserva: {
          bsonType: "date",
          description: "Fecha y hora de fin de la reserva"
        },
        estado: {
          bsonType: "string",
          enum: ["reservado", "cancelado", "finalizado"],
          description: "Estado actual de la reserva"
        },
        creado_en: {
          bsonType: "date",
          description: "Fecha en que se creó la reserva"
        },
        actualizado_en: {
          bsonType: "date",
          description: "Última fecha de actualización del registro"
        }
      }
    }
  }
});


// indices
db.reservas_instrumentos.createIndex({ sedeId: 1, tipo_instrumento: 1 })
db.reservas_instrumentos.createIndex({ estudianteId: 1, inicio_reserva: 1 })





