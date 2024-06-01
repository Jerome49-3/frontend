const doc = document;

doc.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");
  doc.querySelector("#form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://site--backendsendmail--s4qnmrl7fg46.code.run/send-mail",
      {
        fistname: doc.querySelector("#firstname").value,
        lastname: doc.querySelector("#lastname").value,
        email: doc.querySelector("#email").value,
        subject: doc.querySelector("#subject").value,
        message: doc.querySelector("#message").value,
      }
    );
    console.log("response.data:", response.data);
    alert("email envoyé");
  });
});
