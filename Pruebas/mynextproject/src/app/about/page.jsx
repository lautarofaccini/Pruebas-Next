"use client";
import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>Acerca de Nosotros</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sunt
        consequuntur placeat natus modi itaque illo ratione repellendus rerum
        velit hic facere, id eaque totam provident aliquid repudiandae qui
        architecto, vel, a doloremque expedita veniam nam similique! Quo magnam
        excepturi sunt ipsum? Nesciunt necessitatibus sint ipsa aliquam
        cupiditate ipsum odio, quis reiciendis ab dolor assumenda, eveniet
        debitis odit blanditiis eum repudiandae nemo ratione officia, dolorum in
        praesentium enim facere deleniti dicta. Deleniti sint ipsa error
        assumenda natus asperiores exercitationem consectetur, nemo iste itaque
        illo, autem dolore reprehenderit eos eius cupiditate quaerat dolorem?
        Dolor asperiores aperiam natus, aliquid repudiandae et ea.
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert("excecuting code");
          router.push("/");
        }}
      >
        Volver
      </button>
    </section>
  );
}

export default AboutPage;
