import { ChangeEvent, useState } from "react";

export default function PasswordInput() {
  const dots = Array.from({ length: 3 }, () => 0);
  const [strength, setStrength] = useState(0);
  const requirements = [/[a-z]/, /[A-Z]/, /\d/, /[@$!%*?&]/, /.{10,}/];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    const validRequirements = requirements
      .map((rule) => rule.test(password))
      .filter(Boolean).length;

    let strength = 0;
    if (validRequirements === 5) {
      strength = 3;
    } else if (validRequirements > 3) {
      strength = 2;
    } else if (validRequirements > 2) {
      strength = 1;
    }

    setStrength(strength);
  };

  const getColor = () => {
    switch (strength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-orange-500";
      case 3:
        return "bg-green-500";
    }
  };

  return (
    <div>
      <label>Mot de passe</label>
      <input
        onChange={handleChange}
        className="block border-2 rounded p-1 w-full"
        type="password"
        name="password"
      />
      <div className="mt-4 grid grid-cols-3 gap-4">
        {dots.map((_, index) => (
          <div
            key={index}
            className={`border-2 rounded-full min-h-3 ${
              index + 1 <= strength && getColor()
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
