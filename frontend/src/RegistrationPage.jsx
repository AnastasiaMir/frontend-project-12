import routes from './routes.js';
export default () => {
  
    return (
      <div className="text-center">
      <h1 className="h4 text-muted">Регистрация</h1>
      <p className="text-muted">
      Но вы можете перейти на
        <a href={routes.mainPage()}>главную страницу</a>
      </p>
    </div>
    );
  };