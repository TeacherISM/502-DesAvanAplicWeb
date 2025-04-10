import { useState } from 'react';
import TravelCard from './TravelCard';

type FormData = {
  solicitante: string;
  puesto: string;
  origen: string;
  destino: string;
  fechaInicio: string;
  fechaFin: string;
  motivo: string;
};

export default function TravelForm() {
  const [form, setForm] = useState<FormData>({
    solicitante: '',
    puesto: '',
    origen: '',
    destino: '',
    fechaInicio: '',
    fechaFin: '',
    motivo: ''
  });

  const [cards, setCards] = useState<FormData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCards([...cards, form]);
    setForm({
      solicitante: '',
      puesto: '',
      origen: '',
      destino: '',
      fechaInicio: '',
      fechaFin: '',
      motivo: ''
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input name="solicitante" placeholder="Nombre del solicitante" value={form.solicitante} onChange={handleChange} />
        <input name="puesto" placeholder="Puesto en la empresa" value={form.puesto} onChange={handleChange} />
        <input name="origen" placeholder="Ciudad de origen" value={form.origen} onChange={handleChange} />
        <input name="destino" placeholder="Ciudad destino" value={form.destino} onChange={handleChange} />
        <input type="date" name="fechaInicio" value={form.fechaInicio} onChange={handleChange} />
        <input type="date" name="fechaFin" value={form.fechaFin} onChange={handleChange} />
        <textarea name="motivo" placeholder="Motivo del viaje" value={form.motivo} onChange={handleChange} />
        <button type="submit">Crear solicitud</button>
      </form>

      <div className="card-list">
        {cards.map((card, index) => (
          <TravelCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}
