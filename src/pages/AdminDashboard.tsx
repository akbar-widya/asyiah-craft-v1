import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useSettings } from "../hooks/useSettings";

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const settings = useSettings();
  const [whatsapp, setWhatsapp] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase?.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/admin/login");
      else setSession(data.session);
    });
    supabase?.auth.onAuthStateChange((_e, s) => {
      if (!s) navigate("/admin/login");
      else setSession(s);
    });
  }, []);

  useEffect(() => {
    setWhatsapp(settings.whatsapp_number);
    setImageUrl(settings.pricelist_image_url);
  }, [settings]);

  async function logout() {
    await supabase!.auth.signOut();
    navigate("/admin/login");
  }

  async function saveWhatsapp() {
    setSaving(true);
    const { error } = await supabase!
      .from("settings")
      .update({
        whatsapp_number: whatsapp,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);
    setMsg(error ? "Gagal simpan." : "Nomor WA tersimpan.");
    setSaving(false);
  }
  async function uploadImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const path = `pricelist.${file.name.split(".").pop()}`;

    const { data: upData, error: upErr } = await supabase!.storage
      .from("pricelist")
      .upload(path, file, { upsert: true });

    console.log("upload result:", upData, upErr);

    if (upErr) {
      setMsg("Gagal upload: " + upErr.message);
      setUploading(false);
      return;
    }

    const { data } = supabase!.storage.from("pricelist").getPublicUrl(path);
    console.log("public url:", data.publicUrl);

    const url = `${data.publicUrl}?t=${Date.now()}`;
    const { error: updateErr } = await supabase!
      .from("settings")
      .update({
        pricelist_image_url: url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1);

    console.log("settings update error:", updateErr);

    setImageUrl(url);
    setMsg("Foto pricelist tersimpan.");
    setUploading(false);
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-cream-50 py-12 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-xl font-bold text-warm-900">
            Pengaturan
          </h1>
          <button
            onClick={logout}
            className="text-sm text-warm-500 underline hover:text-warm-700"
          >
            Keluar
          </button>
        </div>

        <div className="bg-cream-100 p-6 rounded-2xl shadow space-y-3">
          <h2 className="font-medium text-warm-800">Nomor WhatsApp</h2>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full border border-warm-200 rounded-lg px-4 py-2 text-sm text-warm-900 bg-cream-50"
            placeholder="628123456789"
          />
          <button
            onClick={saveWhatsapp}
            disabled={saving}
            className="bg-warm-800 text-cream-100 px-4 py-2 rounded-lg text-sm hover:bg-warm-700 transition-colors"
          >
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>

        <div className="bg-cream-100 p-6 rounded-2xl shadow space-y-3">
          <h2 className="font-medium text-warm-800">Foto Pricelist</h2>
          {imageUrl && (
            <img src={imageUrl} alt="Pricelist" className="w-full rounded-lg" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={uploadImage}
            className="text-sm text-warm-700"
          />
          {uploading && <p className="text-sm text-warm-500">Mengupload...</p>}
        </div>

        {msg && <p className="text-sm text-green-600">{msg}</p>}
      </div>
    </main>
  );
}
