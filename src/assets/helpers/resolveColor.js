export const resolveColor = (cssVar) =>
  getComputedStyle(document.documentElement).getPropertyValue(
    cssVar.replace("var(", "").replace(")", "")
  ).trim();

  // converts css color variables to their actual color values, used for gsap animations since it cant animate css variables directly