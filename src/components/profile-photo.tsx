import { useState } from "react";
import { PROFILE_PHOTO } from "@/lib/profile-photo";

/** Static profile photo with brand frame. Change the image in src/lib/profile-photo.ts. */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);
  const show = PROFILE_PHOTO && !failed;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="photo-frame">
        <span className="photo-ring" aria-hidden="true" />
        <div className="photo-inner">
          {show ? (
            <>
              <img src={PROFILE_PHOTO ?? undefined} alt="Đorđe Milenković" className="photo-img" onError={() => setFailed(true)} />
              <span className="photo-tint" aria-hidden="true" />
              <span className="photo-vignette" aria-hidden="true" />
            </>
          ) : <span className="photo-initials" aria-hidden="true">ĐM</span>}
        </div>
      </div>
    </div>
  );
}
