"use client";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";

const ShareLink: FC<PropsWithChildren<{ title: string; text?: string }>> = ({
  title,
  text,
  children,
}) => {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    // Only access window.location on the client
    setCurrentUrl(window.location.href);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: `Klubi i Etikës | ${title}`,
      text: text ? text : `Klubi i Etikës | ${title}`,
      url: currentUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // Fallback: copy URL + text to clipboard and notify user
      const fallbackText = `${shareData.text} – ${shareData.url}`;
      try {
        await navigator.clipboard.writeText(fallbackText);
      } catch (err) {
        console.error("Clipboard write failed:", err);
      }
    }
  };

  return (
    <span onClick={handleShare} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
};

export default ShareLink;
