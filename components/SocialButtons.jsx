'use client'

import React from 'react';
import Link from 'next/link';

const SocialButtons = ({buttons, iconClass = "w-8 h-8"}) => {
  return (
    <div className="flex flex-wrap gap-2">
        {buttons.map((button) => (
            <Link key={button.id} href={button.href} className="transition-transform transform hover:scale-110 focus:scale-110" aria-label={button.label || "Social Link"}>
                <button.icon className={`${iconClass} text-primary hover:text-secondary`} />
            </Link>
        ))}
    </div>
  )
}

export default SocialButtons