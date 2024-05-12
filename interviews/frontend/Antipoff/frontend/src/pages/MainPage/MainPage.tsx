import { useState } from 'react';

import { useGetData } from '../../api/useGetQuery';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderUsers = (users: any[]) => {
    return users.map(
      (user: {
        avatar: string;
        first_name: string;
        last_name: string;
        id: string;
      }) => {
        const { avatar, first_name, last_name, id } = user;

        return (
          <div
            className={styles.member}
            key={id} 
            onClick={() => openModal(user)}
          >
            <img className={styles.member__img} src={avatar} />
            <h2 className={styles.member__name}>
              {first_name} {last_name}
            </h2>
          </div>
        );
      }
    );
  };

  const { data } = useGetData('/users');

  return (
    <div>
      <header className={styles.page__header__wrapper}>
        <div className={styles.page__intro}>
          <h1 className={styles.page__header}>Наша команда</h1>
          <p className={styles.page__paragraph}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </header>
      <section className={styles.page__members}>
        {data?.data ? renderUsers(data.data) : <p>Loading...</p>}
      </section>
      <section className={styles.member__showmore__wrapper}>
        <a className={styles.member__showmore__btn}>Показать ещё</a>
      </section>
    </div>
  );
};
