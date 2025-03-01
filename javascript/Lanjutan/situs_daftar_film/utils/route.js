export const route = (hash) => {
  if (hash === "") {
    // berada di halaman home
    console.log("Home Page");
  } else if (hash === "detail") {
    // berada di halaman detail
    console.log("Detail Page");
  } else {
    // halaman tidak ditemukan
    console.log("Not Found Page");
  }
};
