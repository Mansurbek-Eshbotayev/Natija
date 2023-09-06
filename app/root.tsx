import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheetUrl from './styles/main.css';

export function links() {
  return [
    { rel: 'icon', href: '/logo.svg' },
    { rel: 'apple-touch-icon', href: '/logo192.png' },
    { rel: 'stylesheet', href: stylesheetUrl },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>AOS shop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name='title' content='AOS shop' />
        <meta name='description' content='Цель платформы AOS: Установить связь между клиентами и компаниями. Мотивировать клиентов так и сотрудников. Увеличить объем продаж и привлекать больше покупателей. Все в одном приложении для ваших покупателей. Предостовляется удобное для использовании приложения для ваших покупателей. С помощью которого они могут получить кэшбэк баллы от каждой покупки и заменить их на товары!'/>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
