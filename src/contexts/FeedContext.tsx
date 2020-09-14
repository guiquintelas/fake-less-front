import React, { createContext, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { useUserContext, User } from './UserContext';

type ModifyFakedFactedUsers = (
  post: Post,
  user: User,
) => {
  type: 'fake' | 'fact' | undefined;
  fakedUsers: PostUser[];
  factedUsers: PostUser[];
};

export type PostUser = {
  name: string;
};

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
  type?: 'fake' | 'fact';
  comments: PostComment[];
  fakedUsers: PostUser[];
  factedUsers: PostUser[];
};

type Feed = {
  posts: Post[];
};

type FeedContextType = {
  feed: Feed;
  loading: Boolean;
  addPost: (post: Omit<Post, 'id'>) => void;
  loadMorePosts: () => Promise<void>;
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
      comments: [],
      fakedUsers: [],
      factedUsers: [],
    })),
    {
      id: uuid(),
      content: `post com comentário`,
      createdBy: 'Guilherme Frota',
      createdAt: new Date(),
      comments: [
        { id: uuid(), content: 'um comentario', createdBy: 'fulano' },
        { id: uuid(), content: 'outro comentario', createdBy: 'fulano' },
      ],
      fakedUsers: [{ name: 'user1' }, { name: 'user2' }],
      factedUsers: [],
    },
  ],
};

export const FeedContext = createContext<FeedContextType>({
  feed: defaultFeed,
  loading: false,
  addPost: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  loadMorePosts: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  commentOnPost: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  toggleFakePost: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  toggleFactPost: () => {
    throw new Error('you should only use this context inside the provider!');
  },
});

const addFakedUser: ModifyFakedFactedUsers = (post, user) => {
  return {
    type: 'fake',
    fakedUsers: [...post.fakedUsers, { name: user.name }],
    factedUsers: post.factedUsers.filter((el) => el.name !== user.name),
  };
};

const addFactedUser: ModifyFakedFactedUsers = (post, user) => {
  return {
    type: 'fact',
    fakedUsers: post.fakedUsers.filter((el) => el.name !== user.name),
    factedUsers: [...post.factedUsers, { name: user.name }],
  };
};

const resetFakedFacted: ModifyFakedFactedUsers = (post, user) => {
  return {
    type: undefined,
    fakedUsers: post.fakedUsers.filter((el) => el.name !== user.name),
    factedUsers: post.factedUsers.filter((el) => el.name !== user.name),
  };
};

const FeedProvider: React.FC = ({ children }) => {
  const [feed, setFeed] = useState<Feed>(defaultFeed);
  const [loading, setLoading] = useState<Boolean>(false);
  const { user } = useUserContext();

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
                    comments: [],
                    fakedUsers: [],
                    factedUsers: [],
                  })),
                ],
              }));
              setLoading(false);
              res();
            }, 500),
          );
        },

        toggleFakePost(id) {
          setFeed((oldFeed) => ({
            ...oldFeed,
            posts: oldFeed.posts.map((post) => {
              if (post.id === id) {
                const newType = post.type !== 'fake' ? 'fake' : undefined;

                return {
                  ...post,
                  ...(newType === 'fake' ? addFakedUser(post, user!) : resetFakedFacted(post, user!)),
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
                const newType = post.type !== 'fact' ? 'fact' : undefined;

                return {
                  ...post,
                  ...(newType === 'fact' ? addFactedUser(post, user!) : resetFakedFacted(post, user!)),
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
