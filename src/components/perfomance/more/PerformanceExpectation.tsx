import React, { useState } from 'react';
import { Comment, Form, Button, Input, Typography } from 'antd';
import styled from 'styled-components';
import palette from '../../../lib/style/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models';
import { useAuth } from '../../../models/hook/providers/auth/AuthProvider';
import {
  addPerformanceComment,
  deletePerformanceComment,
} from '../../../models/saga/reducers/performance';
import { useRouteMatch } from 'react-router-dom';

const { Item } = Form;
const CommentList = ({ onDelete, comments, userId }: any) => {
  return (
    <>
      <Typography style={{ marginBottom: '1.5rem' }}>{`${
        comments && comments.length
      } ${
        comments && comments.length > 1 ? '개의 답변' : '개의 답변'
      }`}</Typography>
      {comments.map((comment: any) => (
        <S.CommentWrap>
          <Comment
            author={comment.userName || comment.userId}
            content={
              <p style={{ marginBottom: '1.5rem' }}>{comment.content}</p>
            }
            datetime={comment.createdDateTime}
          />
          {userId === comment.userId ? (
            <S.ButtonWrap>
              <Button
                htmlType="submit"
                type="primary"
                onClick={() => onDelete(comment.id)}
              >
                삭제
              </Button>
            </S.ButtonWrap>
          ) : null}
        </S.CommentWrap>
      ))}
    </>
  );
};

const Editor = ({ onChangeContents, onSubmit, submitting, content }: any) => (
  <>
    <S.Editor>
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
    </S.Editor>
  </>
);

export default function PerformanceExpectation() {
  const [submitting, setSubmitting] = useState(false);
  const [content, setContents] = useState('');
  const [{ data: user }] = useAuth();
  const dispatch = useDispatch();
  const { comments } = useSelector((state: RootState) => ({
    comments: state.performance.comments,
  }));
  const { id } = useRouteMatch().params as any;

  // 댓글 삭제 버튼 클릭시
  const handleDelete = (commentId: string) => {
    dispatch(deletePerformanceComment.request({ commentId }));
  };

  // 댓글 작성 버튼 클릭시
  const handleSubmit = () => {
    if (!content || submitting) {
      return;
    }
    setTimeout(() => {
      setSubmitting(true);
      dispatch(
        addPerformanceComment.request({
          performanceId: id,
          type: 'EXPECTATION',
          content,
        }),
      );

      setContents('');
      setSubmitting(false);
    }, 1000);
  };

  const handleChangeContents = (e: any) => {
    setContents(e.target.value);
  };
  return (
    <>
      <S.InfoContainer className="scroll">
        {!user ? (
          <p>로그인 후 이용해주세요</p>
        ) : (
          <>
            <S.CommentNoticeWrap>
              <FontAwesomeIcon icon="exclamation-circle" size="1x" />
              <span>유의사항</span>
            </S.CommentNoticeWrap>
            <S.CommentNoticeMessage>
              게시판 운영 규정에 어긋난다고 판단되는 게시글은 사전 통보없이
              블라인드 처리 될 수 있습니다.
              <br />
              특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호,
              이메일 등의 개인정보는 악용될 우려가 있으므로 게시를 삼가 주시기
              바랍니다.
              <br />
              사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의
              경우 티켓 게시판 작성 권한이 제한됩니다.
            </S.CommentNoticeMessage>
            <S.CommentInputContainer>
              <Comment
                content={
                  <Editor
                    submitting={submitting}
                    onChangeContents={handleChangeContents}
                    onSubmit={handleSubmit}
                    content={content}
                  />
                }
              />
            </S.CommentInputContainer>
            {comments
              ? comments.length > 0 && (
                  <CommentList
                    comments={comments}
                    userId={user?.id}
                    onDelete={handleDelete}
                  />
                )
              : null}
          </>
        )}
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
  & .ant-comment-inner {
    padding: 0;
  }
`;

S.CommentNoticeWrap = styled.div`
  & > span {
    margin-left: 0.5rem;
  }
`;

S.CommentInputContainer = styled.div`
  padding: 1rem 2rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  margin: 2rem auto;
`;

S.CommentNoticeMessage = styled.p`
  font-size: 0.8rem;
`;

S.AntdFormItem = styled(Item)`
  margin: 0;
  & label {
    margin-right: 1rem;
    float: left;
    line-height: 2rem;
  }
`;

S.Editor = styled.div`
  display: flex;
  justify-content: space-between;
`;
S.AntdTextArea = styled(Input)`
  width: 37.5rem;
`;

S.AntdButton = styled(Button)`
  float: right;
`;

S.CommentWrap = styled.div`
  position: relative;
`;

S.ButtonWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
