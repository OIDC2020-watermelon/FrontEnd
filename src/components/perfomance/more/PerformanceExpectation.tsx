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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { TextArea } = Input;
const { Item } = Form;
const CommentList = ({ comments }: any) => (
  <>
    <Typography>{`${comments.length} ${
      comments.length > 1 ? '개의 답변' : '개의 답변'
    }`}</Typography>
    {comments.map((comment: any) => (
      <Comment
        author={comment.author}
        content={comment.content}
        datetime={comment.datetime}
      />
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
    <S.AntdFormItem>
      <label htmlFor="comment_title">제목</label>
      <S.AntdInput onChange={onChangeTitle} value={title} id="comment_title" />
    </S.AntdFormItem>
    <S.AntdFormItem>
      <label htmlFor="comment_content">내용</label>
      <S.AntdTextArea
        rows={4}
        onChange={onChangeContents}
        value={content}
        id="comment_content"
      />
    </S.AntdFormItem>
    <S.AntdFormItem>
      <S.AntdButton
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        작성하기
      </S.AntdButton>
    </S.AntdFormItem>
  </>
);

export default function PerformanceExpectation() {
  const [comments, setComments] = useState<Array<any>>([]);
  const [submitting, setSubmitting] = useState(false);
  const [content, setContents] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (!content || !title) {
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(true);
      setContents('');
      setTitle('');
      setComments([
        {
          author: '조혜형',
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
      <S.InfoContainer className="scroll">
        <S.CommentNoticeWrap>
          <FontAwesomeIcon icon="exclamation-circle" size="1x" />
          <span>유의사항</span>
        </S.CommentNoticeWrap>
        <S.CommentNoticeMessage>
          게시판 운영 규정에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드
          처리 될 수 있습니다.
          <br />
          특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일
          등의 개인정보는 악용될 우려가 있으므로 게시를 삼가 주시기 바랍니다.
          <br />
          사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우
          티켓 게시판 작성 권한이 제한됩니다.
        </S.CommentNoticeMessage>
        <S.CommentInputContainer>
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
        </S.CommentInputContainer>
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

S.CommentNoticeWrap = styled.div`
  & > span {
    margin-left: 0.5rem;
  }
`;

S.CommentInputContainer = styled.div`
  padding: 0.5rem 3rem 0 3rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 48rem;
  margin: 0 auto 1.5rem;
`;

S.CommentNoticeMessage = styled.p`
  font-size: 0.8rem;
`;

S.AntdFormItem = styled(Item)`
  margin: 0;
  margin-bottom: 1rem;
  & label {
    margin-right: 1rem;
    float: left;
    line-height: 2rem;
  }
`;

S.AntdInput = styled(Input)`
  width: 37.5rem;
  float: right;
`;
S.AntdTextArea = styled(TextArea)`
  width: 37.5rem;

  float: right;
`;

S.AntdButton = styled(Button)`
  float: right;
`;
