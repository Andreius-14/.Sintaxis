// │                  PROMESAS                     │
// │                  PROMESAS                     │
// │                  PROMESAS                     │
// │                  PROMESAS                     │
// │                  PROMESAS                     │
// │                  PROMESAS                     │

// ┌────────────────────────
// │  => BASICO
// └────────────────────────

// ANTES
getData(
  function (data) {},
  function (error) {},
);

// DESPUES
getData()
  .then((data) => {
    // hacer algo con data
  })
  .catch((error) => {
    // manejar error
  });

// ┌────────────────────────
// │  => MEDIO
// └────────────────────────

// Antes
getData(function (data) {
  processData(data, function (processedData) {
    showData(processedData, function (finalData) {
      // hacer algo con finalData
    });
  });
});

// Después
getData()
  .then((data) => processData(data))
  .then((processedData) => showData(processedData))
  .then((finalData) => {
    // hacer algo con finalData
  });

// ┌────────────────────────
// │  => AVANZADO - CREANDO
// └────────────────────────

// --> Por lo general se solia crear promesas dentro de functiones
// --> Las Promesas Termin de Cargarse para lanzar Reulstado
const promesa = new Promise((resolve, reject) => {
  // Accion que se ejecutara
  setTimeout(() => {
    const exito = false;
    if (exito) {
      resolve("La operacion tuvo exito"); // Ejecutura -> .then
    } else {
      reject("La operacion no tuvo exito"); // Ejecutara -> .catch
    }
  }, 4000);
});

promesa
  .then((mensaje) => {
    console.log("Éxito:", mensaje); // Usamos console.log para evitar interrupciones con alert
  })
  .catch((mensaje) => {
    console.error("Error:", mensaje); // Usamos console.error para mensajes de error
  });

// --> Datos seria un Objeto Json

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

getDatos().then((datos) => console.log(datos));

// --> Async / await con Promesas

const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

async function read() {
  try {
    const result = await getText("./data/first.txt");
    console.log(result);

    const result2 = await getText("./data/second.txt");
    console.log(result2);

    const result3 = await getText("./data/third.txt");
    console.log(result3);

    const result4 = await getText("./data/fourth.txt");
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}

read();

// │                  ASYNC/AWAIT                     │
// │                  ASYNC/AWAIT                     │
// │                  ASYNC/AWAIT                     │
// │                  ASYNC/AWAIT                     │
// │                  ASYNC/AWAIT                     │
// │                  ASYNC/AWAIT                     │

// --> Obliga a Esperar una respuesta
// --> Si se usa dentro de una function esta debe portar async como corona
//const fs = require("fs").promises;

async function escribir(path, contenido) {
  try {
    await fs.writeFile(path, contenido);
  } catch (error) {
    console.error(error);
  }
}

//const fs = require("fs/promises");

async function leerArchivo(rutaArchivo) {
  try {
    const contenido = await fs.readFile(rutaArchivo, "utf8");
    console.log(contenido);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

leerArchivo("miArchivo.txt"); // Reemplaza 'miArchivo.txt' con la ruta a tu archivo.

// --> ASYNC AWAIT -- AVANZADO
const getNombreAsync = async (idPost) => {
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`,
    );
    const post = await resPost.json();
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`,
    );
    const user = await resUser.json();
    console.log(user.name);
  } catch (error) {
    console.log(error);
  }
};

getNombreAsync(80);
