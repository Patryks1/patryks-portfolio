import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

export const ARTICLES_PATH = path.join(process.cwd(), 'blog/articles');

export const getFileContent = (filename: string): string => {
  return fs.readFileSync(path.join(ARTICLES_PATH, filename), 'utf8');
};

const getCompiledMDX = async (content: string) => {
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
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const getSingleArticle = async (slug: string) => {
  const source = getFileContent(`${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

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
      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug
      };
    });
};
