export const decodeHtmlContent = (contet: string) => {
  return decodeURIComponent(contet).replace(/<[^>]*>/g, "");
};
