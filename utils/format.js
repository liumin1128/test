import { preatyTime, getStrless } from './common';

export const formatNewsList = (data) => {
  return data.map((i, index) => {
    return {
      ...i,
      key: i.id || index,
      createdAt: preatyTime(i.createdAt) || undefined,
      updatedAt: preatyTime(i.updatedAt) || undefined,
      type: i.newsType ? i.newsType.typeName : undefined,
      cover: i.photos ? i.photos[0] : undefined,
      content: getStrless(i.content.replace(/<[^>]+>/g, ''), 70, 3),
    };
  });
};
