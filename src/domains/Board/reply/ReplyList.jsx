import React, { useState } from 'react';
import Reply from './Reply';
import styles from './ReplyList.module.css';

const ReplyList = () => {
  // useState를 사용하여 댓글 목록 데이터를 상태로 관리
  const [replies, setReplies] = useState([
    {
      seq: 1,
      writer: '김민수',
      contents: '이 글 정말 도움이 많이 되었습니다! 다음 프로젝트에 꼭 적용해보고 싶네요.',
      write_date: '2시간 전'
    },
    {
      seq: 2,
      writer: '이영희',
      contents: '설명이 아주 명확해서 이해하기 쉬웠어요. 감사합니다.',
      write_date: '5시간 전'
    },
    {
      seq: 3,
      writer: '박준영',
      contents: '혹시 이 부분에 대해서 추가적인 자료가 있을까요? 궁금한 점이 몇 가지 더 있습니다.',
      write_date: '어제'
    }
  ]);

  // 댓글 삭제 핸들러 (상태 업데이트 예시)
  const handleDelete = (seq) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      setReplies(replies.filter(reply => reply.seq !== seq));
    }
  };

  return (
    <div className={styles.listContainer}>
      {/* 댓글 헤더: 총 댓글 수 표시 */}
      <h3 className={styles.title}>
        댓글 <span className={styles.count}>{replies.length}개</span>
      </h3>

      {/* 댓글 목록 렌더링 */}
      <div className={styles.listWrapper}>
        {replies.map((reply) => (
          <Reply
            key={reply.seq}
            writer={reply.writer}
            contents={reply.contents}
            write_date={reply.write_date}
            onDelete={() => handleDelete(reply.seq)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReplyList;
