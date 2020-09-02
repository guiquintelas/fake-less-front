import React, {
  createContext, useState, useContext,
} from 'react';
import { v4 as uuid } from 'uuid';

export type Post = {
  id: string,
  content: string,
  createdAt: Date,
  createdBy: string,
}

type Feed = {
    posts: Post[],
};

type FeedContextType = {
  feed: Feed,
  loading: Boolean,
  addPost: (post: Post) => void,
  loadMorePosts: () => Promise<void>
}

const defaultFeed: Feed = {
  posts: [
    {
      id: uuid(), content: 'post 1', createdBy: 'Guilherme Frota', createdAt: new Date(),
    },
    {
      id: uuid(), content: 'post 2', createdBy: 'Guilherme Frota', createdAt: new Date(),
    },
    {
      id: uuid(), content: 'post 3', createdBy: 'Guilherme Frota', createdAt: new Date(),
    },
    {
      id: uuid(), content: 'post 4', createdBy: 'Guilherme Frota', createdAt: new Date(),
    },
  ],
};

export const FeedContext = createContext<FeedContextType>({
  feed: defaultFeed,
  loading: false,
  addPost: () => {
    throw new Error('state not initialized');
  },
  loadMorePosts: () => {
    throw new Error('state not initialized');
  },
});

const FeedProvider: React.FC = ({ children }) => {
  const [feed, setFeed] = useState<Feed>(defaultFeed);
  const [loading, setLoading] = useState<Boolean>(false);

  const addPost = (post: Post) => {
    setFeed((oldFeed) => ({
      ...oldFeed,
      posts: [
        post,
        ...oldFeed.posts,
      ],
    }));
  };

  const loadMorePosts = async () => {
    setLoading(true);
    return new Promise<void>((res) => setTimeout(() => {
      setFeed((oldFeed) => ({
        ...oldFeed,
        posts: [
          ...oldFeed.posts,
          {
            id: uuid(), content: 'post 1', createdBy: 'Guilherme Frota', createdAt: new Date(),
          },
          {
            id: uuid(), content: 'post 2', createdBy: 'Guilherme Frota', createdAt: new Date(),
          },
          {
            id: uuid(), content: 'post 3', createdBy: 'Guilherme Frota', createdAt: new Date(),
          },
          {
            id: uuid(), content: 'post 4', createdBy: 'Guilherme Frota', createdAt: new Date(),
          },
          {
            id: uuid(), content: 'post 5', createdBy: 'Guilherme Frota', createdAt: new Date(),
          },
        ],
      }));
      setLoading(false);
      res();
    }, 500));
  };

  return (
    <FeedContext.Provider
      value={{
        feed,
        loading,
        addPost,
        loadMorePosts,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;

export function useFeedContext() {
  return useContext(FeedContext);
}
