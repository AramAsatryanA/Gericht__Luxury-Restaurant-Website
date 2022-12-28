import { useSelector } from "react-redux";

import SectionSubtitle from "../../UI/SectionSubtitle";
import SectionButton from "../../UI/SectionButton";
import BlogsSectionItem from "./BlogsSectionItem";

import styles from "./BlogsSection.module.css";

function BlogsSection() {
  const { blogs } = useSelector((state) => state.blogsSectionContent);

  return (
    <section id="blogs-section" className={styles.section}>
      <div className={`container ${styles["section__container"]}`}>
        <div>
          <SectionSubtitle text="Blogs" />
          <h2 className="section__title-h2">Gerícht updates</h2>
        </div>
        <ul className={styles["blogs__items"]}>
          {blogs.map((blog, index) => (
            <BlogsSectionItem key={blog.title + index} blog={blog} />
          ))}
        </ul>
        <SectionButton text="View More" />
      </div>
    </section>
  );
}

export default BlogsSection;
