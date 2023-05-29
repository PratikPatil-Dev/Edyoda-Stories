import Styles from "./LatestPost.module.css";

const LatestPost = () => {
  return (
    <div className={Styles.latestPosts}>
      <p className={Styles.heading}>Latest Posts</p>
      <div className={Styles.filterText}>
        <div>
          <img
            className={Styles.filterIcon}
            alt="Filter Icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
          />
        </div>
        <span>Filter by Categories</span>
      </div>
      <section className={Styles.categoryContainer}>
        <div className={Styles.categoryItem}>All</div>
        <div className={Styles.categoryItem}>Artificial Intelligence</div>
        <div className={Styles.categoryItem}>Cloud Computing</div>
        <div className={Styles.categoryItem}>Technology and Tools</div>
        <div className={Styles.categoryItem}>Programming Languages</div>
        <div className={Styles.categoryItem}>Mobile Application Development</div>
        <div className={Styles.categoryItem}>Get a Job in Tech company</div>
        <div className={Styles.categoryItem}>DevOps</div>
        <div className={Styles.categoryItem}>Others</div>
      </section>
    </div>
  );
};
export default LatestPost;
