import React from 'react';
import styles from './Reply.module.css';

const Reply = ({ loginId, writer, contents, write_date, onDelete }) => {
  // 작성자 이름의 첫 글자를 아바타로 사용
  const avatarLabel = writer ? writer[0].toUpperCase() : '익';

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>{avatarLabel}</div>
      
      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.writer}>{writer}</span>
          <span className={styles.date}>{write_date}</span>
        </div>

        <div className={styles.content}>{contents}</div>

        <div className={styles.actions}>
          <button className={styles.actionBtn}>좋아요</button>
          
          {/* 본인이 작성한 댓글인 경우에만 수정/삭제 버튼 표시 */}
          {loginId === writer && (
            <>
              <button 
                className={styles.actionBtn} 
                onClick={() => alert('수정 기능 준비 중')}
              >
                수정
              </button>
              <button 
                className={`${styles.actionBtn} ${styles.deleteBtn}`}
                onClick={onDelete}
              >
                삭제
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reply;
