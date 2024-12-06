"use client";

import PasswordInput from "@/components/PasswordInput";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await api.post("/auth/register", {
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (response.status !== 201) {
      alert("Une erreur est survenue");
    }

    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
      <div className="m-auto border shadow p-4 rounded-lg min-w-[500px]">
        <h1 className="text-lg font-bold">Création de compte</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              className="block border-2 rounded p-1 w-full"
              type="email"
              name="email"
            />
          </div>
          <PasswordInput />
          <div className="flex justify-center">
            <button className="border rounded-full px-4 py-2 bg-blue-500 text-white">
              Créer mon compte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
