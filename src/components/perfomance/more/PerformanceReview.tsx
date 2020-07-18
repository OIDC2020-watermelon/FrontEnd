import React, { useState } from 'react';
import {
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Typography,
  Divider,
} from 'antd';
import moment from 'moment';
import { formatDate } from '../../../lib/utils/dataFormat';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';

const { TextArea } = Input;

const CommentList = ({ comments }: any) => (
  <>
    <Typography>{`${comments.length} ${
      comments.length > 1 ? 'replies' : 'reply'
    }`}</Typography>
    <Divider></Divider>
    {comments.map((comment: any) => (
      <Comment content={comment.content} datetime={comment.datetime} />
    ))}
  </>
);

const Editor = ({
  onChangeContents,
  onChangeTitle,
  onSubmit,
  submitting,
  content,
  title,
}: any) => (
  <>
    <Form.Item>
      <Input onChange={onChangeTitle} value={title} />
    </Form.Item>
    <Form.Item>
      <TextArea rows={4} onChange={onChangeContents} value={content} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default function PerformanceReview() {
  const [comments, setComments] = useState<Array<any>>([]);
  const [submitting, setSubmitting] = useState(false);
  const [content, setContents] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!content) {
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(true);
      setContents('');
      setComments([
        {
          author: 'Han Solo',
          content: (
            <>
              <h4>{title}</h4>
              <p>{content}</p>
            </>
          ),
          datetime: <span>{formatDate(Date.now())}</span>,
        },
        ...comments,
      ]);
      setSubmitting(false);
    }, 1000);
  };

  const handleChangeContents = (e: any) => {
    setContents(e.target.value);
  };
  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <S.InfoContainer>
        <Comment
          content={
            <Editor
              onChangeContents={handleChangeContents}
              onChangeTitle={handleChangeTitle}
              onSubmit={handleSubmit}
              submitting={submitting}
              content={content}
              title={title}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </S.InfoContainer>
    </>
  );
}

const S: any = {};

S.InfoContainer = styled.div`
  border: 1px solid ${palette.gray5};
  height: 100%;
  width: 100%;
  padding: 4rem 5rem;
  border-radius: 5px;
  overflow: auto;
`;
