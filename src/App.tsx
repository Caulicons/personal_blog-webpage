import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home.page';
import Login from './components/pages/login/login.page';
import RegisterPage from './components/pages/register/register.page';
import PostsPage from './components/pages/posts/posts.page';
import loggedOnly from './components/wrappers/loggedOnly/logged.component';
import Model from './components/atoms/model/model.component';
import ServerError from './components/pages/serverError/serverError.page';
import Post from './components/molecules/posts/post/index.post';
import PostCreate from './components/molecules/posts/postCreate/index.postCreate';

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
          <Route path="/404" element={<ServerError />} />
          <Route path="/posts/create" element={<PostCreate />} />
          {/*  />
        <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
