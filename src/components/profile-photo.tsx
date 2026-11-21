import { useState } from "react";
import { PROFILE_PHOTO } from "@/lib/profile-photo";

/** Static profile photo. Shows the "ĐM" initials until a photo is set in src/lib/profile-photo.ts. */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  const show = PROFILE_PHOTO && !failed;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="photo-frame">
        {show ? <img src={PROFILE_PHOTO ?? undefined} alt="Đorđe Milenković" className="h-full w-full object-cover" onError={() => setFailed(true)} /> : <span className="photo-initials" aria-hidden="true">ĐM</span>}
      </div>
    </div>
  );
}
