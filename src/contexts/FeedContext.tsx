import React, {
  createContext, useState, useContext,
} from 'react';

type Post = {
  content: string,
  createdAt: Date,
  createdBy: string,
}

type Feed = {
    posts: Post[],
};

type FeedContextType = {
  feed: Feed,
  setFeed: React.Dispatch<React.SetStateAction<Feed>>,
}

const defaultFeed: Feed = {
  posts: [
    { content: 'post 1', createdBy: 'Guilherme Frota', createdAt: new Date() },
    { content: 'post 2', createdBy: 'Guilherme Frota', createdAt: new Date() },
    { content: 'post 3', createdBy: 'Guilherme Frota', createdAt: new Date() },
  ],
};

export const FeedContext = createContext<FeedContextType>({
  feed: defaultFeed,
  setFeed: () => {
    throw new Error('state not initialized');
  },
});

const FeedProvider: React.FC = ({ children }) => {
  const [feed, setFeed] = useState<Feed>(defaultFeed);

  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;

export function useFeedContext() {
  return useContext(FeedContext);
}