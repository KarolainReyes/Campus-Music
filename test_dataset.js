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
    ciudad: "Bogotá",
    direccion: "Cra 7 # 12-34",
    capacidad: 300,
},
])

//Cursos por sede

db.cursos.insertMany([

  //SEDE BOGOTÁ

  {
    nombre_curso: 'Piano Básico',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"), 
    profesorId: ObjectId("68b82480e306a5d40bba92e3"),
    instrumento: "piano",
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
    profesorId: ObjectId("68b82480e306a5d40bba92e3"),
    instrumento: "guitarra",
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
    nombre_curso: 'Violín Avanzado',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e4"),
    instrumento: "violín",
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
    nombre_curso: 'Canto',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e4"),
    instrumento: "canto",
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
    nombre_curso: 'Bateria intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    profesorId: ObjectId("68b82480e306a5d40bba92e5"),
    instrumento: "batería",
    nivel: "intermedio",
    semanas_duracion: 14,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "19:00",
      hora_fin: "21:00"
    },
    precio: 65000,
    capacidad: 12,
    cupos_disponible: 12
  },

  //SEDE CALI 

  {
    nombre_curso: 'Bateria principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"), 
    profesorId: ObjectId("68b82480e306a5d40bba92e6"),
    instrumento: "bateria",
    nivel: "principiante",
    semanas_duracion: 12,
    programa: {
      dia_semana: "Miercoles",
      hora_inicio: "18:00",
      hora_fin: "20:00"
    },
    precio: 50000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Saxofon Intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e7"),
    instrumento: "Saxofon",
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
    nombre_curso: 'Violín Avanzado',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e7"),
    instrumento: "violín",
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
    nombre_curso: 'Canto',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),  
    profesorId: ObjectId("68b82480e306a5d40bba92e8"),
    instrumento: "canto",
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
    nombre_curso: 'Bateria intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    profesorId: ObjectId("68b82480e306a5d40bba92e8"),
    instrumento: "batería",
    nivel: "intermedio",
    semanas_duracion: 14,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "19:00",
      hora_fin: "21:00"
    },
    precio: 65000,
    capacidad: 12,
    cupos_disponible: 12
  },

  //SEDE MEDELLIN

  {
    nombre_curso: 'Bateria principiante',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"), 
    profesorId: ObjectId("68b82480e306a5d40bba92e9"),
    instrumento: "bateria",
    nivel: "principiante",
    semanas_duracion: 12,
    programa: {
      dia_semana: "Miercoles",
      hora_inicio: "18:00",
      hora_fin: "20:00"
    },
    precio: 40000,
    capacidad: 10,
    cupos_disponibles: 10
  },
  {
    nombre_curso: 'Piano Intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),  
    profesorId: ObjectId("68b82480e306a5d40bba92ea"),
    instrumento: "Piano",
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
    nombre_curso: 'Trompeta Avanzado',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),  
    profesorId: ObjectId("68b82480e306a5d40bba92eb"),
    instrumento: "Trompeta",
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
    nombre_curso: 'Canto',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),  
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    instrumento: "microfono",
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
    nombre_curso: 'Guitarra intermedio',
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    profesorId: ObjectId("68b82480e306a5d40bba92ec"),
    instrumento: "guitarra",
    nivel: "intermedio",
    semanas_duracion: 14,
    programa: {
      dia_semana: "Miércoles",
      hora_inicio: "19:00",
      hora_fin: "21:00"
    },
    precio: 65000,
    capacidad: 12,
    cupos_disponible: 12
  },

]);


//profesores

db.profesores.insertMany([
  {
    _id: ObjectId('68b82480e306a5d40bba92e3'),
    documento: "10010001",
    nombre_completo: "Juan Marinio",
    especialidad: ["piano", "teoria"],
    anios_experiencia: 8
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e4'),
    documento: "10010002",
    nombre_completo: "Laura Castanio",
    especialidad: ["violin", "canto"],
    anios_experiencia: 5
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e5'),
    documento: "10010003",
    nombre_completo: "Carlos Herrera",
    especialidad: ["guitarra clasica", "armonia"],
    anios_experiencia: 10
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e6'),
    documento: "10010004",
    nombre_completo: "Mariana Lopez",
    especialidad: ["bateria", "percusion latina"],
    anios_experiencia: 6
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e7'),
    documento: "10010005",
    nombre_completo: "Santiago Perez",
    especialidad: ["saxofon", "teoria"],
    anios_experiencia: 12
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e8'),
    documento: "10010006",
    nombre_completo: "Camila Duarte",
    especialidad: ["canto lirico", "teoria"],
    anios_experiencia: 7
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e9'),
    documento: "10010007",
    nombre_completo: "Andres Molina",
    especialidad: ["contrabajo", "armonia"],
    anios_experiencia: 15
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92ea'),
    documento: "10010008",
    nombre_completo: "Valentina Gomez",
    especialidad: ["flauta traversa", "piano"],
    anios_experiencia: 9
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92eb'),
    documento: "10010009",
    nombre_completo: "Ricardo Torres",
    especialidad: ["trompeta", "composicion"],
    anios_experiencia: 11
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92ec'),
    documento: "10010010",
    nombre_completo: "Diana Morales",
    especialidad: ["guitarra electrica", "produccion musical"],
    anios_experiencia: 6
  },
  
]);

//estudiantes

db.estudiantes.insertMany([
  {
    _id: ObjectId('68b83530e306a5d40bba931a'),
    documento: "20010001",
    nombre_completo: "Andresito Leal",
    contacto: { email: "andres07@gmail.com", telefono: "+57 3224567890" },
    nivel_musical: "principiante"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931b'),
    documento: "20010002",
    nombre_completo: "Laura Medina",
    contacto: { email: "lauramedina@gmail.com", telefono: "+57 3104567891" },
    nivel_musical: "intermedio"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931c'),
    documento: "20010003",
    nombre_completo: "Carlos Rojas",
    contacto: { email: "carlosrojas@gmail.com", telefono: "+57 3114567892" },
    nivel_musical: "avanzado"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931d'),
    documento: "20010004",
    nombre_completo: "Mariana Torres",
    contacto: { email: "maritorres@gmail.com", telefono: "+57 3124567893" },
    nivel_musical: "principiante"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931e'),
    documento: "20010005",
    nombre_completo: "Felipe Gomez",
    contacto: { email: "felipegomez@gmail.com", telefono: "+57 3134567894" },
    nivel_musical: "intermedio"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931f'),
    documento: "20010006",
    nombre_completo: "Camila Vargas",
    contacto: { email: "camilavargas@gmail.com", telefono: "+57 3144567895" },
    nivel_musical: "avanzado"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9320'),
    documento: "20010007",
    nombre_completo: "Santiago Pardo",
    contacto: { email: "santiagopardo@gmail.com", telefono: "+57 3154567896" },
    nivel_musical: "principiante"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9321'),
    documento: "20010008",
    nombre_completo: "Valentina Ruiz",
    contacto: { email: "valenruiz@gmail.com", telefono: "+57 3164567897" },
    nivel_musical: "intermedio"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9322'),
    documento: "20010009",
    nombre_completo: "Ricardo Silva",
    contacto: { email: "ricardosilva@gmail.com", telefono: "+57 3174567898" },
    nivel_musical: "avanzado"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9323'),
    documento: "20010010",
    nombre_completo: "Diana Lopez",
    contacto: { email: "dianalopez@gmail.com", telefono: "+57 3184567899" },
    nivel_musical: "principiante"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9324'),
    documento: "20010011",
    nombre_completo: "Mateo Hernandez",
    contacto: { email: "mateohernandez@gmail.com", telefono: "+57 3194567800" },
    nivel_musical: "intermedio"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9325'),
    documento: "20010012",
    nombre_completo: "Isabella Castro",
    contacto: { email: "isacastro@gmail.com", telefono: "+57 3204567801" },
    nivel_musical: "avanzado"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9326'),
    documento: "20010013",
    nombre_completo: "David Romero",
    contacto: { email: "davidromero@gmail.com", telefono: "+57 3214567802" },
    nivel_musical: "principiante"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9327'),
    documento: "20010014",
    nombre_completo: "Juliana Cardenas",
    contacto: { email: "julicardenas@gmail.com", telefono: "+57 3224567803" },
    nivel_musical: "intermedio"
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9328'),
    documento: "20010015",
    nombre_completo: "Nicolas Fernandez",
    contacto: { email: "nicolasfdez@gmail.com", telefono: "+57 3234567804" },
    nivel_musical: "avanzado"
  }
]);

//instrumentos

db.instrumentos.insertMany([
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"), 
    tipo_instrumento: "piano",
    total: 8,
    disponibles: 8
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"), 
    tipo_instrumento: "saxofon",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "guitarra",
    total: 10,
    disponibles: 10
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "bateria",
    total: 6,
    disponibles: 6
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "violin",
    total: 7,
    disponibles: 7
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    tipo_instrumento: "microfono",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "bateria",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "microfono",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "saxofon",
    total: 6,
    disponibles: 6
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "violin",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "trompeta",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    tipo_instrumento: "guitarra",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "microfono",
    total: 6,
    disponibles: 6
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "bateria",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "flauta",
    total: 5,
    disponibles: 5
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "guitarra",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "tambor",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "teclado",
    total: 3,
    disponibles: 3
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "violin",
    total: 4,
    disponibles: 4
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    tipo_instrumento: "saxofon",
    total: 3,
    disponibles: 3
  }
]);
