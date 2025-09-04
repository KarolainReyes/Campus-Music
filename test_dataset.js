//poblcion para la BD

//sedes

db.sedes.insertMany ([
    {
    _id: ObjectId('68b8241ae306a5d40bba92e0'),
    nombre_sede : "Conversatorio Nacional de música Colombiana",
    ciudad: "Bogotá",
    direccion: "Cra 7 # 12-34",
    capacidad: 300,
},
{
    _id: ObjectId('68b8241ae306a5d40bba92e1'),
    nombre_sede: "En Cali es donde más se goza",
    ciudad: "Cali",
    direccion: "Cll 8 # 13-24",
    capacidad: 300,
},
{
    _id: ObjectId('68b8241ae306a5d40bba92e2'),
    nombre_sede: "Academia Musical Paisana",
    ciudad: "Medellín",
    direccion: "Cra 7 # 12-34",
    capacidad: 300,
},
])

//Cursos por sede

db.cursos.insertMany([

  //SEDE BOGOTÁ

  {
    nombre_curso: 'Introducción a Violín',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"), 
    profesorId: ObjectId("68b82480e306a5d40bba92e3"),//juan marinio
    instrumento: "Violín",
    nivel: "principiante",
    semanas_duracion: 12,
    programa: {
      dia_semana: "Martes",
      hora_inicio: "18:00",
      hora_fin: "20:00"
    },
    precio: 60000,
    capacidad: 12,
    cupos_disponibles: 12
  },
  {
    nombre_curso: 'Guitarra Intermedia',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e3"),//juan marinio
    instrumento: "Guitarra",
    nivel: "intermedio",
    semanas_duracion: 16,
    programa: {
      dia_semana: "Jueves",
      hora_inicio: "16:00",
      hora_fin: "18:00"
    },
    precio: 70000,
    capacidad: 15,
    cupos_disponibles: 15
  },
  {
    nombre_curso: 'Piano Avanzado',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e4"),//laura castan
    instrumento: "Piano",
    nivel: "avanzado",
    semanas_duracion: 20,
    programa: {
      dia_semana: "Sábado",
      hora_inicio: "10:00",
      hora_fin: "12:00"
    },
    precio: 80000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Flauta Principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e4"),//laura castan
    instrumento: "Flauta",
    nivel: "principiante",
    semanas_duracion: 10,
    programa: {
      dia_semana: "Lunes",
      hora_inicio: "17:00",
      hora_fin: "19:00"
    },
    precio: 50000,
    capacidad: 20,
    cupos_disponibles: 20
  },
  {
    nombre_curso: 'Clarinete intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b82480e306a5d40bba92e5"),//carlos herre
    instrumento: "Clarinete",
    nivel: "intermedio",
    semanas_duracion: 14,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "19:00",
      hora_fin: "21:00"
    },
    precio: 65000,
    capacidad: 12,
    cupos_disponibles: 12
  },

  //SEDE CALI 

  {
    nombre_curso: 'Trombón principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"), 
    profesorId: ObjectId("68b82480e306a5d40bba92e6"),//mariana lope
    instrumento: "Trombón",
    nivel: "principiante",
    semanas_duracion: 12,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "18:00",
      hora_fin: "20:00"
    },
    precio: 50000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Trompeta Intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e7"),//santiago per
    instrumento: "Trompeta",
    nivel: "intermedio",
    semanas_duracion: 16,
    programa: {
      dia_semana: "Jueves",
      hora_inicio: "16:00",
      hora_fin: "18:00"
    },
    precio: 85000,
    capacidad: 15,
    cupos_disponibles: 15
  },
  {
    nombre_curso: 'Saxofón Avanzado',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e7"),//santiago per
    instrumento: "Saxofón",
    nivel: "avanzado",
    semanas_duracion: 20,
    programa: {
      dia_semana: "Sábado",
      hora_inicio: "10:00",
      hora_fin: "12:00"
    },
    precio: 80000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Batería Principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e8"),//camila dua
    instrumento: "Batería",
    nivel: "principiante",
    semanas_duracion: 10,
    programa: {
      dia_semana: "Lunes",
      hora_inicio: "17:00",
      hora_fin: "19:00"
    },
    precio: 55000,
    capacidad: 20,
    cupos_disponibles: 20
  },
  {
    nombre_curso: 'Xilófono intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92e8"),//camila duar
    instrumento: "Xilófono",
    nivel: "intermedio",
    semanas_duracion: 14,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "19:00",
      hora_fin: "21:00"
    },
    precio: 65000,
    capacidad: 12,
    cupos_disponibles: 12
  },

  //SEDE MEDELLIN

  {
    nombre_curso: 'Contrabajo principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"), 
    profesorId: ObjectId("68b82480e306a5d40bba92e9"),//andres molin
    instrumento: "Contrabajo",
    nivel: "principiante",
    semanas_duracion: 12,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "18:00",
      hora_fin: "20:00"
    },
    precio: 40000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Arpa Intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),  
    profesorId: ObjectId("68b82480e306a5d40bba92ea"),//valen gomez
    instrumento: "Arpa",
    nivel: "intermedio",
    semanas_duracion: 16,
    programa: {
      dia_semana: "Lunes",
      hora_inicio: "16:00",
      hora_fin: "18:00"
    },
    precio: 85000,
    capacidad: 15,
    cupos_disponibles: 15
  },
  {
    nombre_curso: 'Órgano Avanzado',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),  
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),//ricardo torr
    instrumento: "Órgano",
    nivel: "avanzado",
    semanas_duracion: 20,
    programa: {
      dia_semana: "Sábado",
      hora_inicio: "10:00",
      hora_fin: "12:00"
    },
    precio: 80000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Oboe Principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),  
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),//diana moral
    instrumento: "Oboe",
    nivel: "principiante",
    semanas_duracion: 10,
    programa: {
      dia_semana: "Lunes",
      hora_inicio: "17:00",
      hora_fin: "19:00"
    },
    precio: 55000,
    capacidad: 20,
    cupos_disponibles: 20
  },
  {
    nombre_curso: 'Bajo Eléctrico',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),//diana moral
    instrumento: "Bajo Eléctrico",
    nivel: "intermedio",
    semanas_duracion: 14,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "19:00",
      hora_fin: "21:00"
    },
    precio: 65000,
    capacidad: 12,
    cupos_disponibles: 12
  },

]);


//profesores

db.profesores.insertMany([
  {
    _id: ObjectId('68b82480e306a5d40bba92e3'),
    documento: "10010001",
    nombre_completo: "Juan Marinio",
    especialidad: ["Violín", "Guitarra"],
    anios_experiencia: 8,
    sedeId: ObjectId('68b8241ae306a5d40bba92e0')//bogota
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e4'),
    documento: "10010002",
    nombre_completo: "Laura Castanio",
    especialidad: ["Piano", "Flauta"],
    anios_experiencia: 5,
    sedeId: ObjectId('68b8241ae306a5d40bba92e0')//bogota
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e5'),
    documento: "10010003",
    nombre_completo: "Carlos Herrera",
    especialidad: ["Clarinete"],
    anios_experiencia: 10,
    sedeId: ObjectId('68b8241ae306a5d40bba92e0')//bogota
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e6'),
    documento: "10010004",
    nombre_completo: "Mariana Lopez",
    especialidad: ["Trombón", "percusion latina"],
    anios_experiencia: 6,
    sedeId: ObjectId('68b8241ae306a5d40bba92e1')//cali
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e7'),
    documento: "10010005",
    nombre_completo: "Santiago Perez",
    especialidad: ["Saxofón", "Teoria", "Trompeta"],
    anios_experiencia: 12,
    sedeId: ObjectId('68b8241ae306a5d40bba92e1')//cali
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e8'),
    documento: "10010006",
    nombre_completo: "Camila Duarte",
    especialidad: ["canto lirico", "teoria"],
    anios_experiencia: 7,
    sedeId: ObjectId('68b8241ae306a5d40bba92e1')//cali
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e9'),
    documento: "10010007",
    nombre_completo: "Andres Molina",
    especialidad: ["contrabajo", "armonia"],
    anios_experiencia: 15,
    sedeId: ObjectId('68b8241ae306a5d40bba92e2')//medellin
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92ea'),
    documento: "10010008",
    nombre_completo: "Valentina Gomez",
    especialidad: ["flauta traversa", "piano"],
    anios_experiencia: 9,
    sedeId: ObjectId('68b8241ae306a5d40bba92e2')//medellin
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92eb'),
    documento: "10010009",
    nombre_completo: "Ricardo Torres",
    especialidad: ["trompeta", "composicion"],
    anios_experiencia: 11,
    sedeId: ObjectId('68b8241ae306a5d40bba92e2')//medellin
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92ec'),
    documento: "10010010",
    nombre_completo: "Diana Morales",
    especialidad: ["Oboe", "Bajo eléctrico"],
    anios_experiencia: 6,
    sedeId: ObjectId('68b8241ae306a5d40bba92e2')//medellin
  },
  
]);

//estudiantes

db.estudiantes.insertMany([
  {
    _id: ObjectId('68b83530e306a5d40bba931a'),
    documento: "20010001",
    nombre_completo: "Andresito Leal",
    contacto: { email: "andres07@gmail.com", telefono: "+57 3224567890" },
    nivel_musical: "principiante",
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931b'),
    documento: "20010002",
    nombre_completo: "Laura Medina",
    contacto: { email: "lauramedina@gmail.com", telefono: "+57 3104567891" },
    nivel_musical: "intermedio",
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931c'),
    documento: "20010003",
    nombre_completo: "Carlos Rojas",
    contacto: { email: "carlosrojas@gmail.com", telefono: "+57 3114567892" },
    nivel_musical: "avanzado",
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931d'),
    documento: "20010004",
    nombre_completo: "Mariana Torres",
    contacto: { email: "maritorres@gmail.com", telefono: "+57 3124567893" },
    nivel_musical: "principiante",
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931e'),
    documento: "20010005",
    nombre_completo: "Felipe Gomez",
    contacto: { email: "felipegomez@gmail.com", telefono: "+57 3134567894" },
    nivel_musical: "intermedio",
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931f'),
    documento: "20010006",
    nombre_completo: "Camila Vargas",
    contacto: { email: "camilavargas@gmail.com", telefono: "+57 3144567895" },
    nivel_musical: "avanzado",
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9320'),
    documento: "20010007",
    nombre_completo: "Santiago Pardo",
    contacto: { email: "santiagopardo@gmail.com", telefono: "+57 3154567896" },
    nivel_musical: "principiante",
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9321'),
    documento: "20010008",
    nombre_completo: "Valentina Ruiz",
    contacto: { email: "valenruiz@gmail.com", telefono: "+57 3164567897" },
    nivel_musical: "intermedio",
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9322'),
    documento: "20010009",
    nombre_completo: "Ricardo Silva",
    contacto: { email: "ricardosilva@gmail.com", telefono: "+57 3174567898" },
    nivel_musical: "avanzado",
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9323'),
    documento: "20010010",
    nombre_completo: "Diana Lopez",
    contacto: { email: "dianalopez@gmail.com", telefono: "+57 3184567899" },
    nivel_musical: "principiante",
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9324'),
    documento: "20010011",
    nombre_completo: "Mateo Hernandez",
    contacto: { email: "mateohernandez@gmail.com", telefono: "+57 3194567800" },
    nivel_musical: "intermedio",
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9325'),
    documento: "20010012",
    nombre_completo: "Isabella Castro",
    contacto: { email: "isacastro@gmail.com", telefono: "+57 3204567801" },
    nivel_musical: "avanzado",
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9326'),
    documento: "20010013",
    nombre_completo: "David Romero",
    contacto: { email: "davidromero@gmail.com", telefono: "+57 3214567802" },
    nivel_musical: "principiante",
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9327'),
    documento: "20010014",
    nombre_completo: "Juliana Cardenas",
    contacto: { email: "julicardenas@gmail.com", telefono: "+57 3224567803" },
    nivel_musical: "intermedio",
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9328'),
    documento: "20010015",
    nombre_completo: "Nicolas Fernandez",
    contacto: { email: "nicolasfdez@gmail.com", telefono: "+57 3234567804" },
    nivel_musical: "avanzado",
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  }
]);

//instrumentos

db.instrumentos.insertMany([
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"), 
    tipo_instrumento: "Violín",
    total: 8,
    disponibles: 8
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"), 
    tipo_instrumento: "Guitarra",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "Piano",
    total: 10,
    disponibles: 10
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "Flauta",
    total: 6,
    disponibles: 6
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "Clarinete",
    total: 7,
    disponibles: 7
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "Trombón",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "Trompeta",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "Saxofón",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "Batería",
    total: 6,
    disponibles: 6
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "Xilófono",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "Contrabajo",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "Arpa",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Órgano",
    total: 6,
    disponibles: 6
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Oboe",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Fagot",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Bajo eléctrico",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Teclado",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Caja",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Congas",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "Ukelele",
    total: 3,
    disponibles: 3
  }
]);


//inscripciones

db.inscripciones.insertMany([
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73011"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73012"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e3"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-01T10:00:00Z"),
    costo: 50000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73011"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73014"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e4"),
    estado: "cancelado",
    fecha_inscripcion: ISODate("2025-09-05T15:20:00Z"),
    costo: 80000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73013"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73016"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e5"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-02T09:30:00Z"),
    costo: 60000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73013"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73018"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e6"),
    estado: "completado",
    fecha_inscripcion: ISODate("2025-09-06T11:45:00Z"),
    costo: 70000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73015"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7301a"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e7"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-03T16:10:00Z"),
    costo: 75000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73015"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73012"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e3"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-07T14:00:00Z"),
    costo: 50000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73017"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73014"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e4"),
    estado: "cancelado",
    fecha_inscripcion: ISODate("2025-09-04T12:30:00Z"),
    costo: 80000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73017"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73018"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e6"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-08T09:10:00Z"),
    costo: 70000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73019"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7301a"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e7"),
    estado: "completado",
    fecha_inscripcion: ISODate("2025-09-05T18:40:00Z"),
    costo: 75000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73019"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73016"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e5"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-09T08:50:00Z"),
    costo: 60000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301b"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7301c"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e8"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-01T13:15:00Z"),
    costo: 55000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301b"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7301e"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e9"),
    estado: "cancelado",
    fecha_inscripcion: ISODate("2025-09-07T17:40:00Z"),
    costo: 70000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301d"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73020"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92e9"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-02T15:55:00Z"),
    costo: 60000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301d"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73022"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92e9"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-08T09:30:00Z"),
    costo: 65000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301f"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73024"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92e9"),
    estado: "completado",
    fecha_inscripcion: ISODate("2025-09-03T17:45:00Z"),
    costo: 70000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301f"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7301c"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e8"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-09T11:20:00Z"),
    costo: 55000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73021"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7301e"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b8241ae306a5d40bba92e9"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-04T09:35:00Z"),
    costo: 70000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73021"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73020"),
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    estado: "cancelado",
    fecha_inscripcion: ISODate("2025-09-10T10:10:00Z"),
    costo: 60000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73023"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73024"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-05T08:25:00Z"),
    costo: 70000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73023"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73022"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-11T09:50:00Z"),
    costo: 65000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73025"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73026"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-01T12:15:00Z"),
    costo: 55000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73025"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73028"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    estado: "completado",
    fecha_inscripcion: ISODate("2025-09-07T14:10:00Z"),
    costo: 80000
  },

  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73027"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7302c"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-02T11:45:00Z"),
    costo: 65000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73027"),
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7302e"), 
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),
    estado: "cancelado",
    fecha_inscripcion: ISODate("2025-09-08T13:30:00Z"),
    costo: 60000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73025"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73026"),     
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),   
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-05T09:00:00Z"),
    costo: 55000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73027"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc73028"),     
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),   
    estado: "completado",
    fecha_inscripcion: ISODate("2025-09-06T14:30:00Z"),
    costo: 80000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73029"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7302a"),     
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),  
    estado: "cancelado",
    fecha_inscripcion: ISODate("2025-09-07T16:10:00Z"),
    costo: 75000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7302b"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7302c"),     
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),   
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-08T18:45:00Z"),
    costo: 65000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7302d"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7302e"),    
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),    
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-09T11:15:00Z"),
    costo: 60000
  },
  {
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73027"), 
    cursoId: ObjectId("68b8d4085a3e1e5f7bc7302c"),    
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92e9"),
    estado: "activo",
    fecha_inscripcion: ISODate("2025-09-10T10:40:00Z"),
    costo: 65000
  }
]);




db.reservas_instrumentos.insertMany([
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "piano",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73011"), 
    inicio_reserva: ISODate("2025-09-12T15:00:00-05:00"),
    fin_reserva: ISODate("2025-09-12T16:00:00-05:00"),
    estado: "reservado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "guitarra",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73013"), 
    inicio_reserva: ISODate("2025-09-13T10:00:00-05:00"),
    fin_reserva: ISODate("2025-09-13T11:30:00-05:00"),
    estado: "finalizado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "saxofon",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301b"), 
    inicio_reserva: ISODate("2025-09-14T14:00:00-05:00"),
    fin_reserva: ISODate("2025-09-14T15:00:00-05:00"),
    estado: "reservado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "trompeta",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301d"), 
    inicio_reserva: ISODate("2025-09-15T09:30:00-05:00"),
    fin_reserva: ISODate("2025-09-15T10:30:00-05:00"),
    estado: "cancelado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "violin",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7301f"), 
    inicio_reserva: ISODate("2025-09-16T16:00:00-05:00"),
    fin_reserva: ISODate("2025-09-16T17:30:00-05:00"),
    estado: "reservado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "oboe",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73025"), 
    inicio_reserva: ISODate("2025-09-17T11:00:00-05:00"),
    fin_reserva: ISODate("2025-09-17T12:00:00-05:00"),
    estado: "reservado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "fagot",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73027"), 
    inicio_reserva: ISODate("2025-09-18T13:00:00-05:00"),
    fin_reserva: ISODate("2025-09-18T14:30:00-05:00"),
    estado: "finalizado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "arpa",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc73029"), 
    inicio_reserva: ISODate("2025-09-19T15:30:00-05:00"),
    fin_reserva: ISODate("2025-09-19T17:00:00-05:00"),
    estado: "cancelado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "teclado",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7302b"), 
    inicio_reserva: ISODate("2025-09-20T08:00:00-05:00"),
    fin_reserva: ISODate("2025-09-20T09:30:00-05:00"),
    estado: "reservado",
    creado_en: new Date()
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "bajo eléctrico",
    estudianteId: ObjectId("68b8d4085a3e1e5f7bc7302d"), 
    inicio_reserva: ISODate("2025-09-21T17:00:00-05:00"),
    fin_reserva: ISODate("2025-09-21T18:00:00-05:00"),
    estado: "reservado",
    creado_en: new Date()
  }
]);
