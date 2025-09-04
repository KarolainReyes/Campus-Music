//coleccion estudiantes

[
{
  "documento": "12345678",        // unico
  "nombre_completo": "Andresito Leal",
  "contacto": 
        { "email": "andres07@gmail.com" ,
          "telefono": "+57 3224567890" },
  "nivel_musical": "principiante",       // [principiante|intermedio|advanzado]
},

//coleccion profesores
{
  
  "documento": "87654321",        // unico
  "nombre_completo": "Juan Marinio",
  "especialidad": ["piano","teoria"],
  "anios_experiencia": 8,

},
//coleccion sedes
{
  "ciudad": "Bogotá",
  "direccion": "Cra 7 # 12-34",
  "capacidad": 300,
},

//coleccion cursos

{

   sedeId: ObjectId("..."),
  profesorId: ObjectId("..."),
  "instrumento": "piano",            // indice
  "nivel": "principiante",
  "semanas_duracion": 12,
  "programa": {                     
    "dia_semana": "Martes",               // lunes, martes..
    "hora_inicio": "18:00",               
    "hora_fin": "20:00"
  },
  "precio": 600000,                  // COP
  "capacidad": 12,
  "cupos_disponibles": 12,             // decrece con inscripciones
},

//coleccion inscripciones

{
  estudianteId: ObjectId("..."),
  cursoId: ObjectId("..."),
   sedeId: ObjectId("..."),      // denormalizado
  profesorId: ObjectId("..."),     // denormalizado
  estado: "activo",  // [activo|cancelado|completado]
  fecha_inscripcion: new Date
},


//coleccion instrumentos

{
   sedeId: ObjectId("..."),
  tipo_instrumento: "piano",                  // indice compuesto (campusId,type)
  "total": 8,
  "disponibles": 8                   
},

// colecion reservas instrumentos

{
   sedeId: ObjectId("..."),
  tipo_instrumento: "piano",
  estudianteId: ObjectId("..."),
  inicio_reserva: ISODate("2025-09-05T15:00:00-05:00"),
  "fin_reserva": ISODate("2025-09-05T16:00:00-05:00"),
  estado: "reservado"              // [reservado|cancelado|finalizado]
},

// coleccion usuarios (profesores, estudiantes, admin)

{

  "username": "ana.gomez",
  "passwordHash": "...",
  "roles": ["estudiante"],      //estudiante, profesor o admin
  "perfilId": ObjectId("..."), // referencia al perfil

}


]
