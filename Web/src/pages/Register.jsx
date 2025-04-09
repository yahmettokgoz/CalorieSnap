import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Kayıt başarılı!');
      console.log('Kullanıcı:', userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-12 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-green-600 mb-8">
          Kayıt Ol
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">İsim</label>
            <input
              type="text"
              placeholder="Adınızı girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input
              type="password"
              placeholder="Şifrenizi girin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Kayıt Ol
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
        {success && <p className="mt-4 text-center text-green-600">{success}</p>}
        <p className="mt-6 text-center text-sm text-gray-600">
          Zaten hesabın var mı?{' '}
          <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Giriş Yap
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;