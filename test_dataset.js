//==================================
// POBLACION PARA LA BASE DE DATOS
//==================================

// ====== USUARIOS ====== //

db.usuarios.insertMany([
  {
    _id: ObjectId('68b82480e306a5d40bba92e3'),
    nombre_completo: "Pr. Juan Marinio",
    tipo: "empleado",
    documento: "10010001",
    datos_estudiante: null,
    datos_empleado:{    
        especialidad: ["Violín", "Guitarra"],
        anios_experiencia: 8},
    sedeId: ObjectId('68b8241ae306a5d40bba92e0'),
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b33'),
                        cursoId: ObjectId('68b91598c3eb79a67e677b34')}
    ],
    acceso: {
        email: 'juanmarinito01@gmail.com',
        pwd: 'clave.prof01'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e4'),
    nombre_completo: "Pr.Laura Castanio",
    tipo: "empleado",
    documento: "10010002",
    datos_estudiante: null,
    datos_empleado: {
        especialidad: ["Piano", "Flauta"],
        anios_experiencia: 5,},
    sedeId: ObjectId('68b8241ae306a5d40bba92e0'),//bogota
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b35'),
                        cursoId: ObjectId('68b91598c3eb79a67e677b36')
    }
    ],
    acceso: {
        email: 'lauracastanio02@gmail.com',
        pwd: 'clave.prof02'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e5'),
    nombre_completo: "Pr.Carlos Herrera",
    tipo: "empleado",
    documento: "10010003",
    datos_estudiante: null,
    datos_empleado:{
        especialidad: ["Clarinete"],
        anios_experiencia: 10},
    sedeId: ObjectId('68b8241ae306a5d40bba92e0'),//bogota
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b37')}
    ],
    acceso: {
        email: 'carlosherrera@gmail.com',
        pwd: 'clave.prof03'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e6'),
    nombre_completo: "Pr. Mariana Lopez",
    tipo: "empleado",
    documento: "10010004",
    datos_estudiante: null,
    datos_empleado:{
        especialidad: ["Trombón"],
        anios_experiencia: 6},
    sedeId: ObjectId('68b8241ae306a5d40bba92e1'),//cali
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b38')}
    ],
    acceso: {
        email: 'marianalopez@gmail.com',
        pwd: 'clave.prof04'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e7'),
    nombre_completo: "Pr. Santiago Perez",
    tipo: "empleado",
    documento: "10010005",
    datos_estudiante: null,
    dattos_empleado: {
        especialidad: ["Saxofón", "Teoria", "Trompeta"],
        anios_experiencia: 12},
    sedeId: ObjectId('68b8241ae306a5d40bba92e1'),//cali
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b39')}
    ],
    acceso: {
        email: 'santiagoperez@gmail.com',
        pwd: 'clave.prof05'
    }  
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e8'),
    nombre_completo: "Pr. Camila Duarte",
    tipo: "empleado",
    documento: "10010006",
    datos_estudiante: null,
    datos_empleado:{  
        especialidad: ["saxofon", "teoria"],
        anios_experiencia: 7},
    sedeId: ObjectId('68b8241ae306a5d40bba92e1'),//cali
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b3a')}
    ],
    acceso: {
        email: 'camiladuarte@gmail.com',
        pwd: 'clave.prof06'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92e9'),
    nombre_completo: "Pr. Andres Molina",
    tipo: "empleado",
    documento: "10010007",
    datos_estudiante: null,
    datos_empleado: {
        especialidad: ["batería", "armonia"],
        anios_experiencia: 15},
    sedeId: ObjectId('68b8241ae306a5d40bba92e2'),//medellin
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b3b')}
    ],
    acceso: {
        email: 'andresmolina@gmail.com',
        pwd: 'clave.prof07'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92ea'),
    nombre_completo: "Pr. Valentina Gomez",
    tipo: "empleado",
    documento: "10010008",
    datos_estudiante: null,
    datos_empleado: {
        especialidad: ["xilófono", "Bajo eléctrico"],
        anios_experiencia: 9},
    sedeId: ObjectId('68b8241ae306a5d40bba92e2'),//medellin
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b3c'),
                        cursoId: ObjectId('68b91598c3eb79a67e677b41')}
    ],
    acceso: {
        email: 'valentinagomez@gmail.com',
        pwd: 'clave.prof08'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92eb'),
    nombre_completo: "Pr. Ricardo Torres",
    tipo: "empleado",
    documento: "10010009",
    datos_estudiante: null,
    datos_empleado: {
        especialidad: ["contrabajo", "Oboe"],
        anios_experiencia: 11},
    sedeId: ObjectId('68b8241ae306a5d40bba92e2'),//medellin
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b3d'),
                        cursoId: ObjectId('68b91598c3eb79a67e677b40')}
                        ],
    acceso: {
        email: 'ricardotorres@gmail.com',
        pwd: 'clave.prof09'
    }
  },
  {
    _id: ObjectId('68b82480e306a5d40bba92ec'),
    nombre_completo: "Pr. Diana Morales",
    tipo: "empleado",
    documento: "10010010",
    datos_estudiante: null,
    datos_empleado:{
        especialidad: ["órgano", "Arpa"],
        anios_experiencia: 6},
    sedeId: ObjectId('68b8241ae306a5d40bba92e2'),//medellin
    cursos_asignados: [{cursoId: ObjectId('68b91598c3eb79a67e677b3e'),
                        cursoId: ObjectId('68b91598c3eb79a67e677b3f')}
    ],
    acceso: {
        email: 'dianamorales@gmail.com',
        pwd: 'clave.prof10'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931a'),
    nombre_completo: "Andresito Leal",
    tipo: "estudiante",
    documento: "20010001",
    datos_estudiante: {nivel_musical: "principiante"},
    datos_empleado: null,
    contacto: { 
        email: "andres07@gmail.com", 
        telefono: "+57 3224567890" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    acceso: {
        email: 'andresleal@gmail.com',
        pwd: 'clave.est01'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931b'),
    nombre_completo: "Laura Medina",
    tipo: "estudiante",
    documento: "20010002",
    datos_estudiante: {nivel_musical: "intermedio"},
    datos_empleado: null,
    contacto: { 
        email: "lauramedina@gmail.com", 
        telefono: "+57 3104567891" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    acceso: {
        email: 'lauramedina@gmail.com',
        pwd: 'clave.est02'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931c'),
    nombre_completo: "Carlos Rojas",
    tipo: "estudiante",
    documento: "20010003",
    datos_estudiante: {nivel_musical: "avanzado",},
    datos_empleado: null,
    contacto: { 
        email: "carlosrojas@gmail.com", 
        telefono: "+57 3114567892" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    acceso: {
        email: 'carlosrojas@gmail.com',
        pwd: 'clave.est03'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931d'),
    nombre_completo: "Mariana Torres",
    tipo: "estudiante",
    documento: "20010004",
    datos_estudiante: {nivel_musical: "principiante"},
    datos_empleado: null,
    contacto: { 
        email: "maritorres@gmail.com", 
        telefono: "+57 3124567893" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    acceso: {
        email: 'marianatorres@gmail.com',
        pwd: 'clave.est04'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931e'),
    nombre_completo: "Felipe Gomez",
    tipo: "estudiante",
    documento: "20010005",
    datos_estudiante: {nivel_musical: "intermedio"},
    datos_empleado: null,
    contacto: { 
        email: "felipegomez@gmail.com", 
        telefono: "+57 3134567894" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    acceso: {
        email: 'felipegomez@gmail.com',
        pwd: 'clave.est05'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba931f'),
    nombre_completo: "Camila Vargas",
    tipo: "estudiante",
    documento: "20010006",
    datos_estudiante: {nivel_musical: "avanzado"},
    datos_empleado: null,
    contacto: { 
        email: "camilavargas@gmail.com", 
        telefono: "+57 3144567895" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    acceso: {
        email: 'camilavargas@gmail.com',
        pwd: 'clave.est06'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9320'),
    nombre_completo: "Santiago Pardo",
    tipo: "estudiante",
    documento: "20010007",
    datos_estudiante: {nivel_musical: "principiante"},
    datos_empleado: null,
    contacto: { 
        email: "santiagopardo@gmail.com", 
        telefono: "+57 3154567896" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    acceso: {
        email: 'santiagopardo@gmail.com',
        pwd: 'clave.est07'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9321'),
    nombre_completo: "Valentina Ruiz",
    tipo: "estudiante",
    documento: "20010008",
    datos_estudiante: {nivel_musical: "intermedio"},
    datos_empleado: null,
    contacto: { 
        email: "valenruiz@gmail.com", 
        telefono: "+57 3164567897" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    acceso: {
        email: 'valentinaruiz@gmail.com',
        pwd: 'clave.est08'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9322'),
    nombre_completo: "Ricardo Silva",
    tipo: "estudiante",
    documento: "20010009",
    datos_estudiante: {nivel_musical: "avanzado"},
    datos_empleado: null,
    contacto: { 
        email: "ricardosilva@gmail.com", 
        telefono: "+57 3174567898" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    acceso: {
        email: 'ricardosilva@gmail.com',
        pwd: 'clave.est09'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9323'),
    nombre_completo: "Diana Lopez",
    tipo: "estudiante",
    documento: "20010010",
    datos_estudiante: {nivel_musical: "principiante"},
    datos_empleado: null,
    contacto: { 
        email: "dianalopez@gmail.com", 
        telefono: "+57 3184567899" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    acceso: {
        email: 'dianalopez@gmail.com',
        pwd: 'clave.est10'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9324'),
    nombre_completo: "Mateo Hernandez",
    tipo: "estudiante",
    documento: "20010011",
    datos_estudiante: {nivel_musical: "intermedio"},
    datos_empleado: null,
    contacto: { 
        email: "mateohernandez@gmail.com", 
        telefono: "+57 3194567800" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    acceso: {
        email: 'mateohernandez@gmail.com',
        pwd: 'clave.est11'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9325'),
    nombre_completo: "Isabella Castro",
    tipo: "estudiante",
    documento: "20010012",
    datos_estudiante: {nivel_musical: "avanzado"},
    datos_empleado: null,
    contacto: { 
        email: "isacastro@gmail.com", 
        telefono: "+57 3204567801" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    acceso: {
        email: 'isabellacastro@gmail.com',
        pwd: 'clave.est12'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9326'),
    nombre_completo: "David Romero",
    tipo: "estudiante",
    documento: "20010013",
    datos_estudiante: {nivel_musical: "principiante"},
    datos_empleado: null,
    contacto: { 
        email: "davidromero@gmail.com", 
        telefono: "+57 3214567802" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    acceso: {
        email: 'davidromero@gmail.com',
        pwd: 'clave.est13'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9327'),
    nombre_completo: "Juliana Cardenas",
    tipo: "estudiante",
    documento: "20010014",
    datos_estudiante: {nivel_musical: "intermedio"},
    datos_empleado: null,
    contacto: { 
        email: "julicardenas@gmail.com", 
        telefono: "+57 3224567803" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    acceso: {
        email: 'julianacardenas@gmail.com',
        pwd: 'clave.est14'
    }
  },
  {
    _id: ObjectId('68b83530e306a5d40bba9328'),
    nombre_completo: "Nicolas Fernandez",
    tipo: "estudiante",
    documento: "20010015",
    datos_estudiante: {nivel_musical: "avanzado"},
    datos_empleado: null,
    contacto: { 
        email: "nicolasfdez@gmail.com", 
        telefono: "+57 3234567804" },
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    acceso: {
        email: 'nicolasfernandez@gmail.com',
        pwd: 'clave.est15'
    }
  },
  {
    _id: ObjectId('68b6778a07c489c572b09828'),
    nombre_completo: "Karolain Reyes",
    tipo: "administrador",
    documento: "6666666666",
    datos_estudiante: null,
    datos_empleado: null,
    contacto: { 
        email: "karolainreyes@gmail.com", 
        telefono: "+57 323333333333" },
    sedeId: null,
    acceso: {
        email: 'karolainreyes@gmail.com',
        pwd: 'clave.admin'
    }
  },
])


// ====== SEDES ====== //


db.sedes.insertMany ([
    {
    _id: ObjectId('68b8241ae306a5d40bba92e0'),
    nombre_sede : "Conversatorio Nacional de música Colombiana",
    ciudad: "Bogotá",
    direccion: "Cra 7 # 12-34",
    capacidad: 500,
    cursos_disponibles: [
        { id_curso: ObjectId("68b91598c3eb79a67e677b33") ,estado:"Inactivo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b34") ,estado:"Activo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b35") ,estado:"Activo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b36") ,estado:"Inactivo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b37") ,estado:"Activo"}
        ]
},
{
    _id: ObjectId('68b8241ae306a5d40bba92e1'),
    nombre_sede: "En Cali es donde más se goza",
    ciudad: "Cali",
    direccion: "Cll 8 # 13-24",
    capacidad: 300,
    cursos_disponibles: [
        { id_curso: ObjectId("68b91598c3eb79a67e677b38") ,estado:"Inactivo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b39") ,estado:"Activo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b3a") ,estado:"Activo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b3b") ,estado:"Inactivo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b3c") ,estado:"Activo"}
        ]
},
{
    _id: ObjectId('68b8241ae306a5d40bba92e2'),
    nombre_sede: "Academia Musical Paisana",
    ciudad: "Medellín",
    direccion: "Cra 7 # 12-34",
    capacidad: 300,
    cursos_disponibles: [
        { id_curso: ObjectId("68b91598c3eb79a67e677b3d") ,estado:"Inactivo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b3e") ,estado:"Activo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b3f") ,estado:"Activo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b40") ,estado:"Inactivo"},
        { id_curso: ObjectId("68b91598c3eb79a67e677b41") ,estado:"Activo"}
        ]
    
},
])

// ====== CURSOS ====== //

db.cursos.insertMany([
  {
    _id: ObjectId("68b91598c3eb79a67e677b33"),
    nombre_curso: 'Introducción a Violín',
    instrumento: "Violín",
    nivel: "principiante",
    semanas_duracion: 12,
    capacidad: 12,
    cupos_disponibles: 8,
    programa: { dia_semana: "Martes", 
                hora_inicio: "18:00", 
                hora_fin: "20:00" },
    precio: 60000,
    },
  {
    _id: ObjectId("68b91598c3eb79a67e677b34"),
    nombre_curso: 'Guitarra Intermedia', 
    instrumento: "Guitarra",
    nivel: "intermedio",
    semanas_duracion: 16,
    capacidad: 15,
    cupos_disponibles: 5,
    programa: { dia_semana: "Jueves", 
                hora_inicio: "16:00", 
                hora_fin: "18:00" },
    precio: 70000,

  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b35"),
    nombre_curso: 'Piano Avanzado', 
    instrumento: "Piano",
    nivel: "avanzado",
    semanas_duracion: 20,
    capacidad: 10,
    cupos_disponibles: 5,
    programa: { dia_semana: "Sábado", 
                hora_inicio: "10:00", 
                hora_fin: "12:00" },
    precio: 80000,
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b36"),
    nombre_curso: 'Flauta Principiante',
    instrumento: "Flauta",
    nivel: "principiante",
    semanas_duracion: 10,
    capacidad: 20,
    cupos_disponibles: 18,
    programa: { dia_semana: "Lunes", 
                hora_inicio: "17:00", 
                hora_fin: "19:00" },
    precio: 50000,

  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b37"),
    nombre_curso: 'Clarinete intermedio',
    instrumento: "Clarinete",
    nivel: "intermedio",
    semanas_duracion: 14,
    capacidad: 12,
    cupos_disponibles: 10,
    programa: { dia_semana: "Miércoles", 
                hora_inicio: "19:00", 
                hora_fin: "21:00" },
    precio: 65000,
  },

  // SEDE CALI
  {
    _id: ObjectId("68b91598c3eb79a67e677b38"),
    nombre_curso: 'Trombón principiante',
    instrumento: "Trombón",
    nivel: "principiante",
    semanas_duracion: 12,
    capacidad: 10,
    cupos_disponibles: 10,
    programa: { dia_semana: "Miércoles", 
                hora_inicio: "18:00", 
                hora_fin: "20:00" },
    precio: 50000,
    
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b39"),
    nombre_curso: 'Trompeta Intermedio', 
    instrumento: "Trompeta",
    nivel: "intermedio",
    semanas_duracion: 16,
    capacidad: 10,
    cupos_disponibles: 9,
    programa: { dia_semana: "Jueves", 
                hora_inicio: "16:00", 
                hora_fin: "18:00" },
    precio: 85000,
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b3a"),
    nombre_curso: 'Saxofón Avanzado', 
    instrumento: "Saxofón",
    nivel: "avanzado",
    semanas_duracion: 20,
    capacidad: 10,
    cupos_disponibles: 0,
    programa: { dia_semana: "Sábado", 
                hora_inicio: "10:00", 
                hora_fin: "12:00" },
    precio: 80000,

  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b3b"),
    nombre_curso: 'Batería Principiante',
    instrumento: "Batería",
    nivel: "principiante",
    semanas_duracion: 10,
    capacidad: 20,
    cupos_disponibles: 6,
    programa: { dia_semana: "Lunes", 
                hora_inicio: "17:00", 
                hora_fin: "19:00" },
    precio: 55000,
    
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b3c"),
    nombre_curso: 'Xilófono intermedio',
    instrumento: "Xilófono",
    nivel: "intermedio",
    semanas_duracion: 14,
    capacidad: 12,
    cupos_disponibles: 4,
    programa: { dia_semana: "Miércoles", 
                hora_inicio: "19:00",  
                hora_fin: "21:00" },
    precio: 65000,
  },

  // SEDE MEDELLÍN
  {
    _id: ObjectId("68b91598c3eb79a67e677b3d"),
    nombre_curso: 'Contrabajo principiante',
    instrumento: "Contrabajo",
    nivel: "principiante",
    semanas_duracion: 12,
    capacidad: 10,
    cupos_disponibles: 5,
    programa: { dia_semana: "Miércoles", 
                hora_inicio: "18:00", 
                hora_fin: "20:00" },
    precio: 40000,
    
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b3e"),
    nombre_curso: 'Arpa Intermedio', 
    instrumento: "Arpa",
    nivel: "intermedio",
    semanas_duracion: 16,
    capacidad: 15,
    cupos_disponibles: 3,
    programa: { dia_semana: "Lunes", 
                hora_inicio: "16:00", 
                hora_fin: "18:00" },
    precio: 85000,
    
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b3f"),
    nombre_curso: 'Órgano Avanzado', 
    instrumento: "Órgano",
    nivel: "avanzado",
    semanas_duracion: 20,
    capacidad: 10,
    cupos_disponibles: 2,
    programa: { dia_semana: "Sábado", 
                hora_inicio: "10:00", 
                hora_fin: "12:00" },
    precio: 80000,
    
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b40"),
    nombre_curso: 'Oboe Principiante', 
    instrumento: "Oboe",
    nivel: "principiante",
    semanas_duracion: 10,
    capacidad: 20,
    cupos_disponibles: 20,
    programa: { dia_semana: "Lunes", 
                hora_inicio: "17:00", 
                hora_fin: "19:00" },
    precio: 55000,
  },
  {
    _id: ObjectId("68b91598c3eb79a67e677b41"),
    nombre_curso: 'Bajo Eléctrico',
    instrumento: "Bajo Eléctrico",
    nivel: "intermedio",
    semanas_duracion: 14,
    capacidad: 12,
    cupos_disponibles: 5,
    programa: { dia_semana: "Miércoles", 
                hora_inicio: "19:00", 
                hora_fin: "21:00" },
    precio: 65000,
    
  }
])

// ====== INSTRUMENTOS ====== //

db.instrumentos.insertMany([
  {
    _id: ObjectId('68ba4802f636cd7c4691cfff'),
    tipo_instrumento: "Violín",
    total: 8,
    disponibles: 8,
    sedeId: ObjectId("68b8241ae306a5d40bba92e0") 
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d000'),
    tipo_instrumento: "Guitarra",
    total: 5,
    disponibles: 5,
    sedeId: ObjectId("68b8241ae306a5d40bba92e0") 
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d001'),
    tipo_instrumento: "Piano",
    total: 10,
    disponibles: 10,
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d002'),
    tipo_instrumento: "Flauta",
    total: 6,
    disponibles: 6,
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d003'),
    tipo_instrumento: "Clarinete",
    total: 7,
    disponibles: 7,
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d004'),
    tipo_instrumento: "Trombón",
    total: 5,
    disponibles: 5,
    sedeId: ObjectId("68b8241ae306a5d40bba92e0")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d005'),
    tipo_instrumento: "Trompeta",
    total: 4,
    disponibles: 4,
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d006'),
    tipo_instrumento: "Saxofón",
    total: 3,
    disponibles: 3,
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d007'),
    tipo_instrumento: "Batería",
    total: 6,
    disponibles: 6,
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d008'),
    tipo_instrumento: "Xilófono",
    total: 5,
    disponibles: 5,
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d009'),
    tipo_instrumento: "Contrabajo",
    total: 4,
    disponibles: 4,
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d00a'),
    tipo_instrumento: "Arpa",
    total: 3,
    disponibles: 3,
    sedeId: ObjectId("68b8241ae306a5d40bba92e1")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d00b'),
    tipo_instrumento: "Órgano",
    total: 6,
    disponibles: 6,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d00c'),
    tipo_instrumento: "Oboe",
    total: 4,
    disponibles: 4,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d00d'),
    tipo_instrumento: "Fagot",
    total: 5,
    disponibles: 5,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d00e'),
    tipo_instrumento: "Bajo eléctrico",
    total: 3,
    disponibles: 3,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d00f'),
    tipo_instrumento: "Teclado",
    total: 4,
    disponibles: 4,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d010'),
    tipo_instrumento: "Caja",
    total: 3,
    disponibles: 3,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d011'),
    tipo_instrumento: "Congas",
    total: 4,
    disponibles: 4,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  },
  {
    _id: ObjectId('68ba4802f636cd7c4691d012'),
    tipo_instrumento: "Ukelele",
    total: 3,
    disponibles: 3,
    sedeId: ObjectId("68b8241ae306a5d40bba92e2")
  }
]);

// ====== INSCRIPCIONES ====== //

db.inscripciones.insertMany([
  {
    _id: ObjectId('68ba4badf636cd7c4691d013'),
    curso: 'Introducción a Violín',
    profesor: 'Pr. Juan Marinio',
    estudiante: 'Andresito Leal',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-03"),
    estado: "activo",
    costo: 60000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d014'),
    curso: 'Piano Avanzado',
    profesor: 'Pr.Laura Castanio',
    estudiante: 'Laura Medina',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-05"),
    estado: "completado",
    costo: 80000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d015'),
    curso: 'Clarinete intermedio',
    profesor: 'Pr.Carlos Herrera',
    estudiante: 'Carlos Rojas',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-07"),
    estado: "activo",
    costo: 65000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d016'),
    curso: 'Trombón principiante',
    profesor: 'Pr. Mariana Lopez',
    estudiante: 'Camila Vargas',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-10"),
    estado: "cancelado",
    costo: 50000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d017'),
    curso: 'Batería Principiante',
    profesor: 'Pr. Andres Molina',
    estudiante: 'Mateo Hernandez',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-12"),
    estado: "activo",
    costo: 55000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d018'),
    curso: 'Guitarra Intermedia',
    profesor: 'Pr. Juan Marinio',
    estudiante: 'Mariana Torres',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-13"),
    estado: "activo",
    costo: 70000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d019'),
    curso: 'Flauta Principiante',
    profesor: 'Pr.Laura Castanio',
    estudiante: 'Felipe Gomez',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-14"),
    estado: "cancelado",
    costo: 50000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d01a'),
    curso: 'Trombón principiante',
    profesor: 'Pr. Mariana Lopez',
    estudiante: 'Santiago Pardo',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-15"),
    estado: "activo",
    costo: 50000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d01b'),
    curso: 'Trompeta Intermedio',
    profesor: 'Pr. Santiago Perez',
    estudiante: 'Valentina Ruiz',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-16"),
    estado: "completado",
    costo: 85000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d01c'),
    curso: 'Saxofón Avanzado',
    profesor: 'Pr. Camila Duarte',
    estudiante: 'Ricardo Silva',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-17"),
    estado: "activo",
    costo: 80000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d01d'),
    curso: 'Batería Principiante',
    profesor: 'Pr. Andres Molina',
    estudiante: 'Diana Lopez',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-18"),
    estado: "cancelado",
    costo: 55000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d01e'),
    curso: 'Xilófono intermedio',
    profesor: 'Pr. Valentina Gomez',
    estudiante: 'Isabella Castro',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-19"),
    estado: "activo",
    costo: 65000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d01f'),
    curso: 'Bajo Eléctrico',
    profesor: 'Pr. Valentina Gomez',
    estudiante: 'David Romero',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-20"),
    estado: "completado",
    costo: 65000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d020'),
    curso: 'Contrabajo principiante',
    profesor: 'Pr. Ricardo Torres',
    estudiante: 'Juliana Cardenas',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-21"),
    estado: "activo",
    costo: 40000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d021'),
    curso: 'Oboe Principiante',
    profesor: 'Pr. Ricardo Torres',
    estudiante: 'Nicolas Fernandez',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-22"),
    estado: "activo",
    costo: 55000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d022'),
    curso: 'Arpa Intermedio',
    profesor: 'Pr. Diana Morales',
    estudiante: 'Mateo Hernandez',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-23"),
    estado: "cancelado",
    costo: 85000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d023'),
    curso: 'Órgano Avanzado',
    profesor: 'Pr. Diana Morales',
    estudiante: 'Isabella Castro',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-24"),
    estado: "completado",
    costo: 80000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d024'),
    curso: 'Clarinete intermedio',
    profesor: 'Pr.Carlos Herrera',
    estudiante: 'Carlos Rojas',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-25"),
    estado: "activo",
    costo: 65000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d025'),
    curso: 'Piano Avanzado',
    profesor: 'Pr.Laura Castanio',
    estudiante: 'Laura Medina',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-26"),
    estado: "completado",
    costo: 80000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d026'),
    curso: 'Introducción a Violín',
    profesor: 'Pr. Juan Marinio',
    estudiante: 'Diana Lopez',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-27"),
    estado: "cancelado",
    costo: 60000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d027'),
    curso: 'Flauta Principiante',
    profesor: 'Pr.Laura Castanio',
    estudiante: 'Andresito Leal',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-28"),
    estado: "activo",
    costo: 50000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d028'),
    curso: 'Guitarra Intermedia',
    profesor: 'Pr. Juan Marinio',
    estudiante: 'Felipe Gomez',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-29"),
    estado: "cancelado",
    costo: 70000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d029'),
    curso: 'Clarinete intermedio',
    profesor: 'Pr.Carlos Herrera',
    estudiante: 'Mariana Torres',
    sede: 'Conversatorio Nacional de música Colombiana',
    fecha_inscripcion: new Date("2025-03-30"),
    estado: "completado",
    costo: 65000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d02a'),
    curso: 'Trompeta Intermedio',
    profesor: 'Pr. Santiago Perez',
    estudiante: 'Camila Vargas',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-31"),
    estado: "activo",
    costo: 85000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d02b'),
    curso: 'Saxofón Avanzado',
    profesor: 'Pr. Camila Duarte',
    estudiante: 'Santiago Pardo',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-18"),
    estado: "cancelado",
    costo: 80000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d02c'),
    curso: 'Trombón principiante',
    profesor: 'Pr. Mariana Lopez',
    estudiante: 'Valentina Ruiz',
    sede: 'En Cali es donde más se goza',
    fecha_inscripcion: new Date("2025-03-19"),
    estado: "completado",
    costo: 50000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d02d'),
    curso: 'Bajo Eléctrico',
    profesor: 'Pr. Valentina Gomez',
    estudiante: 'Nicolas Fernandez',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-20"),
    estado: "activo",
    costo: 65000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d02e'),
    curso: 'Contrabajo principiante',
    profesor: 'Pr. Ricardo Torres',
    estudiante: 'David Romero',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-21"),
    estado: "cancelado",
    costo: 40000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d02f'),
    curso: 'Órgano Avanzado',
    profesor: 'Pr. Diana Morales',
    estudiante: 'Isabella Castro',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-22"),
    estado: "activo",
    costo: 80000
  },
  {
    _id: ObjectId('68ba4badf636cd7c4691d030'),
    curso: 'Arpa Intermedio',
    profesor: 'Pr. Diana Morales',
    estudiante: 'Juliana Cardenas',
    sede: 'Academia Musical Paisana',
    fecha_inscripcion: new Date("2025-03-23"),
    estado: "completado",
    costo: 85000
  }
])

// ====== RESERVAS INSTRUMENTOS ====== //

db.reservas_instrumentos.insertMany([
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691cfff"), // Violín (Bogotá)
    estudianteId: ObjectId("68b83530e306a5d40bba931a"),  // Andresito Leal (Bogotá)
    fecha_reserva: new Date("2025-09-12")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d000"), // Guitarra (Bogotá)
    estudianteId: ObjectId("68b83530e306a5d40bba931b"),  // Laura Medina (Bogotá)
    fecha_reserva: new Date("2025-09-13")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d001"), // Piano (Bogotá)
    estudianteId: ObjectId("68b83530e306a5d40bba931c"),  // Carlos Rojas (Bogotá)
    fecha_reserva: new Date("2025-09-14")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d005"), // Trompeta (Cali)
    estudianteId: ObjectId("68b83530e306a5d40bba931f"),  // Camila Vargas (Cali)
    fecha_reserva: new Date("2025-09-15")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d006"), // Saxofón (Cali)
    estudianteId: ObjectId("68b83530e306a5d40bba9320"),  // Santiago Pardo (Cali)
    fecha_reserva: new Date("2025-09-16")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d007"), // Batería (Cali)
    estudianteId: ObjectId("68b83530e306a5d40bba9321"),  // Valentina Ruiz (Cali)
    fecha_reserva: new Date("2025-09-17")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d00b"), // Órgano (Medellín)
    estudianteId: ObjectId("68b83530e306a5d40bba9324"),  // Mateo Hernandez (Medellín)
    fecha_reserva: new Date("2025-09-18")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d00c"), // Oboe (Medellín)
    estudianteId: ObjectId("68b83530e306a5d40bba9325"),  // Isabella Castro (Medellín)
    fecha_reserva: new Date("2025-09-19")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e2"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d00e"), // Bajo eléctrico (Medellín)
    estudianteId: ObjectId("68b83530e306a5d40bba9326"),  // David Romero (Medellín)
    fecha_reserva: new Date("2025-09-20")
  },
  {
    sedeId: ObjectId("68b8241ae306a5d40bba92e1"),
    instrumentoId: ObjectId("68ba4802f636cd7c4691d009"), // Contrabajo (Cali)
    estudianteId: ObjectId("68b83530e306a5d40bba9322"),  // Ricardo Silva (Cali)
    fecha_reserva: new Date("2025-09-21")
  }
]);
