const session = db.getMongo().startSession();
const dbs = session.getDatabase("campus_music");

try {
  session.startTransaction();

  const studentId = ObjectId("68b83530e306a5d40bba931a");
  const courseId  = ObjectId("68b90419004b3437c4735314");

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
  print("Inscripción exitosa");
} catch (e) {
  session.abortTransaction();
  print("Transacción abortada:", e);
} finally {
  session.endSession();
}