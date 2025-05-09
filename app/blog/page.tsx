export const metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function BlogPage() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });

  return <h1>My Blog</h1>;
}
