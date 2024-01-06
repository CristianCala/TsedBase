// Ordenados por: Predeterminado, Ascendente, Descendente (por disciplina y cédula y/o certificado de nacimiento)

// * Ordenados por: Predeterminado, Ascendente, Descendente (por disciplina y cédula y/o certificado de nacimiento)
export const orden = [
  {
    value: "1",
    label: "Predeterminado",
  },
  {
    value: "asc",
    label: "Ascendente",
  },
  {
    value: "desc",
    label: "Descendente",
  },
  {
    value: "disciplina",
    label: "Por disciplina",
  },
  {
    value: "cedula",
    label: "cédula y/o certificado de nacimiento",
  },
];

// * array create random
export function createArrayRand(count = null) {
  const countItems = count || Math.round((Math.random() + 0.1) * 10);
  let newArr = [];
  for (let index = 1; index <= countItems; index++) {
    newArr = [...newArr, index];
  }

  return newArr;
}
