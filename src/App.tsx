import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home.component';
import Login from './components/pages/login/login.component';
import RegisterPage from './components/pages/register/register.component';
import PostsPage from './components/pages/posts/post.component';
import loggedOnly from './components/wrappers/loggedOnly/logged.component';
import Model from './components/atoms/model/model.component';
import ServerError from './components/pages/serverError/serverError.component';
import Post from './components/molecules/posts/post/index.post';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Model />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/posts" Component={loggedOnly(PostsPage)} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/serverError" element={<ServerError />} />
          {/*  />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
