
//📌 Reservar un instrumento para un estudiante

//Insertar un documento en reservas_instrumentos.

//Decrementar disponibles en la colección instrumentos.

//Hacer rollback si el instrumento no tiene unidades disponibles.


const session = db.getMongo().startSession();
const dbSession = session.getDatabase("campus_music");
session.startTransaction();

try {

  dbSession.reservas_instrumentos.insertOne(
    {   sedeId: ObjectId("68b8241ae306a5d40bba92e0"),
        instrumentoId: ObjectId("68ba4802f636cd7c4691cfff"), // Violín (Bogotá)
        estudianteId: ObjectId("68b83530e306a5d40bba931a"),  // Andresito Leal (Bogotá)
        fecha_reserva: new Date("2025-09-12")
      }
  );

  session.commitTransaction();
  print("Venta registrada correctamente");
} catch (e) {
  session.abortTransaction();
  print("Error:", e);
} finally {
  session.endSession();
}
print("Fin del script")







