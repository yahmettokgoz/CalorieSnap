import React from 'react';


function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 px-4">
<div className="w-full max-w-lg bg-white p-12 rounded-2xl shadow-xl">
<h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Kayıt Ol
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">İsim</label>
            <input
              type="text"
              placeholder="Adınızı girin"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
            <input
              type="password"
              placeholder="Şifrenizi girin"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Kayıt Ol
          </button>
        </form>
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
