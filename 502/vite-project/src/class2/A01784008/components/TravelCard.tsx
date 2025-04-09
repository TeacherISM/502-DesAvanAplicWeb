type TravelCardProps = {
    solicitante: string;
    puesto: string;
    origen: string;
    destino: string;
    fechaInicio: string;
    fechaFin: string;
    motivo: string;
  };
  
  export default function TravelCard({
    solicitante,
    puesto,
    origen,
    destino,
    fechaInicio,
    fechaFin,
    motivo,
  }: TravelCardProps) {
    return (
      <div className="travel-card">
        <h3>{solicitante} - {puesto}</h3>
        <p><strong>Origen:</strong> {origen}</p>
        <p><strong>Destino:</strong> {destino}</p>
        <p><strong>Fechas:</strong> {fechaInicio} → {fechaFin}</p>
        <p><strong>Motivo:</strong> {motivo}</p>
      </div>
    );
  }
  