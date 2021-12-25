import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@components/Icon';
import Button from '@components/Button';
import Story from '@components/Story';
import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Story className={styles.storyLayout} showNavigation>
      <Story.Page>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>
              Add Interactive <span>Web Stories </span>
              to your website with few bytes of JavaScript<span>.</span>
            </h1>
            <p>
              Web stories is a way to reach a unique audience
              within a new storytelling experience.
              Storyflow integration supercharges your user experience with a floating stories widget.
            </p>
            <Link href="/stories" passHref>
              <Button size="large">Try for Free <Icon type="arrow-right" /></Button>
            </Link>
          </div>
        </div>
      </Story.Page>
      <Story.Page>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>
              <span>Storyflow</span> is a powerful tool to help you create and manage stories.
              <span>Integrate once</span> and manage multiple stories in one place<span>.</span>
            </h1>
            <p>
              Post new stories using Storyflow dashboard which will get automatically updated on your website.
              Storyflow widget is directly integrated with dashboard to read latest content.
            </p>
            <Link href="/stories" passHref>
              <Button size="large">Try for Free <Icon type="arrow-right" /></Button>
            </Link>
          </div>
        </div>
      </Story.Page>
      <Story.Page>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>
              Quickly add <span>Existing AMP stories</span> , <span>Videos</span>, <span>Images</span>,
              even your <span>Youtube videos</span> to create story experiences<span>.</span>
            </h1>
            <p>
              There are endless possibilities to add your own content to a story.
              No matter the platform, storyflow is ready to help you to integrate your content in single place.
              <span>Instagram</span>, <span>Twitter</span>, <span>TikTok</span> are coming soon.
            </p>
            <Link href="/stories" passHref>
              <Button size="large">Try for Free <Icon type="arrow-right" /></Button>
            </Link>
          </div>
        </div>
      </Story.Page>
      <Story.Page>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>
              Use cutting edge <u><a target="_blank" rel="noreferrer" href="https://amp.dev/documentation/tools/?format=stories">tools</a></u> to create, design and develop engaging stories<span>.</span>
            </h1>
            <p><span>Storyflow WYSIWYG editor coming soon...</span></p>
            <p>
              Choose right tools for your story and get started.
              Alternatively, write your own stories using <u><a target="_blank" rel="noreferrer" href="https://amp.dev/documentation/guides-and-tutorials/start/visual_story/?format=stories">AMP framework</a></u>.
            </p>
            <Link href="/stories" passHref>
              <Button size="large">Try for Free <Icon type="arrow-right" /></Button>
            </Link>
          </div>
        </div>
      </Story.Page>
      <Story.Page>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>
              Need a help to create your first story<span>?</span>
              <u><span><a href="https://calendly.com/src200" target="_blank" rel="noreferrer">Schedule a demo</a></span></u>
            </h1>
            <p>
              For any other further assistance contact <u><a href="mailto:schalla200@gamil.com">me</a></u>
            </p>
            <Link href="/stories" passHref>
              <Button size="large">Try for Free <Icon type="arrow-right" /></Button>
            </Link>
          </div>
        </div>
      </Story.Page>
    </Story>
  )
}

export default Home;
