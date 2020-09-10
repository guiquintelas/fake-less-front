import React, { createContext, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

export type PostComment = {
  id: string;
  content: string;
  createdBy: string;
};

export type Post = {
  id: string;
  content: string;
  createdAt: Date;
  createdBy: string;
  liked: boolean;
  type?: 'fake' | 'fact';
  comments: PostComment[];
};

type Feed = {
  posts: Post[];
};

type FeedContextType = {
  feed: Feed;
  loading: Boolean;
  addPost: (post: Omit<Post, 'id'>) => void;
  loadMorePosts: () => Promise<void>;
  toggleLikePost: (id: string) => void;
  toggleFakePost: (id: string) => void;
  toggleFactPost: (id: string) => void;
  commentOnPost: (id: string, comment: Omit<PostComment, 'id'>) => void;
};

const defaultFeed: Feed = {
  posts: [
    ...[1, 2, 3, 4, 5].map((index) => ({
      id: uuid(),
      content: `post ${index}`,
      createdBy: 'Guilherme Frota',
      createdAt: new Date(),
      liked: false,
      comments: [],
    })),
    {
      id: uuid(),
      content: `post com comentário`,
      createdBy: 'Guilherme Frota',
      createdAt: new Date(),
      liked: false,
      comments: [
        { id: uuid(), content: 'um comentario', createdBy: 'fulano' },
        { id: uuid(), content: 'outro comentario', createdBy: 'fulano' },
      ],
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
  toggleLikePost: () => {
    throw new Error('state not initialized');
  },
  commentOnPost: () => {
    throw new Error('state not initialized');
  },
  toggleFakePost: () => {
    throw new Error('state not initialized');
  },
  toggleFactPost: () => {
    throw new Error('state not initialized');
  },
});

const FeedProvider: React.FC = ({ children }) => {
  const [feed, setFeed] = useState<Feed>(defaultFeed);
  const [loading, setLoading] = useState<Boolean>(false);

  return (
    <FeedContext.Provider
      value={{
        feed,
        loading,

        addPost: (post) => {
          const postWithId = {
            ...post,
            id: uuid(),
          };

          setFeed((oldFeed) => ({
            ...oldFeed,
            posts: [postWithId, ...oldFeed.posts],
          }));
        },

        loadMorePosts: async () => {
          setLoading(true);
          return new Promise<void>((res) =>
            setTimeout(() => {
              setFeed((oldFeed) => ({
                ...oldFeed,
                posts: [
                  ...oldFeed.posts,
                  ...[1, 2, 3, 4, 5].map((index) => ({
                    id: uuid(),
                    content: `post ${index}`,
                    createdBy: 'Guilherme Frota',
                    createdAt: new Date(),
                    liked: false,
                    comments: [],
                  })),
                ],
              }));
              setLoading(false);
              res();
            }, 500),
          );
        },

        toggleLikePost: (id: string) => {
          setFeed((oldFeed) => ({
            ...oldFeed,
            posts: oldFeed.posts.map((post) => {
              if (post.id === id) {
                return {
                  ...post,
                  liked: !post.liked,
                };
              }
              return post;
            }),
          }));
        },

        toggleFakePost(id) {
          setFeed((oldFeed) => ({
            ...oldFeed,
            posts: oldFeed.posts.map((post) => {
              if (post.id === id) {
                return {
                  ...post,
                  type: post.type !== 'fake' ? 'fake' : undefined,
                };
              }
              return post;
            }),
          }));
        },

        toggleFactPost(id) {
          setFeed((oldFeed) => ({
            ...oldFeed,
            posts: oldFeed.posts.map((post) => {
              if (post.id === id) {
                return {
                  ...post,
                  type: post.type !== 'fact' ? 'fact' : undefined,
                };
              }
              return post;
            }),
          }));
        },

        commentOnPost(id, comment) {
          const commentWithId = {
            ...comment,
            id: uuid(),
          };

          setFeed((oldFeed) => ({
            ...oldFeed,
            posts: oldFeed.posts.map((post) => {
              if (post.id === id) {
                return {
                  ...post,
                  comments: [...post.comments, commentWithId],
                };
              }
              return post;
            }),
          }));
        },
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
