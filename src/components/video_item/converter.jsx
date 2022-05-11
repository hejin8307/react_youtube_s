export function agoConverter(publishedAt) {
  const publishedDate = new Date(publishedAt);
  const milliSecounds = new Date() - publishedDate;
  const seconds = milliSecounds / 1000;
  if (seconds < 60) {
    return '방금 전';
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  }

  const days = hours / 24;
  if (days < 7) {
    return `${Math.floor(days)}일 전`;
  }

  const weeks = days / 7;
  if (weeks < 5) {
    return `${Math.floor(weeks)}주 전`;
  }

  const months = days / 30;
  if (months < 12) {
    return `${Math.floor(months)}달 전`;
  }

  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

export function viewConverter(viewCount) {
  if (viewCount < 1000) {
    return viewCount;
  } else if (viewCount < 10000) {
    return `${(viewCount / 1000).toFixed(1)}천`;
  } else if (viewCount < 100000) {
    return `${(viewCount / 10000).toFixed(1)}만`;
  } else if (viewCount < 100000000) {
    return `${Math.round(viewCount / 10000)}만`;
  } else if (viewCount < 1000000000) {
    return `${(viewCount / 100000000).toFixed(1)}억`;
  } else if (viewCount < 1000000000000) {
    return `${Math.round(viewCount / 100000000)}억`;
  }
}
