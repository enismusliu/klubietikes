'use client';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { RWebShare } from 'react-web-share';

const ShareLink: FC<PropsWithChildren<{ title: string; text?: string }>> = ({
  title,
  text,
  children,
}) => {
  /**
   * @consts
   */
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    // This ensures that `window.location.href` is only accessed client-side
    setCurrentUrl(window.location.href);
  }, []);
  return (
    <RWebShare
      data={{
        text: text ? text : `Nowa Market | ${title}`,
        url: currentUrl,
        title: `Nowa Market | ${title}`,
      }}
      onClick={() => console.log('Shared successfully!')}
    >
      {children}
    </RWebShare>
  );
};

export default ShareLink;
