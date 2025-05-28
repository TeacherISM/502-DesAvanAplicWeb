import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// --- 1. Esquema de validación ----------------------------------------------
const travelSchema = z
  .object({
    destination: z.string().min(1, "Destination is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    purpose: z.string().min(1, "Purpose is required"),
  })
  .refine((d) => new Date(d.endDate) > new Date(d.startDate), {
    path: ["endDate"],
    message: "End date must be after start date",
  });

type TravelFormData = z.infer<typeof travelSchema>;

// --- 2. Componente ----------------------------------------------------------
export default function TravelRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TravelFormData>({
    resolver: zodResolver(travelSchema),
  });

  const onSubmit = (data: TravelFormData) => {
    console.log("Travel request:", data);
    alert("Form sent ✔");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">New Travel Request</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Destination ------------------------------------------------------ */}
        <div>
          <label className="block text-sm font-medium mb-1">Destination</label>
          <input
            type="text"
            {...register("destination")}
            className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.destination ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.destination && (
            <p className="text-red-600 text-sm mt-1">
              {errors.destination.message}
            </p>
          )}
        </div>

        {/* Dates ------------------------------------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start date</label>
            <input
              type="date"
              {...register("startDate")}
              className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.startDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.startDate && (
              <p className="text-red-600 text-sm mt-1">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">End date</label>
            <input
              type="date"
              {...register("endDate")}
              className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.endDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.endDate && (
              <p className="text-red-600 text-sm mt-1">
                {errors.endDate.message}
              </p>
            )}
          </div>
        </div>

        {/* Purpose ---------------------------------------------------------- */}
        <div>
          <label className="block text-sm font-medium mb-1">Purpose</label>
          <textarea
            rows={4}
            {...register("purpose")}
            className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.purpose ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.purpose && (
            <p className="text-red-600 text-sm mt-1">
              {errors.purpose.message}
            </p>
          )}
        </div>

        {/* Submit ----------------------------------------------------------- */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
