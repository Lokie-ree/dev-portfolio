"use client";

import React from "react";
import Link from "next/link";

const SocialButtons = ({ buttons, iconClass = "size-8" }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {buttons.map((button) => (
        <Link
          key={button.id}
          href={button.href}
          className="transition-transform transform hover:scale-105"
          aria-label={button.label || "Social Link"}
        >
          <button.icon className={`${iconClass} text-primary `} />
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
