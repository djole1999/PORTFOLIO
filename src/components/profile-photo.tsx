import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Camera, RotateCcw } from "lucide-react";

const KEY = "portfolio-profile-photo";

function resize(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const max = 640, s = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", 0.85));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function ProfilePhoto() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => { setPhoto(localStorage.getItem(KEY)); }, []);

  async function onFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Izaberite sliku."); return; }
    try {
      const data = await resize(file);
      localStorage.setItem(KEY, data);
      setPhoto(data); setError("");
    } catch { setError("Sliku nije moguće sačuvati. Probajte manju sliku."); }
  }
  function reset() { localStorage.removeItem(KEY); setPhoto(null); }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="photo-frame group">
        {photo ? <img src={photo} alt="Đorđe Milenković" className="h-full w-full object-cover" /> : <span className="photo-initials" aria-hidden="true">ĐM</span>}
        <button type="button" className="photo-btn" onClick={() => input.current?.click()} aria-label="Promeni sliku"><Camera size={18} /></button>
        <input ref={input} type="file" accept="image/*" className="hidden" onChange={onFile} />
      </div>
      {photo && <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"><RotateCcw size={12} /> Vrati podrazumevanu sliku</button>}
      {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
