const getGap = (element) => {
  const computedStyle = getComputedStyle(element);
  const gap = computedStyle.gap;
  return parseInt(gap);
}

const getOffsetLeft = (element) => {
  const computedStyle = getComputedStyle(element);
  const offsetLeft = computedStyle.left;
  return parseInt(offsetLeft);
}

export {getGap, getOffsetLeft};