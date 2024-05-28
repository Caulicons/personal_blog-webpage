import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../../../atoms/main/main.component';
import Container from '../../../atoms/container/container.component';
import Typography from '../../../atoms/typography/typography.component';
import { CircleNotch } from '@phosphor-icons/react';
import { PostSchema } from '../../../../schemas/post/post.schema';
import Button from '../../../atoms/button/button.component';

const post: PostSchema = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet',
  content: `This project demonstrates how to create an engaging loading animation using pure CSS.
The animation features a rotating background color and a loader composed of** 20 spinning dots **that pulsate sequentially. The background hue shifts continuously, creating a dynamic visual effect. Each dot is positioned using CSS variables and animated with keyframes to scale up and down in a rhythmic pattern.

Key Features:

Rotating Background: Smooth color transitions using hue-rotate.
Pulsating Dots: Sequential animation delays for a wave effect.
Pure CSS: No JavaScript required, ensuring lightweight performance.
Usage

Embed the HTML in your webpage.
Add the CSS to your stylesheet.
Adjust the number of spans and their styles as needed for different visual effects. This loader is perfect for adding a modern, visually appealing touch to your web projects.

This project demonstrates how to create an engaging loading animation using pure CSS.
The animation features a rotating background color and a loader composed of** 20 spinning dots **that pulsate sequentially. The background hue shifts continuously, creating a dynamic visual effect. Each dot is positioned using CSS variables and animated with keyframes to scale up and down in a rhythmic pattern.

Key Features:

Rotating Background: Smooth color transitions using hue-rotate.
Pulsating Dots: Sequential animation delays for a wave effect.
Pure CSS: No JavaScript required, ensuring lightweight performance.
Usage

Embed the HTML in your webpage.
Add the CSS to your stylesheet.
Adjust the number of spans and their styles as needed for different visual effects. This loader is perfect for adding a modern, visually appealing touch to your web projects.`,
  data: new Date(),
  photo: '',
  theme: {
    id: 1,
    name: 'typescript',
  },
  author: {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@gmail.com',
    photo: 'https://picsum.photos/id/1015/100/100',
  },
};

const Post: FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const month = post.data.toLocaleDateString('en-US', {
    month: 'long',
  });
  const day = post.data.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  const year = post.data.toLocaleDateString('en-US', {
    year: 'numeric',
  });

  const formattedDate = ` ${month} ${day}, ${year}`;
  /* useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); */
  console.log(post);
  return (
    <Main
      className={`mx-auto flex h-auto min-h-[calc(100vh-60px)] w-full ${isLoading && 'items-center'} justify-center md:p-2 lg:p-6`}
    >
      {isLoading ? (
        <div className="mx-auto h-full select-none text-center">
          <img className="md:w-[500px]" src="/imgs/loading.svg" alt="" />
          <Typography variant="h2" className="  text-2xl font-bold">
            Loading, Please Wait...
            <span>
              <CircleNotch
                className="w-full  animate-spin fill-green-600"
                size={36}
              />
            </span>
          </Typography>
        </div>
      ) : (
        <Container
          tag="section"
          className="grid h-full gap-6 lg:grid-cols-[70%_30%]"
        >
          {/* Post */}
          <div className="h-full w-full rounded-3xl shadow-2xl ">
            {post.photo ? (
              <img className="w-full md:rounded-t-3xl" src={post.photo} />
            ) : (
              <div className=" h-[150px] w-full  bg-orange-500 md:max-h-[240px] md:rounded-t-3xl" />
            )}
            <div className="grid-row-3 grid gap-4 p-4 md:p-8">
              {/* Head */}
              <div className="grid-row-2 grid gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.photo}
                    alt=""
                    className="w-10 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="p"
                      className="text-sm font-medium text-black"
                    >
                      {post.author.username}
                    </Typography>
                    <Typography tag="p" className=" text-xs text-gray-900 ">
                      Posted on
                      {formattedDate}
                    </Typography>
                  </div>
                </div>
                <Typography tag="h2" className="text-2xl font-bold md:text-4xl">
                  {post.title}
                </Typography>
                <Typography
                  tag="p"
                  variant="p"
                  className="my-auto w-fit cursor-pointer rounded-xl bg-gray-200 p-2 py-1 align-middle text-xs font-light"
                >
                  {post.theme.name}
                </Typography>
              </div>
              {/* Body */}
              <div>
                <Typography
                  variant="p"
                  className="text-sm font-medium text-black"
                >
                  {post.content}
                </Typography>
              </div>
              {/* Comments */}
            </div>
          </div>
          {/* Author Info */}
          <div className="hidden lg:block">
            <div className="rounded-3xl shadow-2xl">
              <div className=" -z-10  h-[36px] w-full rounded-t-xl bg-blue-600" />
              <div className=" -mt-4 flex gap-2 px-6">
                <img
                  src={post.author.photo}
                  alt=""
                  className="w-12 rounded-full"
                />
                <Typography className="self-end text-xl font-bold">
                  {post.author.username}
                </Typography>
              </div>
              <div className="flex flex-col gap-6 px-6 py-8 pt-6">
                <Button className="w-full">Follow</Button>
                <Typography
                  variant="p"
                  className="text-justify font-medium text-gray-600"
                >
                  {/* {post.author.bio} */}A passionate front-end developer with
                  a Bachelor's degree from Bahria University. My current tech
                  stack includes HTML,CSS,Tailwind,JavaScript, ReactJs, and
                  Currently Exploring CssAnimations & Next.js.
                </Typography>
                <div>
                  <Typography className="text-sm font-bold">JOINED</Typography>
                  <Typography className="text-sm ">TODAY</Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Main>
  );
};

export default Post;
