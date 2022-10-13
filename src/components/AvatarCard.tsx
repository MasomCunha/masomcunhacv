import React from "react";
import AvatarCardInterface from "../interface/avatarCard";


export default function AvatarCard({classNameImage, classNameText, gitUser} : AvatarCardInterface) {
  return (
    <div>
      <img
        className={classNameImage}
        src={gitUser?.avatar_url}
        alt={gitUser?.avatar_url}
      />
      <p className={classNameText}>
        Manuel António dos S. O. M. Cunha - {gitUser?.login}
      </p>
    </div>
  );
}
