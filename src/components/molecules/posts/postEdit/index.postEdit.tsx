import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postService } from '../../../../services/posts/posts.service';
import Button from '../../../atoms/button/button.component';
import Container from '../../../atoms/container/container.component';
import Loading from '../../../atoms/loading/index.loading';
import Main from '../../../atoms/main/main.component';
import Typography from '../../../atoms/typography/typography.component';
import LabeledInput from '../../LabeledInput/labeledInput.component';
import LabeledTextArea from '../../labedTextArea/index.labledTextArea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UpdatePostSchema,
  updatePostSchema,
} from '../../../../schemas/post/post.update.schema';
import {
  UserContext,
  UserContextSchema,
} from '../../../../contexts/user.context';
import LabeledThemeInput from '../../labeledThemeInput/index.labeledThemeInput';

interface PostEditProps {}

const PostEdit: FC<PostEditProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [requestErrorMessage, setRequestErrorMessage] = useState<string>('');
  const { user } = useContext(UserContext) as UserContextSchema;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdatePostSchema>({
    resolver: zodResolver(updatePostSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const post = await postService.getById(Number(id));

        if (!post.id)
          navigate('/404', {
            replace: true,
            state: { message: 'Post not found' },
          });

        if (post.user.id !== user.id)
          navigate('/401', {
            replace: true,
            state: { message: 'You are not allowed to edit this post' },
          });

        setValue('id', Number(id));
        setValue('title', post?.title);
        setValue('theme', post?.theme.name);
        setValue('content', post?.content);
        setValue('photo', post?.photo);
        setIsLoading(false);
      })();
    } else {
      navigate('/');
    }
  }, [id, setValue, navigate, user.id]);

  const handleEditPost = async (data: UpdatePostSchema) => {
    setIsLoading(true);
    console.log(data);
    const post = await postService.update(data);
    if (post) navigate(`/posts/${post.id}`);

    setRequestErrorMessage('❌ Failed to update post. Please try again. ');
    setIsLoading(false);
  };

  if (isLoading) return <Loading message="Loading your beauty post..." />;
  return (
    <Main className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center p-6">
      <Container
        tag="section"
        size="small"
        className="  flex flex-col  items-center justify-center gap-6 text-center"
      >
        <Typography tag="h1" variant="h2" className=" md:text-3xl">
          Update your beauty post 👋
        </Typography>

        <form
          className="grid  w-full gap-4"
          onChange={() => {
            if (requestErrorMessage) setRequestErrorMessage('');
          }}
          onSubmit={handleSubmit(handleEditPost)}
        >
          <div className="grid w-full gap-4">
            <LabeledInput
              label="Title"
              className="border-black"
              error={errors.title?.message || !!requestErrorMessage}
              {...register('title')}
            />
            <LabeledThemeInput
              setValue={setValue}
              label="Theme"
              error={errors.theme?.message || !!requestErrorMessage}
              {...register('theme')}
            />
            <LabeledTextArea
              label="Content"
              error={errors.content?.message || !!requestErrorMessage}
              {...register('content')}
            />
            <LabeledInput
              label="Photo"
              className="border-black"
              error={errors.photo?.message || !!requestErrorMessage}
              {...register('photo')}
            />
            <Button>Save Changes</Button>
          </div>
        </form>
      </Container>
    </Main>
  );
};

export default PostEdit;
