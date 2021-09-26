export const getZoomDirection = (zPos: number, zoomDirection: number) => {
  if (zPos >= 20 || zPos < 10) {
    return -zoomDirection;
  }
  return zoomDirection;
};
