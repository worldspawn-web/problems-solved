import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@app/ui';
import { usePostData } from '@app/api';

import { schema, type Schema } from './SignUp.schema';
import styles from './SignUp.module.scss';

export const SignUp = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', login: '', password: '', repeatPassword: '' },
  });

  const { mutate } = usePostData<
    unknown,
    Omit<Schema, 'repeatPassword' | 'login'>
  >('/register');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFormSubmit = ({ repeatPassword, login, ...values }: Schema) => {
    mutate(values);
  };

  return (
    <div className={styles.page}>
      <section className={styles.signup__wrapper}>
        <h2>Регистрация</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)}>
            <section className={styles.form__name}>
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <input placeholder="Артур" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <section className={styles.form__mail}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Электронная почта</FormLabel>
                    <FormControl>
                      <input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <section className={styles.form__password}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <input placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <section className={styles.form__password_confirm}>
              <FormField
                control={form.control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Подтвердите пароль</FormLabel>
                    <FormControl>
                      <input placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
            <button>Зарегистрироваться</button>
          </form>
        </Form>
      </section>
    </div>
  );
};
