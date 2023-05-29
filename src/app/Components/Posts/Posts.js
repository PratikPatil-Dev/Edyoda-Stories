import Styles from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={Styles.blogs}>
      <section className={Styles.blogs}>
        <div className={Styles.blogItem}>
          <div>
            <img
              className={Styles.blogImg}
              src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"
              alt="machine learning image"
            />
          </div>
          <div className={Styles.blogContent}>
            <h2>Introdcution To A Machine Learning Online Course</h2>
            <p className={Styles.blogAuthor}>
              Edyoda <span className={Styles.blogDate}>| 19 Feb 2023</span>{" "}
            </p>
            <p className={Styles.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam perferendis, provident ipsam enim harum quos nisi
              suscipit aut beatae quas dolore odio. Totam nihil recusandae
              quaerat! Itaque voluptas sapiente minima!
            </p>
          </div>
        </div>

        <div className={Styles.blogItem}>
          <div>
            <img
              className={Styles.blogImg}
              src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"
              alt="machine learning image"
            />
          </div>
          <div className={Styles.blogContent}>
            <h2>LAMP Stck vs MERN Stack</h2>
            <p className={Styles.blogAuthor}>
              Richard Philip{" "}
              <span className={Styles.blogDate}>| 02 Mar 2023</span>{" "}
            </p>
            <p className={Styles.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam perferendis, provident ipsam enim harum quos nisi
              suscipit aut beatae quas dolore odio. Totam nihil recusandae
              quaerat! Itaque voluptas sapiente minima!
            </p>
          </div>
        </div>

        <div className={Styles.blogItem}>
          <div>
            <img
              className={Styles.blogImg}
              src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
              alt="machine learning image"
            />
          </div>
          <div className={Styles.blogContent}>
            <h2>Advance Cloud Coumputing Concepts</h2>
            <p className={Styles.blogAuthor}>
              Ken Williams{" "}
              <span className={Styles.blogDate}>| 06 Mar 2023</span>{" "}
            </p>
            <p className={Styles.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam perferendis, provident ipsam enim harum quos nisi
              suscipit aut beatae quas dolore odio. Totam nihil recusandae
              quaerat! Itaque voluptas sapiente minima!
            </p>
          </div>
        </div>
      </section>

      <section className={Styles.blogs}>
        <div className={Styles.blogItem}>
          <div>
            <img
              className={Styles.blogImg}
              src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
              alt="machine learning image"
            />
          </div>
          <div className={Styles.blogContent}>
            <h2>Futue Of Big Data Analytics</h2>
            <p className={Styles.blogAuthor}>
              Sundar Pichai{" "}
              <span className={Styles.blogDate}>| 10 Apr 2023</span>{" "}
            </p>
            <p className={Styles.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam perferendis, provident ipsam enim harum quos nisi
              suscipit aut beatae quas dolore odio. Totam nihil recusandae
              quaerat! Itaque voluptas sapiente minima!
            </p>
          </div>
        </div>

        <div className={Styles.blogItem}>
          <div>
            <img
              className={Styles.blogImg}
              src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
              alt="machine learning image"
            />
          </div>
          <div className={Styles.blogContent}>
            <h2>Top 10 Cyber Security Courses By Industry Experts</h2>
            <p className={Styles.blogAuthor}>
              Cyber Cell <span className={Styles.blogDate}>| 12 May 2023</span>{" "}
            </p>
            <p className={Styles.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam perferendis, provident ipsam enim harum quos nisi
              suscipit aut beatae quas dolore odio. Totam nihil recusandae
              quaerat! Itaque voluptas sapiente minima!
            </p>
          </div>
        </div>

        <div className={Styles.blogItem}>
          <div>
            <img
              className={Styles.blogImg}
              src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
              alt="machine learning image"
            />
          </div>
          <div className={Styles.blogContent}>
            <h2>Recover Lost Data Using Data Retriveing Techniques</h2>
            <p className={Styles.blogAuthor}>
              Mr. Nobody <span className={Styles.blogDate}>| 22 May 2023</span>{" "}
            </p>
            <p className={Styles.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam perferendis, provident ipsam enim harum quos nisi
              suscipit aut beatae quas dolore odio. Totam nihil recusandae
              quaerat! Itaque voluptas sapiente minima!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
