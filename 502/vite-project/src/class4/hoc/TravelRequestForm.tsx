import React, { useState } from 'react';
import InputField from './InputField'; 
import { Button } from '../L03535511/App'; 

const TravelRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    purpose: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registro enviado!'); 
    console.log('Solicitud de viaje enviada:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Destino"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
      />
      <InputField
        label="Fecha de Inicio"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
      />
      <InputField
        label="Fecha de Fin"
        name="endDate"
        type="date"
        value={formData.endDate}
        onChange={handleChange}
      />
      <InputField
        label="Propósito"
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
      />
      <Button
        type="submit"
        label="Enviar Solicitud"
        variant="primary"
        fullWidth
      />
    </form>
  );
};

export default TravelRequestForm;