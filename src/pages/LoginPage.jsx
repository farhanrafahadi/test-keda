import { useEffect, useState } from "react";

const LoginPage = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.({ email, password });
  };

  const inputClass =
    "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="relative w-full max-w-sm bg-white p-6 sm:p-8 rounded-xl shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-3 right-4 text-2xl leading-none text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <div className="mx-auto mb-3 w-11 h-11 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center">
            G
          </div>
          <h2 id="login-title" className="text-2xl font-bold text-gray-800">
            Login ERP
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Masukkan email dan password Anda
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col justify-start">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 text-start"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoFocus
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col justify-start">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 text-start"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              className={inputClass}
            />
          </div>

          <div className="text-right -mt-1">
            <a href="#" className="text-sm text-cyan-600 hover:underline">
              Lupa password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-md bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition cursor-pointer"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
