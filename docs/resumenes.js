// Centralizador de resúmenes
// Se asegura de que las variables existan antes de asignarlas
const bancoDeResumenes = {
  sistemas: typeof resumenSistemas !== 'undefined' ? resumenSistemas : "<p>Resumen no disponible.</p>",
  bases: typeof resumenBases !== 'undefined' ? resumenBases : "<p>Resumen no disponible.</p>",
  entornos: typeof resumenEntornos !== 'undefined' ? resumenEntornos : "<p>Resumen no disponible.</p>",
  programacion: typeof resumenProgramacion !== 'undefined' ? resumenProgramacion : "<p>Resumen no disponible.</p>",
  empleabilidad: typeof resumenEmpleabilidad !== 'undefined' ? resumenEmpleabilidad : "<p>Resumen no disponible.</p>",
  lenguajeMarcas: typeof resumenLenguajeMarcas !== 'undefined' ? resumenLenguajeMarcas : "<p>Resumen no disponible.</p>"
};
