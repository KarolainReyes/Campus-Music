
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre_completo", "tipo", "documento", "sedeId", "acceso"],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        nombre_completo: {
          bsonType: "string",
          description: "Nombre completo obligatorio"
        },
        tipo: {
          enum: ["empleado", "estudiante", "administrador"],
          description: "Debe ser empleado, estudiante o administrador"
        },
        documento: {
          bsonType: "string",
          pattern: "^[0-9]{6,15}$",
          description: "Documento de identidad numérico"
        },
        datos_estudiante: {
          bsonType: ["object", "null"],
          properties: {
            nivel_musical: {
              enum: ["principiante", "intermedio", "avanzado"],
              description: "Nivel musical del estudiante"
            }
          }
        },
        datos_empleado: {
          bsonType: ["object", "null"],
          properties: {
            especialidad: {
              bsonType: "array",
              items: { bsonType: "string" },
              description: "Lista de especialidades musicales"
            },
            anios_experiencia: {
              bsonType: "int",
              minimum: 0,
              description: "Años de experiencia profesional"
            }
          }
        },
        contacto: {
          bsonType: ["object", "null"],
          properties: {
            email: {
              bsonType: "string",
              pattern: "^.+@.+\\..+$",
              description: "Correo válido"
            },
            telefono: {
              bsonType: "string",
              pattern: "^\\+?[0-9\\s-]{7,15}$",
              description: "Número de teléfono"
            }
          }
        },
        sedeId: {
          bsonType: ["objectId", "null"],
          description: "Id de la sede donde pertenece (null si es admin)"
        },
        cursos_asignados: {
          bsonType: ["array", "null"],
          items: {
            bsonType: "object",
            properties: {
              cursoId: { bsonType: "objectId" }
            }
          },
          description: "Cursos asignados al profesor"
        },
        acceso: {
          bsonType: "object",
          required: ["email", "pwd"],
          properties: {
            email: {
              bsonType: "string",
              pattern: "^.+@.+\\..+$",
              description: "Correo de acceso"
            },
            pwd: {
              bsonType: "string",
              minLength: 6,
              description: "Contraseña obligatoria"
            }
          }
        }
      }
    }
  }
})


db.createCollection("sedes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre_sede", "ciudad", "direccion", "capacidad", "cursos_disponibles"],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        nombre_sede: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre de la sede, obligatorio y de mínimo 3 caracteres"
        },
        ciudad: {
          bsonType: "string",
          description: "Ciudad donde está ubicada la sede"
        },
        direccion: {
          bsonType: "string",
          description: "Dirección de la sede"
        },
        capacidad: {
          bsonType: "int",
          minimum: 1,
          description: "Capacidad máxima de la sede (mínimo 1)"
        },
        cursos_disponibles: {
          bsonType: "array",
          minItems: 0,
          description: "Listado de cursos disponibles en la sede",
          items: {
            bsonType: "object",
            required: ["id_curso", "estado"],
            properties: {
              id_curso: {
                bsonType: "objectId",
                description: "Id del curso relacionado"
              },
              estado: {
                enum: ["Activo", "Inactivo"],
                description: "Estado del curso en la sede"
              }
            }
          }
        }
      }
    }
  }
})


db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre_curso",
        "instrumento",
        "nivel",
        "semanas_duracion",
        "capacidad",
        "cupos_disponibles",
        "programa",
        "precio"
      ],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        nombre_curso: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre del curso, mínimo 3 caracteres"
        },
        instrumento: {
          bsonType: "string",
          description: "Instrumento principal del curso"
        },
        nivel: {
          enum: ["principiante", "intermedio", "avanzado"],
          description: "Nivel del curso (principiante, intermedio, avanzado)"
        },
        semanas_duracion: {
          bsonType: "int",
          minimum: 1,
          maximum: 52,
          description: "Duración del curso en semanas"
        },
        capacidad: {
          bsonType: "int",
          minimum: 1,
          description: "Capacidad máxima de estudiantes en el curso"
        },
        cupos_disponibles: {
          bsonType: "int",
          minimum: 0,
          description: "Cupos disponibles, no puede ser negativo"
        },
        programa: {
          bsonType: "object",
          required: ["dia_semana", "hora_inicio", "hora_fin"],
          properties: {
            dia_semana: {
              bsonType: "string",
              enum: [
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo"
              ],
              description: "Día de la semana en que se dicta el curso"
            },
            hora_inicio: {
              bsonType: "string",
              pattern: "^(?:[01]\\d|2[0-3]):[0-5]\\d$",
              description: "Hora de inicio en formato HH:mm"
            },
            hora_fin: {
              bsonType: "string",
              pattern: "^(?:[01]\\d|2[0-3]):[0-5]\\d$",
              description: "Hora de finalización en formato HH:mm"
            }
          }
        },
        precio: {
          bsonType: "int",
          minimum: 0,
          description: "Precio del curso en pesos"
        }
      }
    }
  }
})


db.createCollection("inscripciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "curso",
        "profesor",
        "estudiante",
        "sede",
        "fecha_inscripcion",
        "estado",
        "costo"
      ],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        curso: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre del curso inscrito"
        },
        profesor: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre completo del profesor"
        },
        estudiante: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre completo del estudiante"
        },
        sede: {
          bsonType: "string",
          minLength: 3,
          description: "Nombre de la sede donde se realiza la inscripción"
        },
        fecha_inscripcion: {
          bsonType: "date",
          description: "Fecha de la inscripción"
        },
        estado: {
          enum: ["activo", "cancelado", "completado"],
          description: "Estado de la inscripción"
        },
        costo: {
          bsonType: "int",
          minimum: 0,
          description: "Costo de la inscripción en pesos"
        }
      }
    }
  }
})


db.createCollection("instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["tipo_instrumento", "total", "disponibles", "sedeId"],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        tipo_instrumento: {
          bsonType: "string",
          minLength: 2,
          description: "Nombre o tipo del instrumento (ej: Violín, Guitarra, Piano)"
        },
        total: {
          bsonType: "int",
          minimum: 0,
          description: "Cantidad total de instrumentos disponibles en la sede"
        },
        disponibles: {
          bsonType: "int",
          minimum: 0,
          description: "Cantidad de instrumentos actualmente disponibles"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde está el instrumento"
        }
      }
    }
  }
})

db.createCollection("reservas_instrumentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["sedeId", "instrumentoId", "estudianteId", "fecha_reserva"],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        sedeId: {
          bsonType: "objectId",
          description: "Referencia a la sede donde se hace la reserva"
        },
        instrumentoId: {
          bsonType: "objectId",
          description: "Id del instrumento reservado"
        },
        estudianteId: {
          bsonType: "objectId",
          description: "Id del estudiante que realiza la reserva"
        },
        fecha_reserva: {
          bsonType: "date",
          description: "Fecha en la que se realiza la reserva"
        }
      }
    }
  }
})


