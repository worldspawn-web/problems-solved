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

import { schema, type Schema } from './Login.schema';
import styles from './Login.module.scss';

export const Login = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  const { mutate } = usePostData<unknown, Schema>('/login');

  const onFormSubmit = (values: Schema) => {
    mutate(values);
  };

  return (
    <div className={styles.page}>
      <section className={styles.signup__wrapper}>
        <h2>Авторизация</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)}>
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
            <button>Войти</button>
          </form>
        </Form>
      </section>
    </div>
  );
};
