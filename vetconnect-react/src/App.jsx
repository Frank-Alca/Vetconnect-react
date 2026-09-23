import "./App.css";
import Header from "./components/Header";
import FormMascota from "./components/FormMascota";
import { useState } from "react";
import MascotaCard from "./components/MascotaCard";

export default function App() {

  const [mascotas, setMascotas] = useState([
    {
      id: 1,
      nombre: "Firulais",
      especie: "Perro",
      edad: 5,
      vacunada: true
    },
    {
      id: 2,
      nombre: "Michi",
      especie: "Gato",
      edad: 3,
      vacunada: false
    }
  ]);

  function registrarMascota(nuevaMascota) {
    const mascotaConId = {
      id: Date.now(),
      ...nuevaMascota
    };

    setMascotas([
      ...mascotas,
      mascotaConId
    ]);
  }

  return (
    <>
      <Header />

      <main className="contenedor">
        <h2>Mascotas</h2>

        <FormMascota
          onRegistrar={registrarMascota}
        />

        <section className="lista-mascotas">
          {mascotas.map((mascota) => (
            <MascotaCard
              key={mascota.id}
              nombre={mascota.nombre}
              especie={mascota.especie}
              edad={mascota.edad}
              vacunada={mascota.vacunada}
            />
          ))}
        </section>

      </main>
    </>
  );
}