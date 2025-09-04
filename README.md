# 🎵 Campus Music – Gestión Académica con MongoDB  

## 📌 Descripción  
**Campus Music** es un sistema de gestión académica para una red de escuelas de música en Colombia.  
El proyecto migra de hojas de cálculo a **MongoDB**, mejorando la **flexibilidad**, la **consistencia de datos** y soportando **operaciones transaccionales** (ej. inscripción de estudiantes en cursos).  

El sistema maneja:  
- Registro de estudiantes, profesores y cursos.  
- Administración de sedes en distintas ciudades.  
- Gestión de instrumentos y reservas.  
- Inscripciones con validación de cupos y transacciones.  
- Consultas analíticas (ej: cursos más demandados por sede).  
- Control de acceso con **roles personalizados**.  

---

## 📂 Estructura de la base de datos  

El sistema utiliza las siguientes colecciones principales:

- **`sedes`** → Información de cada sede (ciudad, dirección, capacidad).  
- **`profesores`** → Datos de profesores, experiencia y especialidades.  
- **`estudiantes`** → Datos de estudiantes, contacto y nivel musical.  
- **`cursos`** → Cursos dictados, con sede, profesor, instrumento, nivel, cupos y horarios.  
- **`instrumentos`** → Inventario de instrumentos disponibles por sede.  
- **`reservasInstrumentos`** → Reservas de instrumentos hechas por estudiantes.  
- **`inscripciones`** → Inscripciones de estudiantes en cursos, con costo congelado y estado.  
- **`usuarios`** → (Opcional) Manejo de credenciales y roles de acceso.  

---

## 🗂️ Ejemplo de documentos

### Estudiantes
```json
{
  "_id": ObjectId("68b83530e306a5d40bba931a"),
  "documento": "20010001",
  "nombre_completo": "Andresito Leal",
  "contacto": { "email": "andres07@gmail.com", "telefono": "+57 3224567890" },
  "nivel_musical": "principiante",
  "sedeId": ObjectId("68b8241ae306a5d40bba92e0"),
  "createdAt": ISODate("2025-09-01T00:00:00Z")
}
```

### Cursos
```json
{
  "_id": ObjectId("68b8d4085a3e1e5f7bc73014"),
  "nombre_curso": "Introducción a Violín",
  "sedeId": ObjectId("68b8241ae306a5d40bba92e0"),
  "profesorId": ObjectId("68b82480e306a5d40bba92e3"),
  "instrumento": "Violín",
  "nivel": "principiante",
  "semanas_duracion": 12,
  "programa": { "dia_semana": "Martes", "hora_inicio": "18:00", "hora_fin": "20:00" },
  "precio": 60000,
  "capacidad": 12,
  "cupos_disponibles": 12
}
```

---

## ⚙️ Requisitos

- **MongoDB 6.x+** (modo **replica set** activado para soportar transacciones).  
- **mongosh** para ejecutar comandos desde la shell.  
- (Opcional) **Node.js 18+** si quieres correr scripts o APIs en JavaScript.  

---

## 🚀 Instalación y carga de datos

1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/KarolainReyes/campus-music.git
   cd campus-music
   ```

2. Iniciar MongoDB en modo replica set:  
   ```bash
   mongod --dbpath /data/db --replSet rs0
   mongosh --eval "rs.initiate()"
   ```

3. Crear la base de datos y colecciones:  
   ```bash
   use campus_music
   load("scripts/createCollections.js")
   ```

4. Poblar con datos de ejemplo (sedes, cursos, profesores, estudiantes, etc.):  
   ```bash
   load("scripts/seed.js")
   ```

---

## 🔒 Seguridad y Roles

Se definen roles personalizados:  

- **Administrador** → acceso total a todas las colecciones.  
- **Empleado de sede** → acceso limitado a estudiantes/profesores/cursos de su sede; puede registrar inscripciones y reservas.  
- **Estudiante** → acceso solo a su información, historial y reservas.  

Ejemplo de creación de rol:  
```js
db.createRole({
  role: "administrador",
  privileges: [
    { resource: { db: "campus_music", collection: "" }, actions: ["find", "insert", "update", "remove"] }
  ],
  roles: []
});
```

---

## 🔄 Ejemplo de Transacción

Escenario: **Inscribir estudiante en un curso**.  
- Insertar en `inscripciones`.  
- Decrementar `cupos_disponibles` en `cursos`.  
- Rollback automático si ocurre un error.  

```js
const session = db.getMongo().startSession();
const dbs = session.getDatabase("campus_music");

try {
  session.startTransaction();

  const studentId = ObjectId("...");
  const courseId  = ObjectId("...");

  const curso = dbs.cursos.findOne({ _id: courseId }, { session });
  if (curso.cupos_disponibles <= 0) throw new Error("No hay cupos disponibles");

  dbs.cursos.updateOne(
    { _id: courseId, cupos_disponibles: { $gt: 0 } },
    { $inc: { cupos_disponibles: -1 } },
    { session }
  );

  dbs.inscripciones.insertOne({
    estudianteId: studentId,
    cursoId: courseId,
    sedeId: curso.sedeId,
    profesorId: curso.profesorId,
    estado: "activo",
    fecha_inscripcion: new Date(),
    costo: curso.precio
  }, { session });

  session.commitTransaction();
  print("✅ Inscripción exitosa");
} catch (e) {
  session.abortTransaction();
  print("❌ Transacción abortada:", e);
} finally {
  session.endSession();
}
```

---

## 📊 Consultas Analíticas

Ejemplo: **Cursos más demandados por sede**.  
```js
db.inscripciones.aggregate([
  { $group: { _id: { sedeId: "$sedeId", cursoId: "$cursoId" }, total: { $sum: 1 } } },
  { $lookup: { from: "cursos", localField: "_id.cursoId", foreignField: "_id", as: "curso" } },
  { $unwind: "$curso" },
  { $lookup: { from: "sedes", localField: "_id.sedeId", foreignField: "_id", as: "sede" } },
  { $unwind: "$sede" },
  { $sort: { total: -1 } },
  { $group: { _id: "$sede.nombre_sede", curso_mas_demandado: { $first: "$curso.nombre_curso" }, inscripciones: { $first: "$total" } } }
]);
```

---


📌 **Autor:** Karolain Reyes
📌 **Proyecto académico:** Migración de Campus Music a MongoDB  
