import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { Message } from 'esbuild';

export const ARTICLES_PATH = path.join(process.cwd(), 'blog/articles');

export const getFileContent = (filename: string): string => {
  return fs.readFileSync(path.join(ARTICLES_PATH, filename), 'utf8');
};

const getCompiledMDX = async (
  content: string
): Promise<{
  code: string;
  frontmatter: {
    [key: string]: any;
  };
  errors: Message[];
  matter: matter.GrayMatterFile<any>;
}> => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }
  // Add your remark and rehype plugins here
  const remarkPlugins = [];
  const rehypePlugins = [];

  try {
    return await bundleMDX(content, {
      xdmOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), ...remarkPlugins];
        options.rehypePlugins = [...(options.rehypePlugins ?? []), ...rehypePlugins];

        return options;
      },
      cwd: path.join(process.cwd(), 'components/blog/article/mdx')
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getSingleArticle = async (
  slug: string
): Promise<{
  frontmatter: {
    [key: string]: any;
  };
  code: string;
}> => {
  const source = getFileContent(`${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

  if (!frontmatter.isPublished) {
    return null;
  }

  return {
    frontmatter,
    code
  };
};

export const getAllArticles = () => {
  return fs
    .readdirSync(ARTICLES_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName);

      // will omit articles that are not published
      if (source.includes('isPublished: false')) {
        return null;
      }

      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug
      };
    })
    .filter((x) => x !== null);
};
