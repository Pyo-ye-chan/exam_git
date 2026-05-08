import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.header}>
                    <h1 className={styles.title}>로그인</h1>
                    <p className={styles.subtitle}>계정 정보를 입력하여 로그인해주세요</p>
                </div>

                <div className={styles.form}>
                    <div className={styles.inputField}>
                        <label className={styles.label}>이메일 주소</label>
                        <input 
                            type="email" 
                            className={styles.input} 
                            placeholder="example@email.com" 
                            required 
                        />
                    </div>

                    <div className={styles.inputField}>
                        <label className={styles.label}>비밀번호</label>
                        <input 
                            type="password" 
                            className={styles.input} 
                            placeholder="비밀번호를 입력하세요" 
                            required 
                        />
                    </div>

                    <button type="button" className={styles.loginButton}>
                        로그인
                    </button>
                </div>

                <div className={styles.actions}>
                    <Link to="/forgot" className={styles.link}>비밀번호를 잊으셨나요?</Link>
                    <span>
                        처음이신가요? <Link to="/signup" className={styles.link}>회원가입</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};


export default Login;
