import React, { useState } from 'react';

type TravelRequest = {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
};

type TravelRequestFormProps = {
  onSubmit: (request: TravelRequest) => void;
};

export default function TravelRequestForm({ onSubmit }: TravelRequestFormProps) {
  const [formState, setFormState] = useState<TravelRequest>({
    destination: '',
    startDate: '',
    endDate: '',
    purpose: '',
  });
  
  const [errors, setErrors] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    purpose: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = {
      destination: formState.destination ? '' : 'Destination is required',
      startDate: formState.startDate ? '' : 'Start date is required',
      endDate: formState.endDate ? '' : 'End date is required',
      purpose: formState.purpose ? '' : 'Purpose is required',
    };

    setErrors(validationErrors);

    // Verificar si hay errores
    if (!validationErrors.destination && !validationErrors.startDate && !validationErrors.endDate && !validationErrors.purpose) {
      onSubmit(formState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Destino</label>
      <input
        name="destination"
        type="text"
        placeholder="Destination"
        onChange={handleChange}
      />
      {errors.destination && <p>{errors.destination}</p>}

      <label>Fecha de inicio</label>
      <input
        name="startDate"
        type="date"
        placeholder="Start Date"
        onChange={handleChange}
      />
      {errors.startDate && <p>{errors.startDate}</p>}

      <label>Fecha de fin</label>
      <input
        name="endDate"
        type="date"
        placeholder="End Date"
        onChange={handleChange}
      />
      {errors.endDate && <p>{errors.endDate}</p>}

      <label>Propósito</label>
      <input
        name="purpose"
        type="text"
        placeholder="Purpose"
        onChange={handleChange}
      />
      {errors.purpose && <p>{errors.purpose}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}
