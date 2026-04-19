import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  async function login() {
    const { error } = await supabase!.auth.signInWithPassword({ email, password });
    if (error) {
      setMsg('Login gagal. Cek email dan password.');
    } else {
      navigate('/admin');
    }
  }

  return (
    <main className="min-h-screen bg-cream-50 flex items-center justify-center px-4">
      <div className="bg-cream-100 p-8 rounded-2xl shadow w-full max-w-sm space-y-4">
        <h1 className="font-serif text-xl font-bold text-warm-900">Login Admin</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-warm-200 rounded-lg px-4 py-2 text-sm text-warm-900 bg-cream-50"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-warm-200 rounded-lg px-4 py-2 text-sm text-warm-900 bg-cream-50"
        />
        <button
          onClick={login}
          className="w-full bg-warm-800 text-cream-100 py-2 rounded-lg text-sm hover:bg-warm-700 transition-colors"
        >
          Masuk
        </button>
        {msg && <p className="text-red-500 text-sm">{msg}</p>}
      </div>
    </main>
  );
}