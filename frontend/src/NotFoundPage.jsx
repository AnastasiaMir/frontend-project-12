import image from './images/notFoundPage.svg';
import HeaderContainer from './HeaderContainer.jsx';

export default () => {
  
    return (<HeaderContainer>

      <div className="text-center">
      <img
        className="img-fluid h-25"
        alt="notFoundPage"
        src={image}
      />
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p className="text-muted">
      Но вы можете перейти на
        <a href="/"> главную страницу</a>
      </p>
    </div>
    </HeaderContainer>
    );
  };