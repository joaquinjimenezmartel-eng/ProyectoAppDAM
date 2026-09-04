const bancoDeResumenes = Object.fromEntries(
  catalogoAsignaturas.map((asignatura) => [
    asignatura.id,
    asignatura.resumen || "<p>Resumen no disponible.</p>"
  ])
);
