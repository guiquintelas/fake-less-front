import React, { useRef } from 'react';
import { Formik, Form } from 'formik';
import { useFeedContext } from '../contexts/FeedContext';
import { useUserContext } from '../contexts/UserContext';
import TextField from './TextField';

export type PostNewCommentProps = {
  postId: string;
};

const PostNewComment: React.FC<PostNewCommentProps> = ({ postId }) => {
  const { commentOnPost } = useFeedContext();
  const { user } = useUserContext();
  const textFieldRef = useRef<HTMLInputElement>(null);

  return (
    <Formik
      initialValues={{
        commentText: '',
      }}
      onSubmit={async (data, { resetForm }) => {
        commentOnPost(postId, {
          content: data.commentText,
          createdBy: {
            name: user!.name,
            avatarUrl: user!.avatarUrl,
          },
        });
        resetForm();
        textFieldRef.current!.focus();
      }}
    >
      <Form>
        <TextField
          ref={textFieldRef}
          size="small"
          placeholder="Comment ..."
          name="commentText"
          style={{ width: '100%' }}
          InputProps={{
            style: { marginBottom: 0 },
          }}
        />
      </Form>
    </Formik>
  );
};

export default PostNewComment;
