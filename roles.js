
//Roll Admin: Acceso total

db.createRole({
  role: "adminAcademia",
  privileges: [
    {
      resource: { db: "campus_music", collection: "" }, 
      actions: ["find", "insert", "update", "remove", "createCollection", "createIndex"]
    }
  ],
  roles: [
    { role: "readWrite", db: "campus_music" },  
    { role: "dbAdmin", db: "campus_music" }    
  ]
});

//Rol empleado: Acceso limitado solo a inscripciones y reservas en su sede.

db.createRole({
  role: "profesor",
  privileges: [
    {
      resource: { db: "campus_music", collection: "estudiantes" },
      actions: ["find"]
    },
    {
        resource: { db: "campus_music", collection: "profesores" },
        actions: ["find"]
    },
    {
      resource: { db: "campus_music", collection: "cursos" },
      actions: ["find"]
    },
    {
      resource: { db: "campus_music", collection: "inscripciones" },
      actions: ["find", "insert", "update"]
    },
    {
      resource: { db: "campus_music", collection: "reservas_instrumentos" },
      actions: ["find", "insert", "update"]
    }
  ],
  roles: []
});

//Rol estudiante: Acceso únicamente a sus propios datos, cursos y reservas

db.createRole({
  role: "estudiante",
  privileges: [
    {
      resource: { db: "campus_music", collection: "estudiantes" },
      actions: ["find", "update"]
    },
    {
      resource: { db: "campus_music", collection: "cursos" },
      actions: ["find"]
    },
    {
      resource: { db: "campus_music", collection: "inscripciones" },
      actions: ["find", "insert"]
    },
    {
      resource: { db: "campus_music", collection: "reservas_instrumentos" },
      actions: ["find", "insert"]
    }
  ],
  roles: []
});

// Asignacion de roles

// Administrador global
db.createUser({
  user: "admin1",
  pwd: "SuperSecret123",
  roles: ["adminAcademia"]
});

// Empleado de sede
db.createUser({
  user: "empleadoBogota",
  pwd: "Empleado123",
  roles: ["profesor"]
});

// Estudiante
db.createUser({
  user: "estudianteJuan",
  pwd: "Juan123",
  roles: ["estudiante"]
});
