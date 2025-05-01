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
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear errors when user types
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    
    // Check if all fields are filled
    const isAnyFieldEmpty = Object.values(form).some(value => value === '');
    if (isAnyFieldEmpty) {
      newErrors.push('Todos los campos son obligatorios');
    }
    
    // Check dates if both are provided
    if (form.fechaInicio && form.fechaFin) {
      const startDate = new Date(form.fechaInicio);
      const endDate = new Date(form.fechaFin);
      
      if (endDate < startDate) {
        newErrors.push('La fecha de fin no puede ser anterior a la fecha de inicio');
      }
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
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
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <div className="error-message">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        
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
